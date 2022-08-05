# Copyright (C) 2012-2022 james jameson


if __name__ == "__main__":

    import sys

    from setuptools import find_packages, setup

    if sys.version_info[:2] < (3, 7):
        raise RuntimeError("dbm-test123 requires python >= 3.7.")

    setup()
