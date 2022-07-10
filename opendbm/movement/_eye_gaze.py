from dbm_lib.dbm_features.raw_features.movement.eye_gaze import run_eye_gaze
from opendbm.model import VideoModel


class EyeGaze(VideoModel):
    def __init__(self):
        super().__init__()
        self._params = [
            "mov_lefteyex",
            "mov_lefteyey",
            "mov_lefteyez",
            "mov_righteyex",
            "mov_righteyey",
            "mov_righteyez",
            "mov_leyedisp",
            "mov_reyedisp",
        ]

    def _fit_transform(self, path):
        return run_eye_gaze(path, "/tmp/", self.r_config, save=False)
