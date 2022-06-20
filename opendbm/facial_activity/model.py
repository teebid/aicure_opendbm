
from opendbm.model import Model
import pandas as pd
from dbm_lib.dbm_features.raw_features.video import open_face_process as of
import os

OPENFACE_PATH = 'pkg/open_dbm/OpenFace/build/bin/FeatureExtraction'

class FacialModel(Model):
    def __init__(self):
        pass
    def _fit_transform(self, path):
        super()._fit_transform(path)
            # of.process_open_face(path, os.path.dirname(video_file), out_path, OPENFACE_PATH, args.dbm_group,video_tracking=False)
        of.process_open_face(path, os.path.dirname(video_file), out_path, OPENFACE_PATH, args.dbm_group,video_tracking=False)
    
    def fit(self, path):
        pass
    def to_dataframe(self):
        return pd.DataFrame()