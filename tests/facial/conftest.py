import importlib
import sys

from pytest import fixture

# from opendbm.speech import Speech
sys.path.append("")
facial = importlib.import_module("opendbm.facial_activity")
path1 = "tests/test_data/opendbmmovtest_v1.mp4"


@fixture(scope="class")
def processing_facial_activity():
    m = facial.FacialActivity()
    m.fit(path1)

    yield m
