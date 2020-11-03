#!/bin/bash

# Path to protos
PROTO_PATH="./proto"
PROTO_OUTPUT="./src/generated"
# Path to TS plugin
PROTOC_GEN_TS_PATH="$PWD/node_modules/.bin/protoc-gen-ts"
# Path to GRPC plugin, which generates service typings
GRPC_TOOLS_NODE_PROTOC_PLUGIN="$PWD/node_modules/.bin/grpc_tools_node_protoc_plugin"
# Path to GRPC proto command
GRPC_TOOLS_NODE_PROTOC="$PWD/node_modules/.bin/grpc_tools_node_protoc"

# If windows, add .cmd to properly execute
if [[ "$OSTYPE" == "msys" ]]; then
PROTOC_GEN_TS_PATH="${PROTOC_GEN_TS_PATH}.cmd"
GRPC_TOOLS_NODE_PROTOC_PLUGIN="${GRPC_TOOLS_NODE_PROTOC_PLUGIN}.cmd"
GRPC_TOOLS_NODE_PROTOC="${GRPC_TOOLS_NODE_PROTOC}.cmd"
fi

for f in $PROTO_PATH; do
    # Generate TS, JS, and GRPC files for each .proto file
    ${GRPC_TOOLS_NODE_PROTOC} \
        --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
        --plugin="protoc-gen-grpc=${GRPC_TOOLS_NODE_PROTOC_PLUGIN}" \
        --js_out="import_style=commonjs,binary:${PROTO_OUTPUT}" \
        --ts_out="service=grpc-node:${PROTO_OUTPUT}" \
        --grpc_out="${PROTO_OUTPUT}" \
        -I "${PROTO_PATH}" \
        "${f}"/*.proto
done
