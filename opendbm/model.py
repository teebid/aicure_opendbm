import pandas as pd
from dbm_lib.dbm_features.raw_features.video import open_face_process as of
from dbm_lib.config import config_reader, config_raw_feature, config_derive_feature
from dbm_lib.controller import process_feature as pf
import os

OPENFACE_PATH = 'pkg/open_dbm/OpenFace/build/bin/FeatureExtraction'

class Model(object):
    def __init__(self):
        self.s_config = config_reader.ConfigReader()
        self.r_config = config_raw_feature.ConfigRawReader()
        self.d_config = config_derive_feature.ConfigDeriveReader()
        self._df = None
        self._params = []

    def _fit_transform(self, path):
        pass
    def _fit(self, path):
        pass
    def _to_dataframe(self):
        pass

class VideoModel(Model):
    def __init__(self):
        pass
    def _fit_transform(self, path):
        super()._fit_transform(path)
            # of.process_open_face(path, os.path.dirname(video_file), out_path, OPENFACE_PATH, args.dbm_group,video_tracking=False)
        of.process_open_face(path, os.path.dirname(video_file), out_path, OPENFACE_PATH, args.dbm_group,video_tracking=False)
    
    def _fit_transform(self):
        pass
    def _fit(self, path):
        pass
    def _to_dataframe(self):
        pass

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
                 df = func(self, path)
            return df
        return wrapper

    def _to_dataframe(self):
        if self._df is None:
            raise Exception("Model has not been fit yet")
        else:
            return self._df

    def _mean(self):
        return self._df[self._params].mean()

    def _std(self):
        return self._df[self._params].std()    