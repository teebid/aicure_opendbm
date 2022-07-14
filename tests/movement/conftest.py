import importlib
import sys

from pytest import fixture

# from opendbm.speech import Speech
sys.path.append("")
movement = importlib.import_module("opendbm.movement")
path1 = "tests/test_data/opendbmmovtest_v1.mp4"


@fixture(scope="class")
def processing_movement():
    m = movement.Movement()
    m.fit(path1)

    yield m
