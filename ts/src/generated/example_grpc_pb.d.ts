// package: proto
// file: example.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as example_pb from "./example_pb";

interface IExampleService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    ping: IExampleService_IPing;
    xorCipher: IExampleService_IXorCipher;
    mySqrt: IExampleService_IMySqrt;
}

interface IExampleService_IPing extends grpc.MethodDefinition<example_pb.Empty, example_pb.Status> {
    path: string; // "/proto.Example/Ping"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<example_pb.Empty>;
    requestDeserialize: grpc.deserialize<example_pb.Empty>;
    responseSerialize: grpc.serialize<example_pb.Status>;
    responseDeserialize: grpc.deserialize<example_pb.Status>;
}
interface IExampleService_IXorCipher extends grpc.MethodDefinition<example_pb.XorCipherRequest, example_pb.XorCipherResponse> {
    path: string; // "/proto.Example/XorCipher"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<example_pb.XorCipherRequest>;
    requestDeserialize: grpc.deserialize<example_pb.XorCipherRequest>;
    responseSerialize: grpc.serialize<example_pb.XorCipherResponse>;
    responseDeserialize: grpc.deserialize<example_pb.XorCipherResponse>;
}
interface IExampleService_IMySqrt extends grpc.MethodDefinition<example_pb.Calc, example_pb.Calc> {
    path: string; // "/proto.Example/MySqrt"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<example_pb.Calc>;
    requestDeserialize: grpc.deserialize<example_pb.Calc>;
    responseSerialize: grpc.serialize<example_pb.Calc>;
    responseDeserialize: grpc.deserialize<example_pb.Calc>;
}

export const ExampleService: IExampleService;

export interface IExampleServer {
    ping: grpc.handleUnaryCall<example_pb.Empty, example_pb.Status>;
    xorCipher: grpc.handleUnaryCall<example_pb.XorCipherRequest, example_pb.XorCipherResponse>;
    mySqrt: grpc.handleUnaryCall<example_pb.Calc, example_pb.Calc>;
}

export interface IExampleClient {
    ping(request: example_pb.Empty, callback: (error: grpc.ServiceError | null, response: example_pb.Status) => void): grpc.ClientUnaryCall;
    ping(request: example_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: example_pb.Status) => void): grpc.ClientUnaryCall;
    ping(request: example_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: example_pb.Status) => void): grpc.ClientUnaryCall;
    xorCipher(request: example_pb.XorCipherRequest, callback: (error: grpc.ServiceError | null, response: example_pb.XorCipherResponse) => void): grpc.ClientUnaryCall;
    xorCipher(request: example_pb.XorCipherRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: example_pb.XorCipherResponse) => void): grpc.ClientUnaryCall;
    xorCipher(request: example_pb.XorCipherRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: example_pb.XorCipherResponse) => void): grpc.ClientUnaryCall;
    mySqrt(request: example_pb.Calc, callback: (error: grpc.ServiceError | null, response: example_pb.Calc) => void): grpc.ClientUnaryCall;
    mySqrt(request: example_pb.Calc, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: example_pb.Calc) => void): grpc.ClientUnaryCall;
    mySqrt(request: example_pb.Calc, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: example_pb.Calc) => void): grpc.ClientUnaryCall;
}

export class ExampleClient extends grpc.Client implements IExampleClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public ping(request: example_pb.Empty, callback: (error: grpc.ServiceError | null, response: example_pb.Status) => void): grpc.ClientUnaryCall;
    public ping(request: example_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: example_pb.Status) => void): grpc.ClientUnaryCall;
    public ping(request: example_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: example_pb.Status) => void): grpc.ClientUnaryCall;
    public xorCipher(request: example_pb.XorCipherRequest, callback: (error: grpc.ServiceError | null, response: example_pb.XorCipherResponse) => void): grpc.ClientUnaryCall;
    public xorCipher(request: example_pb.XorCipherRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: example_pb.XorCipherResponse) => void): grpc.ClientUnaryCall;
    public xorCipher(request: example_pb.XorCipherRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: example_pb.XorCipherResponse) => void): grpc.ClientUnaryCall;
    public mySqrt(request: example_pb.Calc, callback: (error: grpc.ServiceError | null, response: example_pb.Calc) => void): grpc.ClientUnaryCall;
    public mySqrt(request: example_pb.Calc, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: example_pb.Calc) => void): grpc.ClientUnaryCall;
    public mySqrt(request: example_pb.Calc, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: example_pb.Calc) => void): grpc.ClientUnaryCall;
}
