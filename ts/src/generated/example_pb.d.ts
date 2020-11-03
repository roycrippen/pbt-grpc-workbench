// package: proto
// file: example.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Empty extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Empty.AsObject;
    static toObject(includeInstance: boolean, msg: Empty): Empty.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Empty, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Empty;
    static deserializeBinaryFromReader(message: Empty, reader: jspb.BinaryReader): Empty;
}

export namespace Empty {
    export type AsObject = {
    }
}

export class Status extends jspb.Message { 
    getStatus(): string;
    setStatus(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Status.AsObject;
    static toObject(includeInstance: boolean, msg: Status): Status.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Status, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Status;
    static deserializeBinaryFromReader(message: Status, reader: jspb.BinaryReader): Status;
}

export namespace Status {
    export type AsObject = {
        status: string,
    }
}

export class XorCipherRequest extends jspb.Message { 
    getKey(): string;
    setKey(value: string): void;

    getInStr(): string;
    setInStr(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): XorCipherRequest.AsObject;
    static toObject(includeInstance: boolean, msg: XorCipherRequest): XorCipherRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: XorCipherRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): XorCipherRequest;
    static deserializeBinaryFromReader(message: XorCipherRequest, reader: jspb.BinaryReader): XorCipherRequest;
}

export namespace XorCipherRequest {
    export type AsObject = {
        key: string,
        inStr: string,
    }
}

export class XorCipherResponse extends jspb.Message { 
    getOutStr(): string;
    setOutStr(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): XorCipherResponse.AsObject;
    static toObject(includeInstance: boolean, msg: XorCipherResponse): XorCipherResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: XorCipherResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): XorCipherResponse;
    static deserializeBinaryFromReader(message: XorCipherResponse, reader: jspb.BinaryReader): XorCipherResponse;
}

export namespace XorCipherResponse {
    export type AsObject = {
        outStr: string,
    }
}

export class Calc extends jspb.Message { 
    getValue(): number;
    setValue(value: number): void;

    getEpsilon(): number;
    setEpsilon(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Calc.AsObject;
    static toObject(includeInstance: boolean, msg: Calc): Calc.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Calc, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Calc;
    static deserializeBinaryFromReader(message: Calc, reader: jspb.BinaryReader): Calc;
}

export namespace Calc {
    export type AsObject = {
        value: number,
        epsilon: number,
    }
}
