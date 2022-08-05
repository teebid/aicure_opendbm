import os
import shutil
import tempfile
from collections import OrderedDict

from opendbm.api_lib.model import VideoModel
from opendbm.dbm_lib.controller import process_feature as pf

from ._eye_blink import EyeBlink
from ._eye_gaze import EyeGaze
from ._facial_tremor import FacialTremor
from ._head_movement import HeadMovement
from ._vocal_tremor import VocalTremor


class Movement(VideoModel):
    def __init__(self):
        super().__init__()
        self._eye_blink = EyeBlink()
        self._eye_gaze = EyeGaze()
        self._facial_tremor = FacialTremor()
        self._head_movement = HeadMovement()
        self._vocal_tremor = VocalTremor()

        self._models = OrderedDict(
            {
                "eye_blink": self._eye_blink,
                "eye_gaze": self._eye_gaze,
                "facial_tremor": self._facial_tremor,
                "head_movement": self._head_movement,
                "vocal_tremor": self._vocal_tremor,
            }
        )

    def fit(self, path):
        result_path, result_path_lmk, bn = super()._fit(path, "movement")
        wav_path = pf.audio_to_wav(path, tmp=True)

        for k, v in self._models.items():
            if k in ["eye_gaze", "head_movement"]:
                v._df = v._fit_transform(result_path)
            elif k == "facial_tremor":
                v._df = v._fit_transform(result_path_lmk)
            elif k == "vocal_tremor":
                v._df = v._fit_transform(wav_path)
            else:
                v._df = v._fit_transform(path)
        shutil.rmtree(f"{tempfile.gettempdir()}/{bn}/")
        shutil.rmtree(f"{tempfile.gettempdir()}/{bn}_landmark_output/")
        os.remove(wav_path)

    def get_eye_blink(self):
        return self._eye_blink

    def get_eye_gaze(self):
        return self._eye_gaze

    def get_facial_tremor(self):
        return self._facial_tremor

    def get_head_movement(self):
        return self._head_movement

    def get_vocal_tremor(self):
        return self._vocal_tremor
