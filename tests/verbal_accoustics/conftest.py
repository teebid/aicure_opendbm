import importlib
import sys

from pytest import fixture

sys.path.append("")
verbal_accoustics = importlib.import_module("opendbm.verbal_accoustics")
path1 = "tests/test_data/opendbmfacialtest_v1.mp4"
path2 = f"{path1[:-4]}.wav"


@fixture(scope="class")
def processing_verbal_accoustics():
    m = verbal_accoustics.VerbalAccoustics()
    m.fit(path2)

    yield m
