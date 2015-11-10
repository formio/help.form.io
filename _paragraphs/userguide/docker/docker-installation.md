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

[](https://hub.docker.com/r/formio/formio-server/)

#### Installing docker

You will first need to have docker installed. See [](http://docs.docker.com/v1.8/installation/) for more information.

#### Pulling the docker image

Once you have installed docker and have access to the command line, run the following to get the latest docker image.

```docker login```
```docker pull formio/formio-server```

You can also pull a specific version of the formio-server by specifying the tag.

```docker pull formio/formio-server:1.4.5```