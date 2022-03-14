import os

from config import config_reader, config_raw_feature, config_derive_feature
import logger
import glob
import subprocess
import time
from os.path import splitext

from os.path import isfile, splitext, basename, dirname, join

import _derive as der


class DataLoader(obj):
    def __init__(self, input, output=None):
        """
        Parameters

        when None, output will default to input path
        """
        self.input_path = input
        if output:
            self.output_path = output
        else:
            self.output_path = input

        self.s_config = config_reader.ConfigReader()
        self.r_config = config_raw_feature.ConfigRawReader()
        self.d_config = config_derive_feature.ConfigDeriveReader()
        self.file = None
        self.file_type = None

    # def preprocess(self):
    #     self._convert(self.input_path)

    # def postprocess(self):
    #     _process_derive()
    #     _remove()

    def _convert(self, model):
        input_path = self.input_path
        _, file_ext = os.path.splitext(os.path.basename(input_path))

        if file_ext:
            input_type = 'file'

            if file_ext.lower() in ['.mp4','.mov']:
                if file_ext.lower() == '.mov':
                    self._convert_file(input_path)
                    
                self.file = self._process_raw_video_file(model)

            elif file_ext.lower() in ['.wav','.mp3']:
                if file_ext.lower() == '.mp3':
                    self._convert_file(input_path)
                self.file = self._process_raw_audio_file(model)
            else:
                logger.error('No WAV/MP3 or MOV/MP4 files detected in input path')
        else:
            input_type = 'dir'
            self.file = self._process_raw_video_dir(model)
            self.file = self._process_raw_audio_dir(model)

        self.input_type = input_type
        # process_derive(self, r_config, d_config, input_type)

    


    def _common_video(self, video_file, model):
        """
        Common function for video feature processing
        self:
            video_file: video file path
            self: user supplied arguments
            r_config: raw feature config object
        """

        self.file_type = 'video'
        out_path = os.path.join(self.output_path, 'raw_variables')
        self.audio_to_wav(video_file)
        model.openface(video_file, os.path.dirname(video_file), self.out_path, '', self.keyword, video_tracking=False)
        model.process(self, video_file, tr=False,video_tracking=True)



        # of.process_open_face(video_file, os.path.dirname(video_file), out_path, OPENFACE_PATH, self.dbm_group,video_tracking=False)
        # pf.process_facial(video_file, out_path, self.dbm_group, r_config)
        # pf.process_acoustic(video_file, out_path, self.dbm_group, r_config)
        # pf.process_nlp(video_file, out_path, self.dbm_group, self.tr, r_config, DEEP_SPEECH)  
        # if self.dbm_group == None or len(self.dbm_group)>0 and 'movement' in self.dbm_group:
        #     of.process_open_face(video_file, os.path.dirname(video_file), out_path, OPENFACE_PATH_VIDEO, self.dbm_group, video_tracking=True)
        # pf.process_movement(video_file, out_path, self.dbm_group, r_config, DLIB_SHAPE_MODEL)
        self.remove_file(video_file)

    def process_raw_video_file(self):
        """
        Processing video file
        self:
            self: user supplied arguments
            s_config: service config object
            r_config: raw feature config object
        """
        try:
            if self.output_path != None:
                video_file = glob.glob(self.input_path)

                if len(video_file)>0:
                    logger.info('Calculating raw variables...')
                    self.common_video(video_file[0], self, self.r_config)

                else:
                    logger.info('Enter correct video(*.mp4) file path.')

        except Exception as e:
            logger.error('Failed to process mp4 file.')
            self.remove_file(video_file[0])

    def process_raw_audio_file(self, model):
        """
        Processing audio file
        self:
            self: user supplied arguments
            s_config: service config object
            r_config: raw feature config object
        """
        try:
            if self.output_path != None:
                audio_file = glob.glob(self.input_path)

                if len(audio_file)>0:
                    logger.info('Calculating raw variables...')

                    out_path = os.path.join(self.output_path, 'raw_variables')
                    # pf.process_acoustic(audio_file[0], out_path, self.dbm_group, r_config)
                    model.process(self, audio_file[0])
                else:
                    logger.info('Enter correct audio(*.wav) file path.')
        except Exception as e:
            logger.error('Failed to process wav file.')

    def process_raw_video_dir(self, s_config, r_config):
        """
        Processing video file
        self:
            self: user supplied arguments
            s_config: service config object
            r_config: raw feature config object
        """
        if self.output_path != None:
            vid_loc = glob.glob(self.input_path + '/*.mp4') + glob.glob(self.input_path + '/*.mov') + glob.glob(self.input_path + '/*.MOV')

            if len(vid_loc) == 0:
                logger.info('Directory does not have any MP4 files.')
                return

            logger.info('Calculating raw variables...')
            for vid_file in vid_loc:
                try:
                    fname, file_ext = os.path.splitext(vid_file)
                    
                    if file_ext.lower() == '.mov':
                        self.convert_file(vid_file)
                    self.common_video(fname+'.mp4', self, r_config)
                    
                    self.remove_convert(vid_file, '.mp4') #removing files(ffmpeg converted ) after processing
                except Exception as e:
                    logger.error('Failed to process mp4 file.')
                    self.remove_file(vid_file)

    def process_raw_audio_dir(self, model):
        """
        Processing audio file
        self:
            self: user supplied arguments
            s_config: service config object
            r_config: raw feature config object
        """
        if self.output_path != None:
            audio_loc = glob.glob(self.input_path + '/*.wav') + glob.glob(self.input_path + '/*.mp3') + glob.glob(self.input_path + '/*.MP3')

            if len(audio_loc) == 0:
                logger.info('Directory does not have any WAV files.')
                return

            logger.info('Calculating raw variables...')
            for audio in audio_loc:
                try:
                    fname, file_ext = os.path.splitext(audio)
                    if file_ext.lower() == '.mp3':
                        self.convert_file(audio)
                        
                    out_path = os.path.join(self.output_path, 'raw_variables')
                    # model.process(fname+'.wav', out_path, model.keyword, self.r_config)
                    model.process(fname +'.wav', out_path, model.keyword, self.tr, self.r_config, )
                    
                    self.remove_convert(audio, '.wav') #removing files(ffmpeg converted) after processing
                except Exception as e:
                    logger.error('Failed to process wav file.')

    def convert_file(input_filepath):
        """
        Converting mp3/mov to wav/mp4 files
        """
        _, file_ext = os.path.splitext(os.path.basename(input_filepath))
        fname, _ = splitext(input_filepath)
        call = []
        
        if file_ext.lower() == '.mp3':
            output_filepath = fname + '.wav'
            logger.info('Converting audio from {} to wav'.format(input_filepath))
            call = ['ffmpeg', '-i', input_filepath, output_filepath]

        if file_ext.lower() == '.mov':
            output_filepath = fname + '.mp4'
            logger.info('Converting video from {} to mp4'.format(input_filepath))
            call = ['ffmpeg', '-i', input_filepath, '-vcodec', 'h264','-acodec','aac', '-strict', '-2', output_filepath]

        if len(call)>0:
            subprocess.check_output(call)
            
    def remove_convert(self, file_ext):
        """
        removing converted files after processing
        """
        expected_ext = ['.mp3', '.mov']
        input_loc, inp_ext = os.path.splitext(self.input_filepath)
        
        if inp_ext.lower() in expected_ext:
            self.remove_file(input_loc + file_ext, file_ext)

    def process_derive(self, r_config, d_config, input_type):
        """
        Processing dbm derived variables
        """
        if input_type == 'file':
            input_file = glob.glob(self.input_path)
        else:
            input_file = glob.glob(self.input_path + '/*')

        out_raw_path = os.path.join(self.output_path, 'raw_variables')
        out_derive_path = os.path.join(self.output_path, 'derived_variables')

        logger.info('Calculating derived variables...')
        der.run_derive(input_file, out_raw_path, out_derive_path, r_config, d_config)

    def remove_file(self, file_path, file_ext = '.wav'):
        """
        removing wav file
        """
        file_dir = dirname(file_path)
        file_name, _ = splitext(basename(file_path))
        wav_file = glob.glob(join(file_dir, file_name + file_ext))

        if len(wav_file)> 0:
            os.remove(wav_file[0])

    def audio_to_wav(self):
        """ Extracts a video's audio file and saves it to wav
        Args:
            input_filepath: (str)
        Returns:
        """
        try:

            fname, _ = splitext(self.input_filepath)
            output_filepath = fname + '.wav'

            if not isfile(output_filepath):
                call = ['ffmpeg', '-i', self.input_filepath, '-vn', '-acodec', 'pcm_s16le', '-ar', '44100', self.output_filepath]

                logger.info('Converting audio from {} to wav'.format(self.input_filepath))
                subprocess.check_output(call)
                logger.info('wav output saved in {}'.format(self.output_filepath))
            else:
                logger.info('Output file {} already exists'.format(self.output_filepath))

        except Exception as e:
            logger.error('Failed to extract audio from Video')
