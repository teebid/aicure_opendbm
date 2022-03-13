import os

from config import config_reader, config_raw_feature, config_derive_feature
import logger
import glob
import subprocess
import time
from os.path import splitext

class DataLoader(obj):
    def __init__(self, input, output):
        self.input_path = input
        self.outpu_path = output

    def _run(self):
        _process(self.input_path)
        # self.audio_to_wav(self.input_path)


def _audio_to_wav(input_filepath):
    """ Extracts a video's audio file and saves it to wav
    Args:
        input_filepath: (str)
    Returns:
    """
    try:

        fname, _ = splitext(input_filepath)
        output_filepath = fname + '.wav'

        if not isfile(output_filepath):
            call = ['ffmpeg', '-i', input_filepath, '-vn', '-acodec', 'pcm_s16le', '-ar', '44100', output_filepath]

            logger.info('Converting audio from {} to wav'.format(input_filepath))
            subprocess.check_output(call)
            logger.info('wav output saved in {}'.format(output_filepath))
        else:
            logger.info('Output file {} already exists'.format(output_filepath))

    except Exception as e:
        logger.error('Failed to extract audio from Video')


def _remove_file(file_path, file_ext = '.wav'):
    """
    removing wav file
    """
    file_dir = dirname(file_path)
    file_name, _ = splitext(basename(file_path))
    wav_file = glob.glob(join(file_dir, file_name + file_ext))

    if len(wav_file)> 0:
        os.remove(wav_file[0])


def _process_raw_video_file(args, s_config, r_config):
    """
    Processing video file
    Args:
        args: user supplied arguments
        s_config: service config object
        r_config: raw feature config object
    """
    try:
        if args.output_path != None:
            video_file = glob.glob(args.input_path)

            if len(video_file)>0:
                logger.info('Calculating raw variables...')
                common_video(video_file[0], args, r_config)

            else:
                logger.info('Enter correct video(*.mp4) file path.')

    except Exception as e:
        logger.error('Failed to process mp4 file.')
        pf.remove_file(video_file[0])

def _process_raw_audio_file(args, s_config, r_config):
    """
    Processing audio file
    Args:
        args: user supplied arguments
        s_config: service config object
        r_config: raw feature config object
    """
    try:
        if args.output_path != None:
            audio_file = glob.glob(args.input_path)

            if len(audio_file)>0:
                logger.info('Calculating raw variables...')

                out_path = os.path.join(args.output_path, 'raw_variables')
                # pf.process_acoustic(audio_file[0], out_path, args.dbm_group, r_config)
                # pf.process_nlp(audio_file[0], out_path, args.dbm_group, args.tr, r_config, DEEP_SPEECH)
            else:
                logger.info('Enter correct audio(*.wav) file path.')
    except Exception as e:
        logger.error('Failed to process wav file.')

def _process_raw_video_dir(args, s_config, r_config):
    """
    Processing video file
    Args:
        args: user supplied arguments
        s_config: service config object
        r_config: raw feature config object
    """
    if args.output_path != None:
        vid_loc = glob.glob(args.input_path + '/*.mp4') + glob.glob(args.input_path + '/*.mov') + glob.glob(args.input_path + '/*.MOV')

        if len(vid_loc) == 0:
            logger.info('Directory does not have any MP4 files.')
            return

        logger.info('Calculating raw variables...')
        for vid_file in vid_loc:
            try:
                fname, file_ext = os.path.splitext(vid_file)
                
                if file_ext.lower() == '.mov':
                    _convert_file(vid_file)
                # common_video(fname+'.mp4', args, r_config)
                
                remove_convert(vid_file, '.mp4') #removing files(ffmpeg converted ) after processing
            except Exception as e:
                logger.error('Failed to process mp4 file.')
                _remove_file(vid_file)

def _process_raw_audio_dir(args, s_config, r_config):
    """
    Processing audio file
    Args:
        args: user supplied arguments
        s_config: service config object
        r_config: raw feature config object
    """
    if args.output_path != None:
        audio_loc = glob.glob(args.input_path + '/*.wav') + glob.glob(args.input_path + '/*.mp3') + glob.glob(args.input_path + '/*.MP3')

        if len(audio_loc) == 0:
            logger.info('Directory does not have any WAV files.')
            return

        logger.info('Calculating raw variables...')
        for audio in audio_loc:
            try:
                fname, file_ext = os.path.splitext(audio)
                if file_ext.lower() == '.mp3':
                    _convert_file(audio)
                    
                out_path = os.path.join(args.output_path, 'raw_variables')
                # pf.process_acoustic(fname+'.wav', out_path, args.dbm_group, r_config)
                # pf.process_nlp(fname +'.wav', out_path, args.dbm_group, args.tr, r_config, DEEP_SPEECH)
                
                remove_convert(audio, '.wav') #removing files(ffmpeg converted) after processing
            except Exception as e:
                logger.error('Failed to process wav file.')


def _convert_file(input_filepath):
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
        
def remove_convert(input_filepath, file_ext):
    """
    removing converted files after processing
    """
    expected_ext = ['.mp3', '.mov']
    input_loc, inp_ext = os.path.splitext(input_filepath)
    
    if inp_ext.lower() in expected_ext:
        _remove_file(input_loc + file_ext, file_ext)

def process_derive(args, r_config, d_config, input_type):
    """
    Processing dbm derived variables
    """
    if input_type == 'file':
        input_file = glob.glob(args.input_path)
    else:
        input_file = glob.glob(args.input_path + '/*')

    out_raw_path = os.path.join(args.output_path, 'raw_variables')
    out_derive_path = os.path.join(args.output_path, 'derived_variables')

    logger.info('Calculating derived variables...')


def _process(input_path):
    s_config = config_reader.ConfigReader()
    r_config = config_raw_feature.ConfigRawReader()
    d_config = config_derive_feature.ConfigDeriveReader()
    _, file_ext = os.path.splitext(os.path.basename(input_path))

    if file_ext:
        input_type = 'file'

        if file_ext.lower() in ['.mp4','.mov']:
            if file_ext.lower() == '.mov':
                _convert_file(input_path)
                
            # process_raw_video_file(args, s_config, r_config)
            remove_convert(input_path, '.mp4')

        elif file_ext.lower() in ['.wav','.mp3']:
            if file_ext.lower() == '.mp3':
                _convert_file(input_path)
                
            # process_raw_audio_file(args, s_config, r_config)
            remove_convert(input_path, '.wav')
        else:
            logger.error('No WAV/MP3 or MOV/MP4 files detected in input path')
    else:
        input_type = 'dir'
    #     process_raw_video_dir(args, s_config, r_config)
    #     process_raw_audio_dir(args, s_config, r_config)

    # process_derive(args, r_config, d_config, input_type)
