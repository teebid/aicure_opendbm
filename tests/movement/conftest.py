from pytest import fixture

path1 = "tests/test_data/opendbmmovtest_v1.mp4"


@fixture(scope="class")
def processing_movement(get_model):
    m = get_model.movement
    m.fit(path1)

    yield m
