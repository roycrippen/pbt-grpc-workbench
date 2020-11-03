from hypothesis import given, settings
from hypothesis.strategies import text, characters

import example_pb2 as pb
import util


def call_xor_cipher_twice(stub0, stub1, key, s):
    # first call
    request = pb.XorCipherRequest(key=key, in_str=s)
    response = stub0.XorCipher(request)
    # second call with result from first
    request = pb.XorCipherRequest(key=key, in_str=response.out_str)
    response = stub1.XorCipher(request)
    return response.out_str


class TestXorCipher:
    # server and stubs
    servers = {}
    stub_py = None
    stub_ts = None

    # random generators
    utf8_chars = text(characters(min_codepoint=0, max_codepoint=127))
    at_least_one_utf8_char = text(characters(
        min_codepoint=0, max_codepoint=127), min_size=1)

    @classmethod
    def setup_class(cls):
        cls.servers = util.load_server_stubs()
        cls.stub_py = cls.servers['py_server'].stub
        cls.stub_ts = cls.servers['ts_server'].stub

    # @classmethod
    # def teardown_class(cls):

    # hypothesis property based tests
    @given(key=at_least_one_utf8_char, s=utf8_chars)
    @settings(max_examples=100)
    def test_py_py(self, key, s):
        result = call_xor_cipher_twice(self.stub_py, self.stub_py, key, s)
        assert (result == s)

    # hypothesis property based tests
    @given(key=at_least_one_utf8_char, s=utf8_chars)
    @settings(max_examples=100)
    def test_ts_ts(self, key, s):
        result = call_xor_cipher_twice(self.stub_ts, self.stub_ts, key, s)
        assert (result == s)

    @given(key=at_least_one_utf8_char, s=utf8_chars)
    @settings(max_examples=100)
    def test_py_ts(self, key, s):
        result = call_xor_cipher_twice(self.stub_py, self.stub_ts, key, s)
        assert (result == s)
