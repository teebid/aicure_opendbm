
from opendbm.model import VideoModel
# from opendbm import Model
from dbm_lib.dbm_features.raw_features.video.face_landmark import run_face_landmark
import pandas as pd

class Landmark(VideoModel):
# class Landmark(Model):
    def __init__(self):
        pass
    def fit_transform(self, path):
        # super()._fit_transform(path)
        # df = run_face_landmark(video_uri, out_dir, f_cfg)
        # return df
        pass
        
    def fit(self, path):
        pass
    def to_dataframe(self):
        return pd.DataFrame()