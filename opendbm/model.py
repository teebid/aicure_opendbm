import os
import platform
import subprocess
import tempfile
from pathlib import Path

from dbm_lib.config import config_derive_feature, config_raw_feature, config_reader
from opendbm.util import docker_command_dec, wsllize

OPENFACE_PATH_VIDEO = "pkg/open_dbm/OpenFace/build/bin/FaceLandmarkVid"
OPENFACE_PATH = "pkg/open_dbm/OpenFace/build/bin/FeatureExtraction"
DEEEPSPEECH_URL = "https://github.com/mozilla/DeepSpeech/releases/download/v0.9.1"
DEEPSPEECH_MODELS = ["deepspeech-0.9.1-models.pbmm", "deepspeech-0.9.1-models.scorer"]
OPENFACE_URLS = [
    "https://onedrive.live.com/download?cid=2E2ADA578BFF6E6E&resid=2E2ADA578BFF6E6E%2153070&authkey=AD6KjtYipphwBPc",
    "https://onedrive.live.com/download?cid=2E2ADA578BFF6E6E&resid=2E2ADA578BFF6E6E%2153072&authkey=AKqoZtcN0PSIZH4",
    "https://onedrive.live.com/download?cid=2E2ADA578BFF6E6E&resid=2E2ADA578BFF6E6E%2153079&authkey=ANpDR1n3ckL_0gs",
    "https://onedrive.live.com/download?cid=2E2ADA578BFF6E6E&resid=2E2ADA578BFF6E6E%2153070&authkey=AD6KjtYipphwBPc",
]
OPENDBM_DATA = Path.home() / ".opendbm"
# OPENDBM_DATA = Path("pkg/speech")
DLIB_SHAPE_MODEL = "pkg/shape_detector/shape_predictor_68_face_landmarks.dat"
FACIAL_ACTIVITY_ARGS = [
    "-q",
    "-2Dfp",
    "-3Dfp",
    "-pdmparams",
    "-pose",
    "-aus",
    "-gaze",
    "-f",
]


class Model(object):
    def __init__(self):
        self.s_config = config_reader.ConfigReader()
        self.r_config = config_raw_feature.ConfigRawReader()
        self.d_config = config_derive_feature.ConfigDeriveReader()
        self._df = None
        self._params = []

    def to_dataframe(self):
        if self._df is None:
            raise Exception("Model has not been fit yet")
        else:
            return self._df

    def mean(self):
        return self._df[self._params].mean()

    def std(self):
        return self._df[self._params].std()


class VideoModel(Model):
    def __init__(self):
        super().__init__()

    @docker_command_dec
    def _fit(self, path, dbm_group):

        docker_temp_dir = "/app/tmp/"
        wsl_cmd, temp_dir = wsllize((tempfile.gettempdir()))
        filename = os.path.basename(path)
        bn, _ = os.path.splitext(filename)

        facial_args = " ".join(FACIAL_ACTIVITY_ARGS)
        docker_call = wsl_cmd + ["docker", "exec", "dbm_container", "/bin/bash", "-c"]

        # docker_call = wsl_cmd + "docker exec dbm_container /bin/bash -c"
        openface_call = [
            docker_call
            + [f"{OPENFACE_PATH} {facial_args} {path} -out_dir {docker_temp_dir}"],
            docker_call
            + [f"{OPENFACE_PATH_VIDEO} {facial_args} {path} -out_dir {docker_temp_dir}"]
            # f'{docker_call} "{OPENFACE_PATH} {facial_args} {path} -out_dir {docker_temp_dir}"',
            # f'{docker_call} "{OPENFACE_PATH_VIDEO} {facial_args} {path} -out_dir {docker_temp_dir}"',
        ]

        out_dir_openface = [
            f"{temp_dir}/{bn}/{bn}_openface/",
            f"{temp_dir}/{bn}_landmark_output/{bn}_landmark_output_openface_lmk/",
        ]
        result_path = [
            docker_temp_dir + bn + ".csv",
            docker_temp_dir + bn + "_landmark_output.csv",
        ]

        if dbm_group == "facial":
            openface_csv = self._processing_video(
                dbm_group,
                openface_call[0],
                out_dir_openface[0],
                result_path[0],
                wsl_cmd,
                temp_dir,
                bn,
            )

            return openface_csv, bn
        else:

            openface_csv = self._processing_video(
                "facial",
                openface_call[0],
                out_dir_openface[0],
                result_path[0],
                wsl_cmd,
                temp_dir,
                bn,
            )
            openface_lmk_csv = self._processing_video(
                "movement",
                openface_call[1],
                out_dir_openface[1],
                result_path[1],
                wsl_cmd,
                temp_dir,
                bn,
            )

            return openface_csv, openface_lmk_csv, bn

    def _processing_video(
        self, dbm_group, call, out_dir, result_path, wsl_cmd, temp_dir, bn
    ):

        subprocess.Popen(
            call,
            stdout=subprocess.PIPE,
            stderr=subprocess.STDOUT,
            stdin=subprocess.PIPE,
        ).wait()
        mkdir_cmd = wsl_cmd + ["mkdir", "-p", out_dir]
        # mkdir_cmd = wsl_cmd + f"mkdir -p {out_dir}"

        copy_cmd = wsl_cmd + ["docker", "cp", f"dbm_container:/{result_path}", out_dir]
        subprocess.Popen(
            mkdir_cmd,
            stdout=subprocess.PIPE,
            stderr=subprocess.STDOUT,
            stdin=subprocess.PIPE,
        ).wait()
        subprocess.Popen(
            copy_cmd,
            stdout=subprocess.PIPE,
            stderr=subprocess.STDOUT,
            stdin=subprocess.PIPE,
        ).wait()

        if platform.system() == "Windows":
            path_in_temp = out_dir[len(temp_dir) :]
            out_dir = (tempfile.gettempdir()) + path_in_temp

        if dbm_group == "facial":
            return out_dir + bn + ".csv"
        else:
            return out_dir + bn + "_landmark_output.csv"


class AudioModel(Model):
    def __init__(self):
        super().__init__()

    def prep_func(func):
        def wrapper(self, *args, **kwargs):
            path = args[0]

            df = func(self, path, **kwargs)
            return df

        return wrapper
