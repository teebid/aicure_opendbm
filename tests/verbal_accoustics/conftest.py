from pytest import fixture

test_path = "tests/test_data/"
path_mp4 = test_path + "opendbmfacialtest_v1.mp4"
path_wav = test_path + "opendbmfacialtest_v1.wav"


@fixture(scope="class")
def processing_verbal_accoustics_mp4(get_model):
    m = get_model.verbal_accoustics
    m.fit(path_mp4)
    yield m


@fixture(scope="class")
def processing_verbal_accoustics_wav(get_model):
    m = get_model.verbal_accoustics
    m.fit(path_wav)
    yield m
