
from opendbm.model import AudioModel 
from dbm_lib.dbm_features.raw_features.audio.jitter import run_jitter
import pandas as pd

class Jitter(AudioModel):
    def __init__(self):
        super().__init__()
        
    def fit_transform(self, path):
        df = run_jitter(path, '.', self.r_config, save=False)
        return df
        
    def fit(self, path):
        pass
    def to_dataframe(self):
        return pd.DataFrame()
