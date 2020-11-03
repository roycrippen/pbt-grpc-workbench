// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var example_pb = require('./example_pb.js');

function serialize_proto_Calc(arg) {
  if (!(arg instanceof example_pb.Calc)) {
    throw new Error('Expected argument of type proto.Calc');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_Calc(buffer_arg) {
  return example_pb.Calc.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_Empty(arg) {
  if (!(arg instanceof example_pb.Empty)) {
    throw new Error('Expected argument of type proto.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_Empty(buffer_arg) {
  return example_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_Status(arg) {
  if (!(arg instanceof example_pb.Status)) {
    throw new Error('Expected argument of type proto.Status');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_Status(buffer_arg) {
  return example_pb.Status.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_XorCipherRequest(arg) {
  if (!(arg instanceof example_pb.XorCipherRequest)) {
    throw new Error('Expected argument of type proto.XorCipherRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_XorCipherRequest(buffer_arg) {
  return example_pb.XorCipherRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_XorCipherResponse(arg) {
  if (!(arg instanceof example_pb.XorCipherResponse)) {
    throw new Error('Expected argument of type proto.XorCipherResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_XorCipherResponse(buffer_arg) {
  return example_pb.XorCipherResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Service definitions
var ExampleService = exports.ExampleService = {
  ping: {
    path: '/proto.Example/Ping',
    requestStream: false,
    responseStream: false,
    requestType: example_pb.Empty,
    responseType: example_pb.Status,
    requestSerialize: serialize_proto_Empty,
    requestDeserialize: deserialize_proto_Empty,
    responseSerialize: serialize_proto_Status,
    responseDeserialize: deserialize_proto_Status,
  },
  xorCipher: {
    path: '/proto.Example/XorCipher',
    requestStream: false,
    responseStream: false,
    requestType: example_pb.XorCipherRequest,
    responseType: example_pb.XorCipherResponse,
    requestSerialize: serialize_proto_XorCipherRequest,
    requestDeserialize: deserialize_proto_XorCipherRequest,
    responseSerialize: serialize_proto_XorCipherResponse,
    responseDeserialize: deserialize_proto_XorCipherResponse,
  },
  mySqrt: {
    path: '/proto.Example/MySqrt',
    requestStream: false,
    responseStream: false,
    requestType: example_pb.Calc,
    responseType: example_pb.Calc,
    requestSerialize: serialize_proto_Calc,
    requestDeserialize: deserialize_proto_Calc,
    responseSerialize: serialize_proto_Calc,
    responseDeserialize: deserialize_proto_Calc,
  },
};

exports.ExampleClient = grpc.makeGenericClientConstructor(ExampleService);
