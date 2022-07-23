# import numpy as np
# from numpy.testing import assert_allclose


# @mark.smoke
# @mark.body
class FacialTest:
    def test_get_landmark(self, processing_facial_activity):
        res = processing_facial_activity.get_landmark()
        res_df = res.to_dataframe()
        assert len(res_df)

    def test_dummy_facial(self):
        assert True
