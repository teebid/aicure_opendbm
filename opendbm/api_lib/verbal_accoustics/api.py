import os
from collections import OrderedDict

from opendbm.api_lib.model import AudioModel
from opendbm.dbm_lib.controller import process_feature as pf

from ._audio_intensity import AudioIntensity
from ._formant_frequency import FormantFrequency
from ._glottal_noise import GlottalNoiseRatio
from ._harmonic_noise import HarmonicsNoiseRatio
from ._jitter import Jitter
from ._pause_characteristics import PauseCharacteristics
from ._pitch_frequency import PitchFrequency
from ._shimmer import Shimmer
from ._voice_prevalence import VoicePrevalence


class VerbalAccoustics(AudioModel):
    def __init__(self):
        super().__init__()
        self._auint = AudioIntensity()
        self._pitchfreq = PitchFrequency()
        self._forfreq = FormantFrequency()
        self._hnr = HarmonicsNoiseRatio()
        self._gne = GlottalNoiseRatio()
        self._jitter = Jitter()
        self._shimmer = Shimmer()
        self._pchar = PauseCharacteristics()
        self._vopre = VoicePrevalence()
        self._models = OrderedDict(
            {
                "audio_intensity": self._auint,
                "pitch_frequency": self._pitchfreq,
                "formant_frequency": self._forfreq,
                "harmonic_noise": self._hnr,
                "glottal_noise": self._gne,
                "jitter": self._jitter,
                "shimmer": self._shimmer,
                "pause_characteristics": self._pchar,
                "voice_prevalence": self._vopre,
            }
        )

    def check_file(self, path):
        return (
            (pf.audio_to_wav(path, tmp=True), False)
            if not path.endswith(".wav")
            else (path, True)
        )

    def fit(self, path):
        path, is_wav = self.check_file(path)
        for k, v in self._models.items():
            if k in ["glottal_noise", "jitter", "shimmer"]:
                v._df = v._fit_transform(path, ff_df=self._pitchfreq._df)
            else:
                v._df = v._fit_transform(path)
        if not is_wav:
            os.remove(path)

    def get_audio_intensity(self):
        return self._auint

    def get_pitch_frequency(self):
        return self._pitchfreq

    def get_formant_frequency(self):
        return self._forfreq

    def get_harmonic_noise(self):
        return self._hnr

    def get_glottal_noise(self):
        return self._gne

    def get_jitter(self):
        return self._jitter

    def get_shimmer(self):
        return self._shimmer

    def get_pause_characteristics(self):
        return self._pchar

    def get_voice_prevalence(self):
        return self._vopre
