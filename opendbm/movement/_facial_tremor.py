from opendbm.model import VideoModel
from dbm_lib.dbm_features.raw_features.movement.facial_tremor import fac_tremor_process

class FacialTremor(VideoModel):
    def __init__(self):
        super().__init__()
        self._params = ["fac_tremor_median_X"]

    def _fit_transform(self, path):
        return fac_tremor_process(path, '.', self.r_config, save=False)





