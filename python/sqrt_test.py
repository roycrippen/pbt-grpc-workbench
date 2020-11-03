from hypothesis import given, settings
from hypothesis.strategies import text, characters, floats

import example_pb2 as pb
import util


def call_sqrt(stub, value, epsilon):
    request = pb.Calc(value=value, epsilon=epsilon)
    response = stub.MySqrt(request)
    return response.value


class TestSqrt:
    # server and stubs
    servers = {}
    stub_py = None
    stub_ts = None

    # random generators
    values = floats(allow_nan=False, allow_infinity=False)
    epsilons = floats(min_value=0.0000000001, max_value=0.001, allow_nan=False, allow_infinity=False)


    @classmethod
    def setup_class(cls):
        cls.servers = util.load_server_stubs()
        cls.stub_py = cls.servers['py_server'].stub
        cls.stub_ts = cls.servers['ts_server'].stub

    # @classmethod
    # def teardown_class(cls):

    # hypothesis property based tests
    @given(value=values, epsilon=epsilons)
    @settings(max_examples=100)
    def test_py_py(self, value, epsilon):
        result1 = call_sqrt(self.stub_py, value, epsilon)
        result2 = call_sqrt(self.stub_py, value, epsilon)
        assert (result1 == result2)

    # hypothesis property based tests
    @given(value=values, epsilon=epsilons)
    @settings(max_examples=100)
    def test_ts_ts(self, value, epsilon):
        result1 = call_sqrt(self.stub_ts, value, epsilon)
        result2 = call_sqrt(self.stub_ts, value, epsilon)
        assert (result1 == result2)

    # hypothesis property based tests
    @given(value=values, epsilon=epsilons)
    @settings(max_examples=100)
    def test_py_ts(self, value, epsilon):
        result1 = call_sqrt(self.stub_py, value, epsilon)
        result2 = call_sqrt(self.stub_ts, value, epsilon)
        assert (result1 == result2)

