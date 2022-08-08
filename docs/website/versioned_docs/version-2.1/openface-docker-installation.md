---
id: openface-docker-installation
title: OpenFace Installation
description: 'OpenDBM needs you to install OpenFace Model before running OpenDBM Facial and Movement components'
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs'; import TabItem from '@theme/TabItem'; import constants from '@site/core/TabsConstants';

This page will help you install OpenFace model that is stored as Docker Image, starting from on how to install the docker.


<Tabs groupId="guide" defaultValue={constants.defaultGuideDocker} values={constants.guidesDocker}>
<TabItem value={constants.defaultGuideDocker}>

## If you have installed Docker 

```bash
docker pull image tag jordihasianta/dbm-test2
docker image tag jordihasianta/dbm-test2 dbm
```

## If you haven't, here's the instruction on how to install Docker


The instructions are a bit different depending on your development operating system.

#### Development OS

<Tabs groupId="os" defaultValue={constants.defaultOs} values={constants.oses} className="pill-tabs">
<TabItem value="macos">

Follow the instruction in the [official website](https://docs.docker.com/desktop/install/mac-install/)

</TabItem>
<TabItem value="linux">

Follow the instruction in the [official website](https://docs.docker.com/desktop/install/linux-install/)


</TabItem>
<TabItem value="windows">

1. Follow the instruction in the [official website](https://docs.docker.com/desktop/install/windows-install/)

    **IMPORTANT NOTE**: 
   * Please follow the instructions to install **WSL-2** as system requirements instead of Hyper-V. Because we relying on WSL command to execute OpenFace Model.
   * When in step Downloading and install the [Linux kernel update package](https://docs.microsoft.com/en-us/windows/wsl/install-manual#step-4---download-the-linux-kernel-update-package):
     * Make sure to execute "wsl --set-default-version 2"
     * Make sure to use Ubuntu as Linux distribution of choice
2. After WSL and Docker is installed. check if Docker use WSL Integration by go to the Settings > Resources > WSL Integrations, and then enable Ubuntu as our Linux Distribution.


3. Make sure check and set wsl distributions to Linux distributions of your choice. In powershell/command prompt:
    ```shell
    C:\Users\user>wsl --list
    #output
    Windows Subsystem for Linux Distributions:
    docker-desktop (Default)
    Ubuntu-18.04
    docker-desktop-data
   
    C:\Users\user>wsl --setdefault Ubuntu-18.04

    C:\Users\user>wsl --list #check if wsl default is changed
    #output
    Windows Subsystem for Linux Distributions:
    Ubuntu-18.04 (Default)
    docker-desktop
    docker-desktop-data
    ```
4. And it's done! Now you can go to the next step by pulling the docker image from the step [above](#top)



</TabItem>
</Tabs>

</TabItem>
</Tabs>



