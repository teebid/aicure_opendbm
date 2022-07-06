from opendbm.model import VideoModel, DLIB_SHAPE_MODEL
from dbm_lib.dbm_features.raw_features.movement.eye_blink import run_eye_blink


class EyeBlink(VideoModel):
    def __init__(self):
        super().__init__()
        self._params = ["mov_blink_ear", "mov_blinkframe", "mov_blinkdur", "fps"]

    def _fit_transform(self, path):
        return run_eye_blink(path, '.', self.r_config, DLIB_SHAPE_MODEL, save=False)





