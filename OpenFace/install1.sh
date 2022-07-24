#!/bin/bash
#==============================================================================
# Title: install.sh
# Description: Install everything necessary for OpenFace to compile.
# Will install all required dependencies, only use if you do not have the dependencies
# already installed or if you don't mind specific versions of gcc,g++,cmake,opencv etc. installed
# Author: Daniyal Shahrokhian <daniyal@kth.se>, Tadas Baltrusaitis <tadyla@gmail.com>
# Date: 20190630
# Version : 1.03
# Usage: bash install.sh
#==============================================================================

# Exit script if any command fails
set -e
set -o pipefail

if [ $# -ne 0 ]
  then
    echo "Usage: install.sh"
    exit 1
fi
# Essential Dependencies
echo "Installing Essential dependencies..."

apt-get -y update || true
apt-get -y install build-essential
apt-get -y install gcc-8 g++-8

# Ubuntu 16.04 does not have newest CMake so need to build it manually
if [[ `lsb_release -rs` != "18.04" ]]; then
  apt-get --purge remove cmake-qt-gui -y
  apt-get --purge remove cmake -y
  mkdir -p cmake_tmp
  cd cmake_tmp
  wget https://cmake.org/files/v3.10/cmake-3.10.1.tar.gz
  tar -xzvf cmake-3.10.1.tar.gz
  cd cmake-3.10.1/
  ./bootstrap
  make -j4
  make install
  cd ../..
  rm -r cmake_tmp
else
  apt-get -y install cmake
fi


apt-get -y install zip
apt-get -y install libopenblas-dev liblapack-dev
apt-get -y install libgtk2.0-dev pkg-config libavcodec-dev libavformat-dev
apt-get -y install libtbb2 libjpeg-dev libpng-dev libtiff-dev libdc1394-22-dev
echo "Essential dependencies installed."