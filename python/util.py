import time

import yaml
import grpc

import example_pb2 as pb
import example_pb2_grpc as pbgrpc


class Server:
    name = ""
    type = ""
    port = -1
    cmd = ""
    stub = None

    def __init__(self, name, dictionary):
        self.name = name
        self.type = dictionary['type']
        self.port = dictionary['port']


# noinspection PyBroadException
def connect_server(server: Server):
    port_str = f'0.0.0.0:{server.port}'
    channel = grpc.insecure_channel(port_str)
    stub = pbgrpc.ExampleStub(channel)
    time.sleep(0.25)

    try:
        stub.Ping(pb.Empty())
        return stub
    except Exception as _e:
        print("Could not PING server on port {}".format(server.port))
        return None


def set_stub(server: Server):
    server_str = f'server (type, port, name): ({server.type:5}, {server.port}, {server.name})\n'
    stub = connect_server(server)
    if stub is None:
        err_str = "\n  Could not connect to " + server_str + "\n  Try starting the server."
        raise RuntimeError(err_str)
    print("Connected to " + server_str)
    return stub


def read_config(file):
    with open(file, 'r') as stream:
        try:
            config = yaml.safe_load(stream)
            return config
        except yaml.YAMLError as exc:
            print(exc)


def load_server_stubs():
    config = read_config('config.yaml')
    servers = {}
    for k, v in config['servers'].items():
        servers[k] = Server(k, v)
        servers[k].stub = set_stub(servers[k])
    return servers
