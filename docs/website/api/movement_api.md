---
id: movement-api
title: Movement API Documentation
---

# Table of Contents

- [api](#api)
  - [Movement](#api.Movement)
    - [fit](#api.Movement.fit)
    - [get_eye_blink](#api.Movement.get_eye_blink)
    - [get_eye_gaze](#api.Movement.get_eye_gaze)
    - [get_facial_tremor](#api.Movement.get_facial_tremor)
    - [get_head_movement](#api.Movement.get_head_movement)
    - [get_vocal_tremor](#api.Movement.get_vocal_tremor)

<a id="api"></a>

# api

<a id="api.Movement"></a>

## Movement Objects

```python
class Movement(VideoModel)
```

<a id="api.Movement.fit"></a>

#### fit

```python
def fit(path)
```

Fit a file in filepath to OpenFace Model. Make sure to set the Docker to be active first.
For installation, see https://teebid.github.io/aicure_opendbm/docs/openface-docker-installation

## Parameters

path : string,
File Path of MP4/MOV file.

<a id="api.Movement.get_eye_blink"></a>

#### get_eye_blink

```python
def get_eye_blink()
```

Get the model object of Eye Blink

**Returns**:

- `self` - object

<a id="api.Movement.get_eye_gaze"></a>

#### get_eye_gaze

```python
def get_eye_gaze()
```

Get the model object of Eye Gaze

**Returns**:

- `self` - object
  Model Object

<a id="api.Movement.get_facial_tremor"></a>

#### get_facial_tremor

```python
def get_facial_tremor()
```

Get the model object of Facial Tremor

**Returns**:

- `self` - object
  Model Object

<a id="api.Movement.get_head_movement"></a>

#### get_head_movement

```python
def get_head_movement()
```

Get the model object of Head Movement

**Returns**:

- `self` - object
  Model Object

<a id="api.Movement.get_vocal_tremor"></a>

#### get_vocal_tremor

```python
def get_vocal_tremor()
```

Get the model object of Vocal Tremor

**Returns**:

- `self` - object
  Model Object
