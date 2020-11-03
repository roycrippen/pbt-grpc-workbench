import { Server, ServerCredentials } from "grpc";
import { ServerUnaryCall } from "grpc";
import { request } from "http";
import { ExampleService } from "../generated/example_grpc_pb";
import { Empty, Status, Calc, XorCipherRequest, XorCipherResponse } from "../generated/example_pb"

export class ExampleHandler {
    private readonly grpcServerAddress: string;
    private readonly grpcServerPort: number;

    constructor(address: string, port: number) {
        this.grpcServerAddress = address;
        this.grpcServerPort = port;
        this.startServer();
    }

    startServer(): void {
        const ping = async (_call: ServerUnaryCall<Empty>, callback: Function): Promise<void> => {
            console.log(`[INFO:Ts  Server] -> Ping received`);
            const response = new Status();
            response.setStatus("OK");
            callback(null, response);
        };

        const xorCipher = async (call: ServerUnaryCall<XorCipherRequest>, callback: Function): Promise<void> => {
            const request = call.request;
            const rs: string = cipher(request.getKey(), request.getInStr())
            const response = new XorCipherResponse();
            response.setOutStr(rs);
            callback(null, response);
        };

        const mySqrt = async (call: ServerUnaryCall<Calc>, callback: Function): Promise<void> => {
            const response = new Calc();
            response.setValue(localSqrt(call.request.getValue(), call.request.getEpsilon()));
            response.setEpsilon(call.request.getEpsilon())
            callback(null, response);
        };


        const server = new Server();
        server.addService(ExampleService, {
            ping,
            xorCipher,
            mySqrt
        });
        server.bindAsync(
            `${this.grpcServerAddress}:${this.grpcServerPort}`,
            ServerCredentials.createInsecure(),
            (err: Error) => {
                if (err) throw err;
                console.log(
                    `[INFO:Py  Server] -> Server listening on: ${this.grpcServerAddress}:${this.grpcServerPort}\n`
                );
                server.start();
            }
        );
    }
}

// functions to validate 
function cipher(key: string, strIn: string): string {
    const keyLength = key.length;
    var ks = Buffer.from(key, 'utf8');
    let xs = [];
    for (var i = 0; i < strIn.length; i++) {
        xs.push(strIn[i].charCodeAt(0) ^ ks[i % keyLength]);
    }

    const str = Buffer.from(xs).toString();

    return str
}

function localSqrt(x: number, epsilon: number): number {
    if (x == 0 || x == 1) return x;

    let ans, absX = Math.abs(x);
    while (true) {
        ans = (x + absX / x) / 2;
        if (Math.abs(x - ans) < epsilon) break;
        x = ans;
    }
    return ans;
};