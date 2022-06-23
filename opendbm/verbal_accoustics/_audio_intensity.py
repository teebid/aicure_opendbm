
from opendbm.model import AudioModel 
from dbm_lib.dbm_features.raw_features.audio.intensity import calc_intensity, run_intensity
import pandas as pd
import os

class AudioIntensity(AudioModel):
    def __init__(self):
        super().__init__()
        self._params = ['aco_int']

    @AudioModel.prep_func
    def _fit_transform(self, path):
        return run_intensity(path, '.', self.r_config, save=False)

    def to_dataframe(self):
        return super()._to_dataframe()

    def mean(self):
        return super()._mean()

    def std(self):
        return super()._std()