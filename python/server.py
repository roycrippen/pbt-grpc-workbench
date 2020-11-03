from concurrent import futures
import time
import logging
import sys

import grpc

import util
import example_pb2_grpc as pbgrpc
import example_pb2 as pb

_ONE_DAY_IN_SECONDS = 60 * 60 * 24


# functions to validate
def xor_cipher(key: str, in_str: str) -> str:
    key_len = len(key)
    ks = bytearray(key, encoding='utf-8')
    xs = bytearray()
    for i, c in enumerate(bytearray(in_str, encoding='utf-8')):
        xs.append(c ^ ks[i % key_len])
    return xs.decode()


def my_sqrt(x: float, epsilon: float) -> float:
    if x == 0 or x == 1:
        return x

    abs_x = abs(x)
    while True:
        ans = (x + abs_x / x) / 2
        if abs(x - ans) < epsilon:
            break
        x = ans

    return ans


class Servicer(pbgrpc.ExampleServicer):

    def Ping(self, request, _context):
        logging.info('Ping received')
        return pb.Status(status='OK')

    def XorCipher(self, request, _context):
        out_str = xor_cipher(request.key, request.in_str)
        return pb.XorCipherResponse(out_str=out_str)

    def MySqrt(self, request, context):
        value = my_sqrt(request.value, request.epsilon)
        return pb.Calc(value=value, epsilon=request.epsilon)


def serve(port_num):
    port_str = f'0.0.0.0:{port_num}'
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    servicer = Servicer()
    pbgrpc.add_ExampleServicer_to_server(servicer, server)
    port_num = server.add_insecure_port(port_str)
    if port_num == 0:
        err_str = f'Could not connect to server at port {port_str}'
        logging.error(err_str)
        raise RuntimeError(err_str)
    else:
        server.start()
        msg_str = f'Server listening on: {port_str}'
        logging.info(msg_str)
        try:
            while True:
                time.sleep(_ONE_DAY_IN_SECONDS)
        except KeyboardInterrupt:
            server.stop(0)


def set_logger(filename=None):
    fmt_str = '[%(levelname)s:Py  Server] -> %(message)s'

    if filename is not None:  # file and stdout
        logging.basicConfig(filename=filename, filemode='w',
                            level=logging.INFO, format=fmt_str)
        logging.basicConfig(level=logging.INFO, format=fmt_str)
        root = logging.getLogger()
        handler = logging.StreamHandler(sys.stdout)
        handler.setLevel(logging.INFO)
        handler.setFormatter(logging.Formatter(fmt_str))
        root.addHandler(handler)
    else:
        logging.basicConfig(level=logging.INFO, format=fmt_str)
        root = logging.getLogger()

    return root


if __name__ == '__main__':
    root_logger = set_logger()
    config = util.read_config('config.yaml')
    port = 50051
    if 'servers' in config and 'py' in config['servers'] and 'port' in config['servers']['py']:
        port = config['servers']['py']['port']
    serve(port)
