"""
file_name: init
project_name: DBM
created: 2020-20-07
"""

from __future__ import absolute_import, division, print_function

import os

from .dbm_features.raw_features.audio.formant_freq import run_formant
from .dbm_features.raw_features.audio.intensity import run_intensity
from .dbm_features.raw_features.audio.pause_segment import run_pause_segment
from .dbm_features.raw_features.movement.facial_tremor import fac_tremor_process
from .dbm_features.raw_features.movement.head_motion import run_head_movement
from .dbm_features.raw_features.nlp.speech_features import run_speech_feature
from .dbm_features.raw_features.video import ConfigFaceReader
from .dbm_features.raw_features.video.face_asymmetry import run_face_asymmetry
from .dbm_features.raw_features.video.face_landmark import run_face_landmark

DBMLIB_PATH = os.path.dirname(__file__)
DBMLIB_SERVICE_CONFIG = os.path.abspath(
    os.path.join(DBMLIB_PATH, "../resources/services/services.yml")
)
DBMLIB_FEATURE_CONFIG = os.path.abspath(
    os.path.join(DBMLIB_PATH, "../resources/features/raw_feature.yml")
)
DBMLIB_DERIVE_FEATURE_CONFIG = os.path.abspath(
    os.path.join(DBMLIB_PATH, "../resources/features/derived_feature.yml")
)
