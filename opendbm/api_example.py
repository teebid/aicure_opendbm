
class FacialAcitivty(object):
    def __init__():
        _fac_lmkXXdisp = None
        _fac_lmkXXdisp_mean = None
        _fac_lmkXXdisp_std = None
    
    def get_landmark_displacement(self):
        """
        Frame-wise change in landmark positioning i.e. the euclidean distance in the xyz plane, where XX can be any number between 01 and 68, referring to all individual facial landmarks.
        """
        return self._fac_lmkXXdisp

    def get_landmark_displacement_mean(self):
        """
        Mean of the landmark displacement.
        """
        return self._fac_lmkXXdisp_mean
    
    def get_landmark_displacement_std(self):
        """
        Standard deviation of the landmark displacement.
        """
        return self._fac_lmkXXdisp_std

    pass

class Landmark(object):
    def __init__():
        _fac_lmkXX = None
        _fac_lmkXX_mean = None
        _fac_lmkXX_std = None

    def mean(self):
        return self._fac_lmkXX_mean

    def std(self):
        return self._fac_lmkXX_std

class AuctionUnit(object):
    def __init__():
        _auction_unit = None
        # "AU1", "AU2", etc.
        _auction_unit_params = {
            "Inner brow raiser": "AU1",
        }

    def get_action_units(self):
        """
        Returns a list of action units.

        {
            "AU1": "Inner brow raiser",
            "AU2": "Outer brow raiser",
            "AU4": "Brow lowerer",
            "AU5": "Upper lip raiser",
            "AU6": "Cheek raiser",
            "AU7": "Lid tightener",
            "AU9": "Nose wrinkler",
            "AU10": "Lip corner puller",
            "AU11": "Lip corner depressor",
            "AU12": "Lip corner puller",
            "AU15": "Lip corner depressor",
            "AU26": "Jaw drop"

        }
        """
        return self._auction_unit


class AUPresence(AuctionUnit):
    def __init__():
        _auction_unit_presence = None

class AUIntensity(AuctionUnit):
    def __init_():
        _auction_unit_presence = None


class FacialAcitivtyV2(object):
    def __init__():
        landmark = Landmark()
        action_units = AuctionUnit()






class VerbalAccoustics(object):
    pass


class Speech(object):
    pass


class Movement(object):
    pass

