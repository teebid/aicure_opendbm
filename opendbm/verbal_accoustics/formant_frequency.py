
from opendbm.model import AudioModel 
from dbm_lib.dbm_features.raw_features.audio.formant_freq import run_formant
import pandas as pd

class FormantFrequency(AudioModel):
    def __init__(self):
        super().__init__()

    @AudioModel.prep_func 
    def fit_transform(self, path):
        return run_formant(path, '.', self.r_config, save=False)
        
    def fit(self, path):
        pass
    def to_dataframe(self):
        return pd.DataFrame()
