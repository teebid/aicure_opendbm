import sys

sys.path.append("")
from opendbm.speech import Speech
from pytest import fixture

# sys.path.append('../../')


path1 = "sample_data/opendbmfacialtest_v1.mp4"
path2 = f"{path1[:-4]}.wav"


@fixture(scope='class')
def processing_speech():
    m = Speech()
    m.fit(path2)

    yield m
