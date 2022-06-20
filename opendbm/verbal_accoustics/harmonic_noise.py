
from opendbm.model import AudioModel 
from dbm_lib.dbm_features.raw_features.audio.hnr import run_hnr
import pandas as pd

class HarmonicsNoiseRatio(AudioModel):
    def __init__(self):
        super().__init__()
        
    @AudioModel.prep_func 
    def fit_transform(self, path):
        return run_hnr(path, '.', self.r_config, save=False)
        
    def fit(self, path):
        pass
    def to_dataframe(self):
        return pd.DataFrame()
