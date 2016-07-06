---
title: Installation
book: userguide
chapter: docker
slug: docker-installation
weight: 10
---
Docker installations can occur in many different ways depending on your hosting environment. This section will outline how to get it running on a local environment which can be used to learn how to run the formio server in a production docker environment.

#### Accessing the docker image
Once on the commercial plan, you will have access to the docker repository. Our docker images are located on docker’s hub.

[https://hub.docker.com/r/formio/formio-server/](https://hub.docker.com/r/formio/formio-server/)

#### Installing docker

You will first need to have the Docker Engine installed. See [Docker Installation](https://docs.docker.com/engine/installation/) for more information.

#### Pulling the docker image

Once you have installed docker and have access to the command line, run the following to get the latest docker image.

```
docker login
docker pull formio/formio-server:[VERSION]
```

Where ```[VERSION]``` should be the version you would like to deploy. For example, you could run the following to deploy version ```2.7.14```

```
docker pull formio/formio-server:2.7.14
```
