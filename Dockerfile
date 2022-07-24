LABEL org.opencontainers.image.source=https://github.com/teebid/aicure_opendbm
FROM python:3.7
FROM ubuntu:18.04

MAINTAINER jordihasianta "tukangmekanik102@gmail.com"

RUN apt-get update && apt-get install -y python3-pip \
                   && apt-get install -y wget \
                   && apt-get install -y automake --upgrade \
                   && apt-get install -y libtool --upgrade \
                   && apt-get -y install ffmpeg \
                   && apt-get install -y lsb-core \
                   && apt-get install -y libavcodec-dev \
                   && apt-get install -y libavformat-dev \
                   && apt-get install -y libavdevice-dev \
                   && apt-get install -y libboost-all-dev \
                   && apt-get install -y git \
                   && apt-get install -y sox
RUN ln -sfn /usr/bin/pip3 /usr/bin/pip

COPY . /app

#cloning openface
WORKDIR /app/pkg
RUN git clone https://github.com/AiCure/open_dbm.git -b openface

RUN echo "Installing OpenFace..."
WORKDIR /app/pkg/open_dbm/OpenFace
RUN bash ./download_models.sh
RUN dpkg --configure -a
RUN su -c ./install.sh
RUN echo "Done OpenFace!"

WORKDIR /app

CMD [ "python", "./process_data.py" ]