
from opendbm.model import AudioModel 
from dbm_lib.dbm_features.raw_features.audio.shimmer import run_shimmer
import pandas as pd

class Shimmer(AudioModel):
    def __init__(self):
        super().__init__()
        self._params = ['aco_shimmer']

    @AudioModel.prep_func
    def _fit_transform(self, path):
        return run_shimmer(path, '.', self.r_config, save=False)
