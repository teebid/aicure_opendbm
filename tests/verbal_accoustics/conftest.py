import sys
sys.path.append('../../')

sys.path.append("")
import os
print(os. getcwd())
from opendbm.verbal_accoustics import VerbalAccoustics
from pytest import fixture
path1 = "/Users/jordinapitupulu/workspace/opendbm_tbi/sample_data/opendbmfacialtest_v1.mp4"
path2 = f"{path1[:-4]}.wav"

@fixture(scope='class')
def processing_verbal_accoustics():
    m = VerbalAccoustics()
    m.fit(path2)

    yield m