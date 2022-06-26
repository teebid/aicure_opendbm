
from opendbm.model import AudioModel 
from dbm_lib.dbm_features.raw_features.audio.pitch_freq import run_pitch
import pandas as pd

class PitchFrequency(AudioModel):
    def __init__(self):
        super().__init__()
        self._params = ['aco_ff']

    @AudioModel.prep_func
    def _fit_transform(self, path):
        return run_pitch(path, '.', self.r_config, save=False)
