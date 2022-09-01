---
id: facial-activity-api
title: Facial Acivity API Documentation
---

# Table of Contents

- [api](#api)
  - [FacialActivity](#api.FacialActivity)
    - [fit](#api.FacialActivity.fit)
    - [get_landmark](#api.FacialActivity.get_landmark)
    - [get_action_unit](#api.FacialActivity.get_action_unit)
    - [get_asymmetry](#api.FacialActivity.get_asymmetry)
    - [get_expressivity](#api.FacialActivity.get_expressivity)

<a id="api"></a>

# api

<a id="api.FacialActivity"></a>

## FacialActivity Objects

```python
class FacialActivity(VideoModel)
```

<a id="api.FacialActivity.fit"></a>

#### fit

```python
def fit(path)
```

Fit a file in filepath to OpenFace Model. Make sure to set the Docker to be active first.
For installation, see https://teebid.github.io/aicure_opendbm/docs/openface-docker-installation

## Parameters

path : string,
File Path of MP4/MOV file.

<a id="api.FacialActivity.get_landmark"></a>

#### get_landmark

```python
def get_landmark()
```

Get the model object of Landmark

**Returns**:

- `self` - object
  Model Object

<a id="api.FacialActivity.get_action_unit"></a>

#### get_action_unit

```python
def get_action_unit()
```

Get the model object of Action Unit

**Returns**:

- `self` - object
  Model Object

<a id="api.FacialActivity.get_asymmetry"></a>

#### get_asymmetry

```python
def get_asymmetry()
```

Get the model object of Facial Asymmetry

**Returns**:

- `self` - object
  Model Object

<a id="api.FacialActivity.get_expressivity"></a>

#### get_expressivity

```python
def get_expressivity()
```

Get the model object of Facial Expressivity

**Returns**:

- `self` - object
  Model Object
