---
sidebar_position: 1
---

# Installation

Add **OpenFace** files to `src/pages` to create a **standalone page**:

- `src/pages/index.js` -> `localhost:3000/`
- `src/pages/foo.md` -> `localhost:3000/foo`
- `src/pages/foo/bar.js` -> `localhost:3000/foo/bar`

## Create your first OpenDBM feature

Create a file at `src/pages/opendbm/src/main.py`:

```jsx title="src/pages/opendbm/src/main.py"
from dbm_lib.config import config_reader, config_raw_feature, config_derive_feature
from dbm_lib.controller import process_feature as pf
from dbm_lib.dbm_features.raw_features.video import open_face_process as of
from dbm_lib.dbm_features.derived_features import derive as der

OPENFACE_PATH_VIDEO = 'pkg/open_dbm/OpenFace/build/bin/FaceLandmarkVid'
OPENFACE_PATH = 'pkg/open_dbm/OpenFace/build/bin/FeatureExtraction'
DEEP_SPEECH = 'pkg/DeepSpeech'
DLIB_SHAPE_MODEL = 'pkg/shape_detector/shape_predictor_68_face_landmarks.dat'

def common_video(video_file, args, r_config):
```

The feature is now available at `http://localhost:3000/opendbm`.

## Create your first OpenDBM advance feature

Create a file at `src/pages/my-markdown-page.md`:

```mdx title="src/pages/my-markdown-page.md"
# My Markdown page

This is a Markdown page
```

A new page is now available at `http://localhost:3000/my-markdown-page`.
