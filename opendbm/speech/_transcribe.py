import tempfile

from dbm_lib.dbm_features.raw_features.nlp.transcribe import run_transcribe
from opendbm.model import OPENDBM_DATA, AudioModel


class Transcribe(AudioModel):
    def __init__(self):
        super().__init__()
        self._params = ["nlp_transcribe", "nlp_totalTime"]

    @AudioModel.prep_func
    def _fit_transform(self, path):
        return run_transcribe(
            path, f"{tempfile.gettempdir()}/", self.r_config, OPENDBM_DATA, save=False
        )
