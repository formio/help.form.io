---
title: Running
book: userguide
chapter: docker
slug: docker-running
weight: 20
---
Running a docker image depends very largely on your environment. On a local environment it can be done with the ```docker run``` command. Typically it should be daemonized with ```-d``` and must be set up with the protocol, domain and port the server will be running on. In addition, it needs to be connected to a mongodb server.

Example command:

```
docker run -d -e "MONGO1=mongodb://localhost:27017" -e "PROTOCOL=http" -e "DOMAIN=localhost" -e "PORT=3000" --name formio-server formio/formio-server
```
