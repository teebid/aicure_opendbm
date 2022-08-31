---
id: verbal-accoustics-api
title: Verbal Accoustics API Documentation
---

# Table of Contents

- [api](#api)
  - [VerbalAccoustics](#api.VerbalAccoustics)
    - [fit](#api.VerbalAccoustics.fit)
    - [get_audio_intensity](#api.VerbalAccoustics.get_audio_intensity)
    - [get_pitch_frequency](#api.VerbalAccoustics.get_pitch_frequency)
    - [get_formant_frequency](#api.VerbalAccoustics.get_formant_frequency)
    - [get_harmonic_noise](#api.VerbalAccoustics.get_harmonic_noise)
    - [get_glottal_noise](#api.VerbalAccoustics.get_glottal_noise)
    - [get_jitter](#api.VerbalAccoustics.get_jitter)
    - [get_shimmer](#api.VerbalAccoustics.get_shimmer)
    - [get_pause_characteristics](#api.VerbalAccoustics.get_pause_characteristics)
    - [get_voice_prevalence](#api.VerbalAccoustics.get_voice_prevalence)
    - [get_mfcc](#api.VerbalAccoustics.get_mfcc)

<a id="api"></a>

# api

<a id="api.VerbalAccoustics"></a>

## VerbalAccoustics Objects

```python
class VerbalAccoustics(AudioModel)
```

<a id="api.VerbalAccoustics.fit"></a>

#### fit

```python
def fit(path)
```

Fit a file in filepath to parselmouth Model.

## Parameters

path : string,
File Path of Video/Sound file format.

<a id="api.VerbalAccoustics.get_audio_intensity"></a>

#### get_audio_intensity

```python
def get_audio_intensity()
```

Get the model object of Audio Intensity

**Returns**:

- `self` - object
  Model Object

<a id="api.VerbalAccoustics.get_pitch_frequency"></a>

#### get_pitch_frequency

```python
def get_pitch_frequency()
```

Get the model object of Pitch Frequency

**Returns**:

- `self` - object
  Model Object

<a id="api.VerbalAccoustics.get_formant_frequency"></a>

#### get_formant_frequency

```python
def get_formant_frequency()
```

Get the model object of Formant Frequency

**Returns**:

- `self` - object
  Model Object

<a id="api.VerbalAccoustics.get_harmonic_noise"></a>

#### get_harmonic_noise

```python
def get_harmonic_noise()
```

Get the model object of Harmonic Noise

**Returns**:

- `self` - object
  Model Object

<a id="api.VerbalAccoustics.get_glottal_noise"></a>

#### get_glottal_noise

```python
def get_glottal_noise()
```

Get the model object of Glottal Noise

**Returns**:

- `self` - object
  Model Object

<a id="api.VerbalAccoustics.get_jitter"></a>

#### get_jitter

```python
def get_jitter()
```

Get the model object of Jitter

**Returns**:

- `self` - object
  Model Object

<a id="api.VerbalAccoustics.get_shimmer"></a>

#### get_shimmer

```python
def get_shimmer()
```

Get the model object of Shimmer

**Returns**:

- `self` - object
  Model Object

<a id="api.VerbalAccoustics.get_pause_characteristics"></a>

#### get_pause_characteristics

```python
def get_pause_characteristics()
```

Get the model object of Pause Characteristics

**Returns**:

- `self` - object
  Model Object

<a id="api.VerbalAccoustics.get_voice_prevalence"></a>

#### get_voice_prevalence

```python
def get_voice_prevalence()
```

Get the model object of Vocal Prevalence

**Returns**:

- `self` - object
  Model Object

<a id="api.VerbalAccoustics.get_mfcc"></a>

#### get_mfcc

```python
def get_mfcc()
```

Get the model object of MFCC

**Returns**:

- `self` - object
  Model Object
