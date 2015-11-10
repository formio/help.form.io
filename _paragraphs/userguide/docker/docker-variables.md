---
title: Environment Variables
book: userguide
chapter: docker
slug: docker-variables
weight: 30
---
The formio server is configured with environment variables. When using docker, you can set these by using the -e flag. Many docker hosting platforms have easier ways of setting environment variables for your docker containers.

#### Installation
If your mongodb connection is to an empty database, you will need to set these two variables to set up a root account. This account is used later to deploy projects to the server. Once the installation is completed, these variables can be removed.
```ADMIN_EMAIL```: The email address for the root account.
```ADMIN_PASS```: The password for the root account.

#### MongoDB Connection
There are two options for how to connect to a mongodb server. You can connect directly using a mongodb connection string using the MONGO1 environment variable or use MONGO_PORT_27017_TCP_ADDR and MONGO_PORT_27017_TCP_PORT which facilitates docker’s linking capabilities. There is also MONGO_COLLECTION which specifies which DB to use. 

```MONGO1```: Directly connect to a mongo connection string. Example: “mongodb://localhost:27017”
```MONGO_PORT_27017_TCP_ADDR```: The address of the mongodb server. Defaults to “localhost”
```MONGO_PORT_27017_TCP_PORT```: The port of the mongodb server. Defaults to “27017”
```MONGO_COLLECTION```: Which db to use on the mongo server. Defaults to “formio”

Examples:
// Connect to a localhost server using a single string.
```docker run -d -e “MONGO1=mongodb://localhost:27017” formio/formio-server```

// Connect to a localhost using parts.
```docker run -d -e “MONGO_PORT_27017_TCP_ADDR=localhost” -e “MONGO_PORT_27017_TCP_PORT=27017” formio/formio-server```

// Use docker’s link command to link to a docker mongodb server.
```docker run -d --name formio-mongo mongo
docker run -d --link mongo:formio-mongo formio/formio-server```

#### Server URL settings.
You will need to set up information about what host name and protocol your server is running on. These are done with the following environment variables
```PROTOCOL```: The protocol the server is running. Defaults to “https”
```DOMAIN```: The domain name the server is running on. Defaults to “form.io”
```PORT```: The port the server is running. Note: This is the port that is publically accessible, not the port that docker is running. It is common to have docker running on a port but be externally available on a different port. Defaults to “80”

#### Secrets
There are several places where a secure secret is needed to encrypt parts of the application.
```JWT_SECRET```: The secret key used to encrypt the Json Web Token used for user authentication. If this is changed all existing tokens will immediately expire.
```JWT_EXPIRE_TIME```: How long, in minutes, the JWT is valid. Defaults to 240.
```DB_SECRET```: Project settings in the database are encrypted. Set the DB_SECRET to encrypt the settings.
```DB_SECRET_OLD```: If you need to change the DB_SECRET, set the old value here and it will decrypt with the old and encrypt with the new the next time the server is started. Once changed, you can remove the DB_SECRET_OLD.