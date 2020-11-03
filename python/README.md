# pbt-grpc-workbench 
Python lead multi-language property based testing via RPC

depends on 
- grpcio
- grpcio-tools 
- hypothesis
- pyyaml
- pytest

also see [typescript dependencies](../ts/README.md)

## Install dependencies
from application root directory
```bash
$ python3 -m venv venv         # If not created, create a venv
$ source ./venv/bin/activate   # Activate venv
(venv) $ pip3 install .        # Install dependencies
```

## Generate python files
```bash
(venv) $ python3 run_codegen.py
```

## Start severs (each in new terminal)
### Start python server
```bash
(venv) $ python3 server.py 
```

## Start typescript server
```bash
(venv) $ cd ../ts
$ npm run server 
```

## Run all tests
```bash
# start all servers
# make changes to config.yaml as needed 
# then in a new terminal
$ source ./venv/bin/activate 
(venv) $ python3 test_runner.py
```

## Deactivate venv
```bash
# when development work is complete leave the virtual environment
(venv) $ deactivate 
```
