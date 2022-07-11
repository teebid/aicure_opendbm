import importlib
import sys

from pytest import fixture

# from opendbm.speech import Speech
sys.path.append("")
speech = importlib.import_module("opendbm.speech")
path1 = "tests/test_data/opendbmfacialtest_v1.mp4"
path2 = f"{path1[:-4]}.wav"


@fixture(scope="class")
def processing_speech():
    m = speech.Speech()
    m.fit(path1)

    yield m
