"""
file_name: util
project_name: DBM
created: 2020-20-07
"""

import os
import glob
import numpy as np
import subprocess
import pandas as pd



RAW_MODEL_DOMAIN = "https://raw.githubusercontent.com/aicure/open_dbm"


def get_data_home(data_home=None):
    """Return a path to the cache directory for example datasets.
    This directory is then used by :func:`load_dataset`.
    If the ``data_home`` argument is not specified, it tries to read from the
    ``SEABORN_DATA`` environment variable and defaults to ``~/seaborn-data``.
    """
    if data_home is None:
        data_home = os.environ.get('SEABORN_DATA',
                                   os.path.join('~', 'opendbm-models'))
    data_home = os.path.expanduser(data_home)
    if not os.path.exists(data_home):
        os.makedirs(data_home)
    return data_home

def load_dataset(name, cache=True, data_home=None, **kws):
    """Load an example dataset from the online repository (requires internet).
    This function provides quick access to a small number of example datasets
    that are useful for documenting seaborn or generating reproducible examples
    for bug reports. It is not necessary for normal usage.
    Note that some of the datasets have a small amount of preprocessing applied
    to define a proper ordering for categorical variables.
    Use :func:`get_dataset_names` to see a list of available datasets.
    Parameters
    ----------
    name : str
        Name of the dataset (``{name}.csv`` on
        https://github.com/mwaskom/seaborn-data).
    cache : boolean, optional
        If True, try to load from the local cache first, and save to the cache
        if a download is required.
    data_home : string, optional
        The directory in which to cache data; see :func:`get_data_home`.
    kws : keys and values, optional
        Additional keyword arguments are passed to passed through to
        :func:`pandas.read_csv`.
    Returns
    -------
    df : :class:`pandas.DataFrame`
        Tabular data, possibly with some preprocessing applied.
    """
    # A common beginner mistake is to assume that one's personal data needs
    # to be passed through this function to be usable with seaborn.
    # Let's provide a more helpful error than you would otherwise get.
    if isinstance(name, pd.DataFrame):
        err = (
            "This function accepts only strings (the name of an example dataset). "
            "You passed a pandas DataFrame. If you have your own dataset, "
            "it is not necessary to use this function before plotting."
        )
        raise TypeError(err)

    url = f"https://raw.githubusercontent.com/mwaskom/seaborn-data/master/{name}.csv"

    if cache:
        cache_path = os.path.join(get_data_home(data_home), os.path.basename(url))
        if not os.path.exists(cache_path):
            if name not in get_dataset_names():
                raise ValueError(f"'{name}' is not one of the example datasets.")
            urlretrieve(url, cache_path)
        full_path = cache_path
    else:
        full_path = url

    return df



def filter_path(video_url, out_dir):
    
    """
    Filtering video uri path to prepare input and ouptut location
    
    Args:
        video_url: S3 bucket path for video
        out_dir: Output directory path
        
    """
    
    fl_name,_ = os.path.splitext(os.path.basename(video_url))
    input_loc = os.path.dirname(video_url)
    out_loc = os.path.join(out_dir, fl_name)
    return input_loc, out_loc, fl_name

def save_output(df, out_loc, fl_name, f_dir, f_ext):
    """
    creating output directory for Audio features
    Args:
        df: (dataframe) feature dataframe[ex: Formant freq, pitch]
        out_loc: (dir) Output location where we want to save raw output
        fl_name: file name
        f_dir: directory name for a feature
        f_ext: extension for a feature [ex: '_pose.csv']
    """
    full_f_name = fl_name + f_ext
    dir_path = os.path.join(out_loc, f_dir)
    
    if not os.path.exists(dir_path):
        os.makedirs(dir_path)
        
    sav_path = os.path.join(dir_path,full_f_name)
    df.to_csv(sav_path, index=False)

def audio_process(base_dir,video_url):
    """
    Parsing cleaned audio files(Audio files without IMA voice)
    Args:
        base_dir: Base path for raw data
        video_url: Raw video file path
    """
    new_video_url = base_dir+'/'.join(video_url[2:])
    split_val = new_video_url.split('/')
    wav_path = '/'.join(split_val[0:len(split_val)-1])
    audio_split_check = glob.glob(wav_path + '/*_split.wav')
    return audio_split_check

def compute_open_face_features(input_filepath,
                         output_directory,
                         open_face_executable,
                         au_static=False,
                         tracked_visualization=False,
                         clobber=False,
                         verbose=True):
    """
    Runs OpenFace on an input video.
    See https://github.com/TadasBaltrusaitis/OpenFace/wiki/Command-line-arguments
    Args:
        input_filepath:
        output_directory:
        au_static:
        tracked_visualization:
        open_face_executable:
        clobber: (bool) if True existing files will be overwritten
        verbose:
    Returns:
        (str) path to output csv file
    Raises:
        IOError if OpenFace executable is missing
    """

    if not os.path.isfile(open_face_executable):
        raise IOError("OpenFace executable {} could not be found.".format(open_face_executable))

    bn, _ = os.path.splitext(os.path.basename(input_filepath))
    if not output_directory:
        output_directory = os.path.join(os.path.dirname(input_filepath), bn + '_openface')

    output_csv = os.path.join(output_directory, bn + '.csv')
    if not os.path.isfile(output_csv) or clobber:
        call = [open_face_executable, ]
        if au_static:
            call += ['-au_static', ]

        if tracked_visualization:
            call += ['-tracked', ]

        call += ['-q', '-2Dfp', '-3Dfp', '-pdmparams', '-pose', '-aus', '-gaze']
        call += ['-f', input_filepath, '-out_dir', output_directory]

        if verbose:
            print('Computing OpenFace features {} from video file'.format(input_filepath))
        subprocess.check_output(call)
        if verbose:
            print('OpenFace features saved to {}'.format(output_directory))
    else:
        if verbose:
            print('Output file {} already exists'.format(output_csv))

    return os.path.join(output_directory, bn + '.csv')
