import numpy as np
from numpy.testing import assert_allclose


# @mark.smoke
# @mark.body
class SpeechTest:

    def test_get_transcribe(self, processing_speech):
        res = processing_speech.get_transcribe().to_dataframe()
        audio_duration = res['nlp_totalTime'].item()
        transcribed_text = res['nlp_transcribe'].item()
        actual_totaltime = 87.978685
        len_words_count = 57

        assert np.isclose(audio_duration, actual_totaltime, rtol=1e-5, atol=1e-8)

        if type(transcribed_text) != str:
            assert False
        else:
            assert np.isclose(len(transcribed_text.split(' ')), len_words_count, rtol=0.005, atol=1e-8)

    def test_get_speech_features(self, processing_speech):
        res = processing_speech.get_speech_features().to_dataframe().drop(columns="dbm_master_url")
        desired = np.array((res.iloc[0]))
        actual = [1.0, 2.0, 2.0, 1.0, 1.0, 6.0, 6.0, 11.0, 11.0, 5.0, 5.0, 15.0,
                  15.0, -0.8256, 0.08860759493670886, 38.873052120437336, 87.97868480725624]

        assert_allclose(desired, actual, rtol=1e-5, atol=1e-8)
