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

# OpenFace installation
echo "Installing OpenFace..."
mkdir -p build
cd build
cmake -D CMAKE_CXX_COMPILER=g++-8 -D CMAKE_C_COMPILER=gcc-8 -D CMAKE_BUILD_TYPE=RELEASE ..
make
cd ..
echo "OpenFace successfully installed."
