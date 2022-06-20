
from opendbm.model import AudioModel 
from dbm_lib.dbm_features.raw_features.audio.voice_frame_score import run_vfs
import pandas as pd

class VoicePrevalence(AudioModel):
    def __init__(self):
        super().__init__()
        
    def fit_transform(self, path):
        df = run_vfs(path, '.', self.r_config, save=False)
        return df
        
    def fit(self, path):
        pass
    def to_dataframe(self):
        return pd.DataFrame()
