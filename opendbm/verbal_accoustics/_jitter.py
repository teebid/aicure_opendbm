
from opendbm.model import AudioModel 
from dbm_lib.dbm_features.raw_features.audio.jitter import run_jitter
import pandas as pd

class Jitter(AudioModel):
    def __init__(self):
        super().__init__()
        self._params = ['aco_jitter']

    @AudioModel.prep_func        
    def _fit_transform(self, path):
        return run_jitter(path, '.', self.r_config, save=False)
        