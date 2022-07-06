from collections import OrderedDict

from opendbm.model import VideoModel 
from dbm_lib.dbm_features.raw_features.video import open_face_process as of

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

        self._models = OrderedDict({
            "eye_blink": self._eye_blink,
            "eye_gaze": self._eye_gaze,
            "facial_tremor": self._facial_tremor,
            "head_movement": self._head_movement,
            "vocal_tremor": self._vocal_tremor
         })

    def fit(self, path):
        # super()._fit(path)
        for k,v in self._models.items():
            v._df = v._fit_transform(path)

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


