<h2 align="center">
OpenDBM
</h2>

<div align="center">
  <img width="400" alt="GitHub Actions for deploying to GitHub Pages with Static Site Generators" src="./images/odbm.png">

[![PyPI Latest Release](https://img.shields.io/pypi/v/odbm?style=plastic)](https://pypi.org/project/odbm/)
[![Anaconda Latest Release](https://img.shields.io/badge/Anaconda.org-1.4.3-blue.svg?style=plastic)](https://anaconda.org/r/r-odbc)
[![PyPI - License](https://img.shields.io/pypi/l/odbm?style=plastic)](https://github.com/AiCure/open_dbm/blob/master/license.txt)
[![Test](https://github.com/teebid/aicure_opendbm/blob/master/images/badges/test_status.svg)](https://github.com/teebid/aicure_opendbm/actions/workflows/open_dbm-code-checking.yml?query=branch%3Amaster++)
[![Coverage](https://github.com/teebid/aicure_opendbm/blob/master/images/badges/code_coverage.svg)](https://github.com/teebid/aicure_opendbm/actions/workflows/open_dbm-code-checking.yml?query=branch%3Amaster++)
[![Code style: black](https://img.shields.io/badge/code%20style-black-000000.svg?style=flat)](https://github.com/psf/black)
[![Imports: isort](https://img.shields.io/badge/%20imports-isort-%231674b1?style=flat&labelColor=ef8336)](https://pycqa.github.io/isort/)
</div>

## Supported OS Platforms

OS                    | Build Status
----------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
**Linux**                 | [![Build](https://github.com/teebid/aicure_opendbm/blob/master/images/badges/linux_status.svg)](https://github.com/teebid/aicure_opendbm/actions/workflows/open_dbm-build-checking.yml)
**Windows**                 | [![Build](https://github.com/teebid/aicure_opendbm/blob/master/images/badges/windows_status.svg)](https://github.com/teebid/aicure_opendbm/actions/workflows/open_dbm-build-checking.yml)
**macOS**                 | [![Build](https://github.com/teebid/aicure_opendbm/blob/master/images/badges/macos_status.svg)](https://github.com/teebid/aicure_opendbm/actions/workflows/open_dbm-build-checking.yml)


## What is it
OpenDBM is a software package that allows for calculation of digital 
biomarkers of health and functioning from video or audio of an individual???s 
behavior. It integrates existing tools for behavioral measurements such as
facial activity, voice, speech, and movement into a single package for measurement 
of overall behavior.

## More About OpenDBM

At a modular level, OpenDBM is a library that consists of the following components:

| Component | Description |
| ---- | --- |
| [**Facial**](https://teebid.github.io/aicure_opendbm/docs/category/api/facial) | An OpenDBM module to get facial attributes |
| [**Movement**](https://teebid.github.io/aicure_opendbm/docs/category/api/movement) | An OpenDBM module to get movement attributes |
| [**Accoustic**](https://teebid.github.io/aicure_opendbm/docs/category/api/accoustic) | An OpenDBM module to get accoustic attributes  |
| [**Audio**](https://teebid.github.io/aicure_opendbm/docs/category/api/audio) | An OpenDBM module to get audio attributes |

Usually, OpenDBM is used for:

- A digital biomaker extraction app
- A helper tools to give insight of patient condition

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [?????? Installation](#%EF%B8%8F-installation)
  - [Prerequisites](#prerequisites)
    - [Install Dependencies](#install-dependencies)
  - [OpenDBM Installation](#opendbm-installation)
- [?????? Usage](#%EF%B8%8F-usage)
  - [Basic Usage](#basic-usage)
    - [*Try your first OpenDBM program*](#try-your-first-opendbm-program)
- [?????? More resources](#%EF%B8%8F-more-resources)
- [?????? License](#%EF%B8%8F-license)
- [?????? People](#%EF%B8%8F-people)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## ?????? Installation
### Prerequisites
#### Install Dependencies

**On Linux**

```bash
sudo apt-get install libsndfile1
sudo apt-get install sox
```

**On macOS**

```bash
brew install sox
```

**On Windows**

```bash
none required
```

### OpenDBM Installation
```bash
$ pip install opendbm 
```

<div align="right">
<a href="#table-of-contents">Back to TOC ??????</a>
</div>

## ?????? Usage
### Basic Usage
#### *Try your first OpenDBM program*
```python
from opendbm.facial import FacialActivity

model = FacialActivity()
```

To get the attribute like mean and std is as straighforward as `.mean()`:

```python
from opendbm.facial import FacialActivity

model = FacialActivity()

m.fit()
landmark = model.get_landmark()
landmark.mean()
landmark.std()
```

For more in-depth tutorials about OpenDBM, you can check out:

-   [Introduction to OpenDBM](https://teebid.github.io/aicure_opendbm/docs/intro)
-   [Advance Guide](https://teebid.github.io/aicure_opendbm/docs/advance)
-   [API Documentation](https://teebid.github.io/aicure_opendbm/docs/category/api)

<div align="right">
<a href="#table-of-contents">Back to TOC ??????</a>
</div>

## ?????? More resources
-   [Our wiki](https://github.com/AiCure/open_dbm/wiki)
-   [OpenDBM 2.0 Documentation](https://docs.google.com/document/d/1O6OUSY9FHFCZfpIWu3Kgg0Q_dyp073xjjQ2K3viEffU/edit#heading=h.rxr2y5t62mwa)
-   [AiCure page](https://aicure.com/opendbm/)

<div align="right">
<a href="#table-of-contents">Back to TOC ??????</a>
</div>

## ?????? License
OpenDBM is published under the GNU AGPL 3.0 license.


## ?????? People
OpenDBM was developed by Anzar Abbas and Vijay Yadav, alongside Vidya Koesmahargyo and Isaac Galatzer-Levy, from within the Research and Development department at AiCure??????a health tech startup in New York. It was made open source in October 2020. You can contact us at opendbm@aicure.com.

<div align="right">
<a href="#table-of-contents">Back to TOC ??????</a>
</div>