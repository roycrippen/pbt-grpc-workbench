import { ExampleClientHandler } from "../src/client";
import {
    Calc,
    XorCipherRequest,
    XorCipherResponse,
} from "../src/generated/example_pb";
import * as grpc from "grpc";
import assert = require("assert");

mainTest(false)
    .then(async () => {
        process.exit(0);
    })
    .catch(async (e) => {
        console.error(e);
        process.exit(1);
    });

async function mainTest(importSampleData: boolean) {
    const url: string = '0.0.0.0:50052';
    console.log(`Testing Example gRPC Server at: ${url}`);

    const handler = new ExampleClientHandler(url);
    const state = handler.exampleClient.getChannel().getConnectivityState(true);
    if (state > 2) {
        console.log(`client handler connection failure, aborting tests\n`);
        return;
    }

    try {
        await manyPingTest(handler, 10);
        await xorCipherTest(handler);
        await manySqrtTest(handler, 10, 0.0000001);
    } catch (e) {
        console.log(e);
        throw e;
    }
}

async function manyPingTest(
    handler: ExampleClientHandler,
    count: number
) {
    for (let i = 0; i < count; i++) {
        let r = await handler.ping();
        assert(r.getStatus() === "OK");
    }
    console.log(`[manyPingTest, count = ${count.toLocaleString()}] ==> OK`);
}

async function xorCipherTest(handler: ExampleClientHandler) {
    const request: XorCipherRequest = new XorCipherRequest();
    request.setKey("secret key")
    request.setInStr("some message")
    let response: XorCipherResponse = await handler.xorCipher(request);
    request.setInStr(response.getOutStr())
    response = await handler.xorCipher(request);
    assert(response.getOutStr() == "some message");
    console.log(`[xorCipherTest] ==> OK`);
}

async function manySqrtTest(
    handler: ExampleClientHandler,
    count: number,
    epsilon: number
) {
    const input = new Calc()
    input.setEpsilon(epsilon);
    for (let i = 0; i < count; i++) {
        input.setValue(i * Math.PI);
        let r = await handler.mySqrt(input);
        assert(Math.abs(r.getValue() - Math.sqrt(i * Math.PI)) < epsilon);
    }
    console.log(`[manySqrtTest, count = ${count.toLocaleString()}] ==> OK`);
}
