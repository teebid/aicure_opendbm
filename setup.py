import setuptools

INSTALL_REQUIRES = [
    'praat-parselmouth',
    'seaborn',
    'deepspeech==0.9.3',
    'librosa==0.9.2',
    'numpy==1.17.0',
    'pandas==1.1.5',
    'numba==0.48.0'
]

setuptools.setup(
    name="open_dbm",
    version="2.1.0",
    author="Vijay Yadav",
    author_email='vijay.yadav@aicure.com',
    description="openDBM",
    license='',
    packages=setuptools.find_packages(),
    classifiers=[
        "Programming Language :: Python :: 3",
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent",
    ],
    python_requires='>=3.6',
    py_modules=["dbmlib","opendbm"],
    install_requires=INSTALL_REQUIRES
)