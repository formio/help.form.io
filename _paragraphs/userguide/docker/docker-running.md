---
title: Running Containers
book: userguide
chapter: docker
slug: docker-server
weight: 20
---
#### Accessing the docker image
Once on the commercial plan, you will have access to the docker repository. Our docker images are located on docker’s hub.

[https://hub.docker.com/r/formio/formio-server/](https://hub.docker.com/r/formio/formio-server/)

Since the image is a private docker respository, you will need to log in with your docker account and test pulling the image. If you are unable to pull the image, please contact support with your username and account information.

```bash
docker login
docker pull formio/formio-server
```

#### Create a docker network to contain all the docker instances.
A typical Form.io installation includes a Redis, MongoDB, and a Node.js API Server. If your environment is fully dockerized, you can spin up the stack using the following example commands.

This will create an isolated network for just the formio services that are required to run the server. In addition, it will provide for an easy way to link the services together.

```bash
docker network create formio
```

#### Create the Mongo instance.
Run mongodb with a volume mount for data. This will store the data in the host machine at /opt/mongodb. If the mongodb instance is restarte or replaced, the data still exists and can be restarted with a different mongodb instance.

**On Mac OS** running native docker engine, be sure to add /opt/mongodb to File Sharing list in Docker->Preferences->File Sharing. You may use a different path if desired.

```bash
mkdir /opt/mongodb
# Double check permissions on /opt/mongodb
docker run -itd  \
  --name formio-mongo \
  --network formio \
  --volume /opt/mongodb:/data/db \
  mongo;
```

#### Create the Redis instance.

```bash
docker run -itd \
  --name formio-redis \
  --network formio \
  redis;
```

#### Start the formio-server instance.
Before running this command, replace all the CHANGEME secrets with your own custom random strings. This will ensure that the server remains secure.

Set protocol, port and domain to the address where they will be accessible on the external network. For development it is recommended to use port 3000 and for production, use port 80. Configure in your domain name system to point that domain to the server running this docker engine. If you want to support subdomains, set the wildcard subdomain to also point at the server. See [#docker-dns](docker dns) for more information.

**First time install**
Set ADMIN_EMAIL and ADMIN_PASS the first time formio-server is run in a mongodb collection to set the primary account information.
ADMIN_EMAIL and ADMIN_PASS may be removed after the initial install.

```bash
docker run -itd \
  -e "ADMIN_EMAIL=admin@example.com" \
  -e "ADMIN_PASS=CHANGEME" \
  -e "JWT_SECRET=CHANGEME" \
  -e "DB_SECRET=CHANGEME" \
  -e "PROTOCOL=http" \
  --name formio-server \
  --network formio \
  --link formio-mongo:mongo \
  --link formio-redis:redis \
  -p 3000:80 \
  formio/formio-server;
```

**NOTE**
If you are running this container in a production environment and have SSL enabled, then you will need to remove the Environment Variable ```PROTOCOL```

#### Testing the installation
You should now have an instance of the formio-server running in your environment. To test it, go to [http://localhost:3000](http://localhost:3000){:target="_blank"}. You should see a response with information about the primary project.
