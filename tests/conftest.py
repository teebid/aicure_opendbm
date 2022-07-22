import importlib
import sys

from pytest import fixture

sys.path.append("")
Movement = importlib.import_module("opendbm.movement")
Speech = importlib.import_module("opendbm.speech")
Facial = importlib.import_module("opendbm.facial_activity")
Verbal_accoustics = importlib.import_module("opendbm.verbal_accoustics")


class Model:
    def __init__(self, movement, speech, facial, verbal_accoustics):
        self._movement = movement
        self._speech = speech
        self._facial = facial
        self._verbal_accoustics = verbal_accoustics

    @property
    def movement(self):
        return self._movement.Movement()

    @property
    def speech(self):
        return self._speech.Speech()

    @property
    def facial(self):
        return self._facial.FacialActivity()

    @property
    def verbal_accoustics(self):
        return self._verbal_accoustics.VerbalAccoustics()


@fixture(scope="session")
def get_model():
    m = Model(Movement, Speech, Facial, Verbal_accoustics)
    return m
