import pandas as pd
from dbm_lib.dbm_features.raw_features.video import open_face_process as of
from dbm_lib.config import config_reader, config_raw_feature, config_derive_feature
from dbm_lib.controller import process_feature as pf
from dbm_lib.dbm_features.raw_features.util import util as ut
import os
from pathlib import Path


OPENFACE_PATH = 'pkg/open_dbm/OpenFace/build/bin/FeatureExtraction'
DEEEPSPEECH_URL = "https://github.com/mozilla/DeepSpeech/releases/download/v0.9.1"
DEEPSPEECH_MODELS = ["deepspeech-0.9.1-models.pbmm", "deepspeech-0.9.1-models.scorer"]
OPENFACE_URLS = [
    "https://onedrive.live.com/download?cid=2E2ADA578BFF6E6E&resid=2E2ADA578BFF6E6E%2153070&authkey=AD6KjtYipphwBPc",
    "https://onedrive.live.com/download?cid=2E2ADA578BFF6E6E&resid=2E2ADA578BFF6E6E%2153072&authkey=AKqoZtcN0PSIZH4",
    "https://onedrive.live.com/download?cid=2E2ADA578BFF6E6E&resid=2E2ADA578BFF6E6E%2153079&authkey=ANpDR1n3ckL_0gs",
    "https://onedrive.live.com/download?cid=2E2ADA578BFF6E6E&resid=2E2ADA578BFF6E6E%2153070&authkey=AD6KjtYipphwBPc"
]
OPENDBM_DATA = Path.home()/".opendbm"
DLIB_SHAPE_MODEL = 'pkg/shape_detector/shape_predictor_68_face_landmarks.dat'



class Model(object):
    def __init__(self):
        self.s_config = config_reader.ConfigReader()
        self.r_config = config_raw_feature.ConfigRawReader()
        self.d_config = config_derive_feature.ConfigDeriveReader()
        self._df = None
        self._params = []

    def to_dataframe(self):
        if self._df is None:
            raise Exception("Model has not been fit yet")
        else:
            return self._df

    def mean(self):
        return self._df[self._params].mean()
    
    def std(self):
        return self._df[self._params].std()

class VideoModel(Model):
    def __init__(self):
        super().__init__()

    def _fit(self, path):
            # of.process_open_face(path, os.path.dirname(video_file), out_path, OPENFACE_PATH, args.dbm_group,video_tracking=False)
        ut.compute_open_face_features(path,'.',OPENFACE_PATH)


class AudioModel(Model) :
    def __init__(self):
        super().__init__()
      
    def prep_func(func, save=False):

        def wrapper(self, *args, **kwargs):
            path = args[0]
            istmp = False
            if not path.endswith('.wav'):
                istmp = True
                tpath = pf.audio_to_wav(path, tmp=True)
                df = func(self, tpath)
                df['dbm_master_url'] = path
                os.remove(tpath)
            else:
                 df = func(self, path, **kwargs)
            return df
        return wrapper




