---
title: Configuring
book: userguide
chapter: docker
slug: docker-variables
weight: 20
---
The formio server is configured with environment variables. When using Docker, you can set these by using the -e flag. Many Docker hosting platforms have easier ways of setting environment variables for your docker containers.

#### Installation
**Variables**
- ```ADMIN_EMAIL```: The email address for the root account.
- ```ADMIN_PASS```: The password for the root account.

If your mongodb connection is to an empty database, you will need to set these two variables to set up a root account. This account is used later to deploy projects to the server. Once the installation is completed, these variables can be removed.

#### MongoDB Connection
**Variables**
- ```MONGO1```: Directly connect to a mongo connection string. Example: “mongodb://localhost:27017”
- ```MONGO_PORT_27017_TCP_ADDR```: The address of the mongodb server. Defaults to “localhost”
- ```MONGO_PORT_27017_TCP_PORT```: The port of the mongodb server. Defaults to “27017”
- ```MONGO_COLLECTION```: Which db to use on the mongo server. Defaults to “formio”

Formio Server supports three different ways of connecting to a mongodb server.

##### Docker Network Links
Formio server prefers to connect via Docker network links. These allow connecting inside an isolated network and is the most current technology. To use it, create a Docker network and link within it.

**Example:**

```bash
docker network create formio
docker run -d --network formio --name formio-mongo mongo
docker run -d --network formio --link formio-mongo:mongo formio/formio-server
```

##### Docker Legacy Links
Formio server supports legacy Docker links. These can only be used on the default ```bridge``` network. To link, use the ```mongo``` link name.

**Example:**

```bash
docker run -d --name formio-mongo mongo
docker run -d --link mongo:formio-mongo formio/formio-server
```

##### MONGO1 Variable
If you have a mongodb server available, you can connect directly to it by setting the MONGO1 envinronment variable to the mongodb connection string.

**Example:** 

```bash
docker run -d -e “MONGO1=mongodb://localhost:27017” formio/formio-server
```

#### Redis Connection
**Variables**
- ```REDIS_ADDR```: The address of the redis server. Example: 'localhost'.
- ```REDIS_PORT```: The port of the redis server. Defaults to '6379'.
- ```REDIS_PASS```: (Optional) If you redis server has a password, set it with this.

Formio Server supports three different ways of connecting to a redis server.

##### Docker Network Links
Formio server prefers to connect via Docker network links. These allow connecting inside an isolated network and is the most current technology. To use it, create a Docker network and link within it.

**Example:**

```bash
docker network create formio
docker run -d --network formio --name formio-redis redis
docker run -d --network formio --link formio-redis:redis formio/formio-server
```

##### Docker Legacy Links
Formio server supports legacy Docker links. These can only be used on the default ```bridge``` network. To link, use the ```redis``` link name.

**Example:**

```bash
docker run -d --name formio-redis redis
docker run -d --link redis:formio-redis formio/formio-server
```

##### REDIS_ADDR and REDIS_PORT Variables
If you have a redis server available, you can connect directly to it by setting the REDIS_ADDR and REDIS_PORT envinronment variables.

**Example:** 

```bash
docker run -d -e "REDIS_ADDR=localhost" -e "REDIS_PORT=6370" formio/formio-server
```

#### Server URL settings.
**Variables**
- ```PROTOCOL```: The protocol the server is running. Defaults to “https”
- ```DOMAIN```: The domain name the server is running on. Defaults to “form.io”
- ```PORT```: The port the server is running. Note: This is the port that is publically accessible, not the port that docker is running. It is common to have docker running on a port but be externally available on a different port. Defaults to “80”

You will need to set up information about what host name and protocol your server is running on. Use these environment variables.

#### Secrets
**Variables**
- ```JWT_SECRET```: The secret key used to encrypt the Json Web Token used for user authentication. If this is changed all existing tokens will immediately expire.
- ```JWT_EXPIRE_TIME```: How long, in minutes, the JWT is valid. Defaults to 240.
- ```DB_SECRET```: Project settings in the database are encrypted. Set the DB_SECRET to encrypt the settings.
- ```DB_SECRET_OLD```: If you need to change the DB_SECRET, set the old value here and it will decrypt with the old and encrypt with the new the next time the server is started. Once changed, you can remove the DB_SECRET_OLD.

There are several places where a secure secret is needed to encrypt parts of the application. These should be unique to your instance.
