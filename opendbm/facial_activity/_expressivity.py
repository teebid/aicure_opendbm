from dbm_lib.dbm_features.raw_features.video.face_asymmetry import run_face_asymmetry
from opendbm.model import VideoModel


class Expressivity(VideoModel):
    def __init__(self):
        super().__init__()
        self._params = [
            " AU01_r",
            " AU02_r",
            " AU04_r",
            " AU05_r",
            " AU06_r",
            " AU07_r",
            " AU09_r",
            " AU10_r",
            " AU12_r",
            " AU14_r",
            " AU15_r",
            " AU17_r",
            " AU20_r",
            " AU25_r",
            " AU26_r",
            " AU45_r",
            " AU01_c",
            " AU02_c",
            " AU04_c",
            " AU05_c",
            " AU06_c",
            " AU07_c",
            " AU10_c",
            " AU12_c",
            " AU14_c",
            " AU15_c",
            " AU17_c",
            " AU20_c",
            " AU23_c",
            " AU25_c",
            " AU26_c",
            " AU28_c",
            " AU45_c",
            " AU09_c",
            " AU23_r",
            "s_confidence",
            "fac_hapintsoft",
            "fac_sadintsoft",
            "fac_surintsoft",
            "fac_feaintsoft",
            "fac_angintsoft",
            "fac_disintsoft",
            "fac_conintsoft",
            "fac_paiintsoft",
            "fac_negintsoft",
            "fac_posintsoft",
            "neu_exp",
            "fac_comlowintsoft",
            "fac_comuppintsoft",
            "cai_exp",
            "fac_comintsoft",
            "fac_happres",
            "fac_sadpres",
            "fac_surpres",
            "fac_feapres",
            "fac_angpres",
            "fac_dispres",
            "fac_conpres",
            "fac_hapinthard",
            "fac_sadinthard",
            "fac_surinthard",
            "fac_feainthard",
            "fac_anginthard",
            "fac_disinthard",
            "fac_coninthard",
            "fac_paiinthard",
            "fac_neginthard",
            "fac_posinthard",
            "neu_exp_full",
            "cai_exp_full",
            "fac_comlowinthard",
            "fac_comuppinthard",
            "fac_cominthard",
        ]

    def _fit_transform(self, path):
        return run_face_asymmetry(path, "/tmp/", self.r_config, save=False)
