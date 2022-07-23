# import numpy as np
# from numpy.testing import assert_allclose


# @mark.smoke
# @mark.body
class MovementTest:
    def test_get_eye_gaze(self, processing_movement):
        res = processing_movement.get_eye_gaze()
        res_df = res.to_dataframe()
        assert len(res_df)

    def test_dummy_movement(self):
        assert True
