
from opendbm.model import AudioModel 
from dbm_lib.dbm_features.raw_features.audio.gne import run_gne
import pandas as pd

class GlottalNoiseRatio(AudioModel):
    def __init__(self):
        super().__init__()
        
    def fit_transform(self, path):
        df = run_gne(path, '.', self.r_config, save=False)
        return df
        
    def fit(self, path):
        pass
    def to_dataframe(self):
        return pd.DataFrame()
