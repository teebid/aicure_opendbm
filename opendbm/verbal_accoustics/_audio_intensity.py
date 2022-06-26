
from opendbm.model import AudioModel 
from dbm_lib.dbm_features.raw_features.audio.intensity import calc_intensity, run_intensity

class AudioIntensity(AudioModel):
    def __init__(self):
        super().__init__()
        self._params = ['aco_int']

    @AudioModel.prep_func
    def _fit_transform(self, path):
        return run_intensity(path, '.', self.r_config, save=False)
