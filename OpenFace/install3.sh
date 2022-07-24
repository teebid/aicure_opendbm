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

# dlib dependecy
echo "Downloading dlib"
wget http://dlib.net/files/dlib-19.13.tar.bz2;
tar xf dlib-19.13.tar.bz2;
cd dlib-19.13;
mkdir -p build;
cd build;
echo "Installing dlib"
cmake ..;
cmake --build . --config Release;
make install;
ldconfig;
cd ../..;
rm -r dlib-19.13.tar.bz2
echo "dlib installed"