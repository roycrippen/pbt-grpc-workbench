import os
import glob

from grpc_tools import protoc


def generate_pbs():
    proto_path: str = './proto'
    generated_path = './'
    print('Generating grpc python files')
    files = os.listdir(proto_path)

    for file in files:
        protoc.main((
            '',
            f'-I{proto_path}',
            f'--python_out={generated_path}',
            f'--grpc_python_out={generated_path}',
            f'{proto_path}/{file}',
        ))


def remove_old():
    pb2s = glob.glob('./*_pb2.py', recursive=True)
    for filePath in pb2s:
        try:
            os.remove(filePath)
        except OSError:
            print("Error while deleting file")

    grpcs = glob.glob('./*_pb2_grpc.py', recursive=True)
    for filePath in grpcs:
        try:
            os.remove(filePath)
        except OSError:
            print("Error while deleting file")


if __name__ == '__main__':
    remove_old()
    generate_pbs()
