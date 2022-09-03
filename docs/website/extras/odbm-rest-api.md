---
id: odbm-rest-api
title: OpenDBM REST API
---

## Summary

Inside the OpenDBM repository, there is a folder named rest_api. This folder means to showcase that you can leverage OpenDBM library in API service or Web application, which this folder will showcase the former. 

> The OpenDBM API designed with OpenAPI 2.0 to standardize API definition for programmatic usage, better developer experience and documentation. It will also protected by standard security protocol. 

<figure>
  <img src="../docs/assets/odbm_api_summary.png" width="500" alt="OpenDBM REST API Summary" />
  <figcaption>ODBM REST API Summary</figcaption>
</figure>

## How to use

To use the Rest API is very straighforward

* Go to the `rest_api` directory
* Install the neccessary dependencies
```commandline
pip install -r requirements.txt
```
* Then you can use Make syntax to run it
```commandline
make dev
```
* You can test using the OpenAPI specs like mentioned in [here](ci-cd-pipeline#unit-tests). Start with uploading the files, put the "local" string value in the `platform` parameter, then save the upload file name. Then you can use any API you want, insert the previous upload file url into `file_url` parameter. Then you can specify variables you want to get. For example, if you use the `/video/movement` API, you can specify the request body like 
```json
[
    "head_movement",
    "eye_blink"
]
```
After you execute the API, you will get the zip file, with the csv results compressed inside that file
> You can check more details on rest_api usage in `rest_api/README.md`

## Technology Stack
<figure>
  <img src="../docs/assets/odbm_tech_stack.png" width="500" alt="OpenDBM REST API Technology Stack" />
  <figcaption>ODBM REST API Technology Stack</figcaption>
</figure>

The OpenDBM API will use FastAPI framework. The main reason is because the asynchronous behaviour of FastAPI will works perfectly to complex and high performance methods like data upload, data pre / processing and other possible long operations.

We also use Uvicorn is an ASGI web server implementation for Python. Until recently Python has lacked a minimal low-level server/application interface for async frameworks. The ASGI specification fills this gap, and means we're now able to start building a common set of tooling usable across all async frameworks. Uvicorn currently supports HTTP/1.1 and WebSockets.

## API Documentations
The Rest API documentations can be found when you run the the app. Change the relative path to /docs or /redoc
<figure>
  <img src="../docs/assets/odbm_api_docs.png" width="500" alt="OpenDBM REST API Swagger API Docs" />
  <figcaption>ODBM REST API Swagger API Docs</figcaption>

  <img src="../docs/assets/odbm_redocs.png" width="500" alt="OpenDBM REST API Redocs" />
  <figcaption>ODBM REST API Redocs</figcaption>
</figure>