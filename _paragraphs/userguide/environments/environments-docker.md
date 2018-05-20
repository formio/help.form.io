---
title: Using Docker
book: userguide
chapter: environments
slug: environments docker
weight: 20
---
Docker instances are run inside a Docker Engine. There are many options for where and how to run a docker instance. Depending on which Docker Engine you are using, the formio server configuration will be different.

#### Using Cloud Hosted Docker

If you are using a cloud hosted Docker Engine, please follow the appropriate steps to set up the formio server Docker container.

 * [Docker Cloud](https://cloud.docker.com/)
 * [Joyent Triton](https://www.joyent.com/triton)
 * [Amazon Web Services](https://aws.amazon.com/ecs/)
 * [Google Cloud Platform](https://cloud.google.com/container-engine/docs/)
 * [IBM Bluemix](https://www.ibm.com/cloud/)
 * [Microsoft Azure](https://azure.microsoft.com/)

We also have walkthroughs for some hosts. 

 * [Amazon Web Services](/developer/deployments/aws)
 * [IBM BlueMix](/developer/deployments/bluemix)

#### Installing Docker on localhost for testing

Download and install Docker from [https://docs.docker.com/engine/installation/#supported-platforms](https://docs.docker.com/engine/installation/#supported-platforms)

#### Accessing the docker image
Once on a team pro or enterprise plan, you will have access to the docker repository. Our docker images are located on docker hub.

[https://hub.docker.com/r/formio/formio-server/](https://hub.docker.com/r/formio/formio-server/)

Since the image is a private docker respository, you will need to log in with your docker account and test pulling the image. If you are unable to pull the image, please contact support with your username and account information.

    docker login
    docker pull formio/formio-server

#### Create a docker network to contain all the docker instances.
A typical Form.io installation includes a Redis, MongoDB, and a Node.js API Server. If your environment is fully dockerized, you can spin up the stack using the following example commands.

This will create an isolated network for just the formio services that are required to run the server. In addition, it will provide for an easy way to link the services together.

    docker network create formio

#### Create the Mongo instance.
Run mongodb with a volume mount for data. This will store the data in the host machine at /opt/mongodb. If the mongodb instance is restarte or replaced, the data still exists and can be restarted with a different mongodb instance.

**On Mac OS** running native docker engine, be sure to add /opt/mongodb to File Sharing list in Docker->Preferences->File Sharing. You may use a different path if desired.

    mkdir /opt/mongodb
    # Double check permissions on /opt/mongodb
    docker run -itd  \
      --name formio-mongo \
      --network formio \
      --volume /opt/mongodb:/data/db \
      --restart unless-stopped \
      mongo;

#### Create the Redis instance.

    docker run -itd \
      --name formio-redis \
      --network formio \
      --restart unless-stopped \
      redis;

#### Start the formio-server instance.
Before running this command, **you must** replace all the CHANGEME secrets with your own custom random strings. This will ensure that the server remains secure.

Set protocol, port and domain to the address where they will be accessible on the external network. For development it is recommended to use port 3000 and for production, use port 80.

PORTAL_SECRET is the secret that will allow the form.io portal to communicate with this server. Please make a note of it as you will need it when connecting your project.

    docker run -itd \
      -e "PORTAL_SECRET=CHANGEME" \
      -e "JWT_SECRET=CHANGEME" \
      -e "DB_SECRET=CHANGEME" \
      -e "PROTOCOL=http" \
      --restart unless-stopped \
      --name formio-server \
      --network formio \
      --link formio-mongo:mongo \
      --link formio-redis:redis \
      --restart unless-stopped \
      -p 3000:80 \
      formio/formio-server;

**NOTE**
If you are running this container in a production environment and have SSL enabled, then you will need to remove the Environment Variable ```PROTOCOL```

#### Testing the installation
You should now have an instance of the formio-server running in your environment. To test it, go to [http://localhost:3000](http://localhost:3000){:target="_blank"}. You should see a response with an empty array since there will be no projects on your environment yet.

Also test out [http://localhost:3000/status](http://localhost:3000/status){:target="_blank"} which will give you the build number and database schema version of your environment.

#### Upgrading your deployment
Once you have your Docker container running, you will certainly get to a point where you will need to upgrade your Docker container server. To do this, you simply pull down the latest container, and launch the new instance. Before you update, it is important to stage your commands within a text editor so that you simply need to copy and paste your command in your shell to perform the udpate. To determine the environment variables you will need to call, it is important to ensure that the same environment variables are used from one version to another. You can determine what environment variables to use by typing the following command in your terminal.

```
docker inspect formio-server
```

This will print out the information from the formio-server container, including the environment variables. You will then copy those environment variables and merge them with the following command within a Text editor of your chosing.

```
docker pull formio/formio-server && \
docker rm formio-server-old || true && \
docker stop formio-server && \
docker rename formio-server formio-server-old && \
docker run -itd \
  -e "PORTAL_SECRET=CHANGEME" \
  -e "JWT_SECRET=CHANGEME" \
  -e "DB_SECRET=CHANGEME" \
  -e "PROTOCOL=http" \
  --restart unless-stopped \
  --name formio-server \
  --network formio \
  --link formio-mongo:mongo \
  --link formio-redis:redis \
  --restart unless-stopped \
  -p 3000:80 \
  formio/formio-server;
```

This command pulls down the latest version of the container, stops the current container, renames it to ```formio-server-old``` so that you have a path to go back if the update causes any problems, and then launches the new server in its place.
