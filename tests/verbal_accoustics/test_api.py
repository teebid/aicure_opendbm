

from pytest import mark

import numpy as np
from numpy.testing import assert_allclose

# @mark.smoke
# @mark.body
class BodyTest:


    def test_get_audio_intensity(self, processing_verbal_accoustics):
        res = processing_verbal_accoustics.get_audio_intensity()
        actual_mean = 52.867660826299
        actual_std = 6.357796

        assert np.isclose(res.mean().item(),actual_mean,rtol=1e-5,atol=1e-8)
        assert np.isclose(res.std().item(),actual_std,rtol=1e-5,atol=1e-8)
       

    def test_get_pitch_frequency(self, processing_verbal_accoustics):
        res = processing_verbal_accoustics.get_pitch_frequency()
        actual_mean = 27.270735
        actual_std = 58.073703

        assert np.isclose(res.mean().item(),actual_mean,rtol=1e-5,atol=1e-8)
        assert np.isclose(res.std().item(),actual_std,rtol=1e-5,atol=1e-8)

    def test_get_formant_frequency(self, processing_verbal_accoustics):
        res = processing_verbal_accoustics.get_formant_frequency()
        actual_mean = [ 679.47914618, 1788.237625  , 2931.83885151, 4075.29506138]
        actual_std = [366.35888699, 472.92129736, 543.15256087, 431.39331643]
        
        assert_allclose(res.mean(), actual_mean, rtol=1e-5,atol=1e-8)
        assert_allclose(res.std(), actual_std, rtol=1e-5,atol=1e-8)
            
        

    def test_get_harmonic_noise(self, processing_verbal_accoustics):
        res = processing_verbal_accoustics.get_harmonic_noise()
        
        actual_mean = 3.154794
        actual_std = 7.389723

        assert np.isclose(res.mean().item(),actual_mean,rtol=1e-5,atol=1e-8)
        assert np.isclose(res.std().item(),actual_std,rtol=1e-5,atol=1e-8)
    
    def test_get_glottal_noise(self, processing_verbal_accoustics):
        res = processing_verbal_accoustics.get_glottal_noise() #still NaN
        actual_mean = 3.154794 
        actual_std = 7.389723

        assert np.isclose(res.mean().item(),actual_mean,rtol=1e-5,atol=1e-8)
        assert np.isclose(res.std().item(),actual_std,rtol=1e-5,atol=1e-8)
        

    def test_get_jitter(self, processing_verbal_accoustics):
        res = processing_verbal_accoustics.get_jitter() #still NaN
        actual_mean = 3.154794 
        actual_std = 7.389723

        assert np.isclose(res.mean().item(),actual_mean,rtol=1e-5,atol=1e-8)
        assert np.isclose(res.std().item(),actual_std,rtol=1e-5,atol=1e-8)

    def test_get_shimmer(self, processing_verbal_accoustics):
        res = processing_verbal_accoustics.get_shimmer() #still NaN
        actual_mean = 3.154794 
        actual_std = 7.389723

        assert np.isclose(res.mean().item(),actual_mean,rtol=1e-5,atol=1e-8)
        assert np.isclose(res.std().item(),actual_std,rtol=1e-5,atol=1e-8)
    
    def test_get_pause_characteristics(self, processing_verbal_accoustics):
        res = processing_verbal_accoustics.get_pause_characteristics()
        actual_mean = [84.76, 28.84, 32, 55.92, 0.65974516] 

        assert_allclose(res.mean(), actual_mean, rtol=1e-5,atol=1e-8)
    

    def test_get_voice_prevalence(self, processing_verbal_accoustics):
        res = processing_verbal_accoustics.get_voice_prevalence()
        actual_mean = [1865.0, 8794.0, 21.207641573800316]

        assert_allclose(res.mean(), actual_mean, rtol=1e-5,atol=1e-8)


    def test_dummy_1(self):
        assert True
    def test_dummy_2(self):
        assert True
            