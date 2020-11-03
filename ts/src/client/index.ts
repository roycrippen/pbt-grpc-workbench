import * as grpc from "grpc";

import { ExampleClient } from "../generated/example_grpc_pb";
import { Empty, XorCipherRequest, XorCipherResponse, Status, Calc } from "../generated/example_pb";

/**
 * Interface to gRPC example service
 */
export class ExampleClientHandler {
    exampleClient: ExampleClient;

    constructor(url?: string) {
        url = url ? url : "0.0.0.0:50052";
        const credentials = grpc.credentials.createInsecure();

        this.exampleClient = new ExampleClient(url, credentials);
    }

    ping(): Promise<Status> {
        return new Promise((resolve, reject) => {
            this.exampleClient.ping(
                new Empty(),
                (err: grpc.ServiceError, response: Status) => {
                    if (err) {
                        reject(err);
                    }
                    resolve(response);
                }
            );
        });
    }

    xorCipher(request: XorCipherRequest): Promise<XorCipherResponse> {
        return new Promise<XorCipherResponse>((resolve, reject) => {
            this.exampleClient.xorCipher(
                request,
                (err: grpc.ServiceError, response: XorCipherResponse) => {
                    if (err) {
                        reject(err);
                    }
                    resolve(response);
                }
            );
        });
    }

    mySqrt(request: Calc): Promise<Calc> {
        return new Promise<Calc>((resolve, reject) => {
            this.exampleClient.mySqrt(
                request,
                (err: grpc.ServiceError, response: Calc) => {
                    if (err) {
                        reject(err);
                    }
                    resolve(response);
                }
            );
        });
    }

} // ExampleClientHandler
