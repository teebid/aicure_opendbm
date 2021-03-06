
from opendbm.model import AudioModel 
from dbm_lib.dbm_features.raw_features.audio.formant_freq import run_formant
import pandas as pd

class FormantFrequency(AudioModel):
    def __init__(self):
        super().__init__()
        self._params = ['aco_fm1', 'aco_fm2', 'aco_fm3', 'aco_fm4']

    @AudioModel.prep_func 
    def _fit_transform(self, path, **kwargs):
        return run_formant(path, '.', self.r_config, save=False)
        