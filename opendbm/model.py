import os
import subprocess
from pathlib import Path

from dbm_lib.config import config_derive_feature, config_raw_feature, config_reader
from opendbm.util import docker_command_dec

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
        bn, _ = os.path.splitext(os.path.basename(path))

        docker_call = "docker exec dbm_container /bin/bash -c"
        facial_args = " ".join(FACIAL_ACTIVITY_ARGS)
        openface_call = [
            f'{docker_call} "{OPENFACE_PATH} {facial_args} {path} -out_dir /app/tmp/"',
            f'{docker_call} "{OPENFACE_PATH_VIDEO} {facial_args} {path} -out_dir /app/tmp/"',
        ]
        out_dir_openface = [
            f"/tmp/{bn}/{bn}_openface/",
            f"/tmp/{bn}_landmark_output/{bn}_landmark_output_openface_lmk/",
        ]
        result_path = [
            "app/tmp/" + bn + ".csv",
            "app/tmp/" + bn + "_landmark_output.csv",
        ]

        if dbm_group == "facial":
            subprocess.check_output(openface_call[0], shell=True)
            mkdir_cmd = f"mkdir -p {out_dir_openface[0]}"
            copy_cmd = (
                f"docker cp dbm_container:/{result_path[0]} {out_dir_openface[0]}"
            )
            copy_result_to_temp = f"{mkdir_cmd} && {copy_cmd}"
            subprocess.Popen(copy_result_to_temp, shell=True).wait()

            return out_dir_openface[0] + result_path[0][8:], bn
        else:
            for call, out_dir, result in zip(
                openface_call, out_dir_openface, result_path
            ):
                subprocess.check_output(call, shell=True)
                mkdir_cmd = f"mkdir -p {out_dir}"
                copy_cmd = f"docker cp dbm_container:/{result} {out_dir}"
                copy_result_to_temp = f"{mkdir_cmd} && {copy_cmd}"
                subprocess.Popen(copy_result_to_temp, shell=True).wait()

            openface_csv, openface_lmk_csv = tuple(
                out_dir + file[8:]
                for out_dir, file in zip(out_dir_openface, result_path)
            )
            return openface_csv, openface_lmk_csv, bn


class AudioModel(Model):
    def __init__(self):
        super().__init__()

    def prep_func(func):
        def wrapper(self, *args, **kwargs):
            path = args[0]

            df = func(self, path, **kwargs)
            return df

        return wrapper
