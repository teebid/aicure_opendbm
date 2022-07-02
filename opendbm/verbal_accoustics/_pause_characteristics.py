
from opendbm.model import AudioModel 
from dbm_lib.dbm_features.raw_features.audio.pause_segment import run_pause_segment
import pandas as pd

class PauseCharacteristics(AudioModel):
    def __init__(self):
        super().__init__()
        self._params = ['aco_totaltime', 'aco_speakingtime', 'aco_numpauses',
                       'aco_pausetime','aco_pausefrac']

    @AudioModel.prep_func
    def _fit_transform(self, path, **kwargs):
        return run_pause_segment(path, '.', self.r_config, save=False)
