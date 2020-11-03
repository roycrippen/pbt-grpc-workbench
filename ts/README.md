# # Typescript gRPC Test Server

gRPC service to find, read and save scenarios

Uses static code generation. <br>

Dependencies:

- [node >= v10.16.0](https://github.com/nvm-sh/nvm) <br><br>

## Quick start

### Install dependencies
```bash
$ npm install
```

### Start server
```bash
$ npm run server
```

### Run test client
```bash
$ npm run test:client
```
<br>

## Generate proto files manually

```bash
$ npm run protoc

# or
$ bash protoc.sh
```

Running the server also generates source files.
