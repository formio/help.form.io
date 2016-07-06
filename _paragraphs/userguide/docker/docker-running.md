---
title: Running Docker On-Premise
book: userguide
chapter: docker
slug: docker-on-prem
weight: 20
---

A typical Form.io installation includes a Redis, MongoDB, and a Node.js API Server. If your environment is fully dockerized, you can spin up the stack using the following example commands.

###### Create the formio network.
```bash
docker network create formio
```

###### Create the Mongo instance.
```bash
docker run -itd --name formio-mongo --net=formio -p 27017:27017 mongo
```

###### Create the Redis instance.
```bash
docker run -itd --name formio-redis --net=formio -p 6379:6379 redis
```

###### Start the formio-server instance.
```bash
docker run -itd \
  -e "MONGO1=mongodb://mongo/formio-docker" \
  -e "REDIS_PORT=6379" \
  -e "REDIS_ADDR=redis://redis" \
  -e "PROTOCOL=http" \
  -e "DOMAIN=localhost" \
  -e "PORT=3000" \
  -e "JWT_SECRET=CHANGEME" \
  -e "JWT_EXPIRE_TIME=240" \
  -e "DB_SECRET=CHANGEME" \
  -e "ADMIN_EMAIL=admin@example.com" \
  -e "ADMIN_PASS=CHANGEME" \
  --net=formio \
  --name formio-server \
  --link formio-mongo:mongo \
  --link formio-redis:redis \
  -p 127.0.0.1:3000:3000 \
  formio/formio-server:2.8.0;
```

###### The Fleet
Now we can see all of our containers running with

```bash
docker ps
```

![](/assets/img/docker-on-prem.png)
