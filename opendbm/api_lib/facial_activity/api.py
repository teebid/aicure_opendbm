import shutil
import tempfile
from collections import OrderedDict

from opendbm.api_lib.model import VideoModel

from ._action_unit import ActionUnit
from ._asymmetry import Asymmetry
from ._expressivity import Expressivity
from ._landmark import Landmark


class FacialActivity(VideoModel):
    def __init__(self):
        super().__init__()

        self._landmark = Landmark()
        self._action_unit = ActionUnit()
        self._asymmetry = Asymmetry()
        self._expressivity = Expressivity()

        self._models = OrderedDict(
            {
                "landmark": self._landmark,
                "action_unit": self._action_unit,
                "asymmetry": self._asymmetry,
                "expressivity": self._expressivity,
            }
        )

    def fit(self, path):
        result_path, bn = super()._fit(path, "facial")

        for k, v in self._models.items():
            v._df = v._fit_transform(result_path)

        shutil.rmtree(f"{tempfile.gettempdir()}/{bn}/")

    def get_landmark(self):
        return self._landmark

    def get_action_unit(self):
        return self._action_unit

    def get_asymmetry(self):
        return self._asymmetry

    def get_expressivity(self):
        return self._expressivity
