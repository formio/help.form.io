---
title: Docker Engine
book: userguide
chapter: docker
slug: docker-installation
weight: 10
---
Docker instances are run inside a Docker Engine. There are many options for where and how to run a docker instance. Depending on which Docker Engine you are using, the formio server configuration will be different.

#### Using Cloud Hosted Docker

If you are using a cloud hosted Docker Engine, please follow the appropriate steps to set up the formio server Docker container.

 * [Docker Cloud](https://cloud.docker.com/)
 * [Joyent Triton](https://www.joyent.com/triton)
 * [Amazon Web Services](https://aws.amazon.com/ecs/)
 * [Google Cloud Platform](https://cloud.google.com/container-engine/docs/)
 * Many others

#### Using a Linux Server

Docker Engine runs natively on the Linux architecture. Docker requires a 64-bit installation regardless of your Distrubution version. Additionally, your kernel must be 3.10 at minimum. The latest 3.10 minor version or a newer maintained version are also acceptable.

[https://docs.docker.com/engine/installation/linux/ubuntulinux/](Official Docker Linux Installation Documentation)

##### Quick install
To do a quick install, run the following command. It will download, configure and install the Docker Engine on Linux hosts.

    sudo curl -sSL https://get.docker.com/ | sh

Any distrubutions running ```systemd```, which includes Ubuntu 15.04 and later, should run this command to ensure that the Docker Engine is started on reboot.

    systemctl enable docker

Optionally, If you would like to run docker commands without sudo, add your user to the docker group.

    sudo usermod -aG docker myusername

#### Using a Mac OS X computer

Running Docker Engine on a Mac has two options. We highly recommend using Docker for Mac instead of Docker Toolbox. Docker for Mac will run Docker natively on a Mac instead of through a Virtualbox which greatly simplifies setting up and running containers.

Download and install Docker for Mac from [https://docs.docker.com/docker-for-mac/](https://docs.docker.com/docker-for-mac/)

See **Using a Virtualbox Docker Engine** below if you want to use Docker Toolbox.

#### Other Operating Systems

Docker Engine can be run on many different systems. See Docker's Official Documentation for more information on running Docker.

[https://docs.docker.com/engine/understanding-docker/](https://docs.docker.com/engine/understanding-docker/)

#### Using a Virtualbox Docker Engine

While it is possible to run the formio server in a Docker Engine inside of Virtualbox, this configuration adds an additional level of abstraction and networking that complicates getting things running correctly. You can use the information below to run formio server in a Virtualbox but our ability to support the server will be reduced.
