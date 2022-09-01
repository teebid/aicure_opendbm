---
id: speech-api
title: Speech API Documentation
---

# Table of Contents

- [api](#api)
  - [Speech](#api.Speech)
    - [fit](#api.Speech.fit)
    - [get_transcribe](#api.Speech.get_transcribe)
    - [get_speech_features](#api.Speech.get_speech_features)

<a id="api"></a>

# api

<a id="api.Speech"></a>

## Speech Objects

```python
class Speech(AudioModel)
```

<a id="api.Speech.fit"></a>

#### fit

```python
def fit(path)
```

Fit a file in filepath to Deepspeech Model.

## Parameters

path : string,
File Path of Video/Sound file format.

<a id="api.Speech.get_transcribe"></a>

#### get_transcribe

```python
def get_transcribe()
```

Get the model object of Transcribe

**Returns**:

- `self` - object
  Model Object

<a id="api.Speech.get_speech_features"></a>

#### get_speech_features

```python
def get_speech_features()
```

Get the model object of Speech Features

**Returns**:

- `self` - object
  Model Object
