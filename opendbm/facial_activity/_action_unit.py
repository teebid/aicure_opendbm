
from opendbm.model import VideoModel
from dbm_lib.dbm_features.raw_features.video.face_au import run_face_au

class ActionUnit(VideoModel):
    def __init__(self):
        super().__init__()
        self._params = ["fac_auXXpres", "fac_auXXint"]

    def _fit_transform(self, path):
        return run_face_au(path, '.', self.r_config, save=False)
        