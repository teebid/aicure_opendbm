"""
file_name: init
project_name: DBM
created: 2020-20-07
"""

from __future__ import absolute_import
from __future__ import division
from __future__ import print_function
import logger

from ..base import BaseModel

import os

import head_motion, eye_blink, eye_gaze, voice_tremor, facial_tremor

DBMLIB_PATH = os.path.dirname(__file__)
DBMLIB_VTREMOR_LIB = os.path.abspath(os.path.join(DBMLIB_PATH,
                                                  '../../../../resources/libraries/voice_tremor.praat'))
DBMLIB_FTREMOR_CONFIG = os.path.abspath(os.path.join(DBMLIB_PATH, '../../../../resources/features/facial/config.json'))


class Movement(BaseModel):
    def __init__(self):
        pass

    def process(self,video_uri, out_dir, r_config, dlib_model):

        logger.info('Processing movement variables from data in {}'.format(video_uri))

        logger.info('processing head movement....')
        head_motion.run_head_movement(video_uri, out_dir, r_config)
    
        logger.info('processing eye blink....')
        eye_blink.run_eye_blink(video_uri, out_dir, r_config, dlib_model)

        logger.info('processing eye gaze....')
        eye_gaze.run_eye_gaze(video_uri, out_dir, r_config)
        
        logger.info('processing voice tremor....')
        voice_tremor.run_vtremor(video_uri, out_dir, r_config)

        logger.info('processing facial tremor....')
        facial_tremor.fac_tremor_process(video_uri, out_dir, r_config, model_output=True)



