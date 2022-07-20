import tempfile

from dbm_lib.dbm_features.raw_features.video.face_asymmetry import run_face_asymmetry
from opendbm.model import VideoModel


class Asymmetry(VideoModel):
    def __init__(self):
        super().__init__()
        self._params = [
            "fac_asymmaskmouth",
            "fac_asymmaskeye",
            "fac_asymmaskeyebrow",
            "fac_asymmaskcom",
        ]

    def _fit_transform(self, path):
        return run_face_asymmetry(
            path, f"{tempfile.gettempdir()}/", self.r_config, save=False
        )
