from setuptools import setup, find_packages
from os import path

here = path.abspath(path.dirname(__file__))
with open("README.md", 'r', encoding='utf-8') as f:
    long_description = f.read()

setup(
    name='pbt-grpc-workbench',
    version='1.0',
    description='Python property-based-testing gRPC workbench',
    long_description=long_description,
    long_description_content_type='text/markdown',
    author='Crippen',
    zip_safe=True,
    license='BSD 3-Clause',
    install_requires=[
        'grpcio>=1.33',
        'grpcio-tools>=1.33',
        'hypothesis>=5.41',
        'pyyaml>=5.3.1',
        'pytest>=3.0',
        'pylint>=2.6',
    ],
    packages=find_packages(
        exclude=['contrib', 'docs', 'tests', 'dist', 'build']),
)
