---
title: Using Docker
book: userguide
chapter: environments
slug: environments-docker
weight: 20
---
Docker instances are run inside a Docker Engine. There are many options for where and how to run a docker instance. Depending on which Docker Engine you are using, the formio server configuration will be different.

#### Using Cloud Hosted Docker

If you are using a cloud hosted Docker Engine, please follow the appropriate steps to set up the formio server Docker container.

 * [Docker Cloud](https://cloud.docker.com/)
 * [Joyent Triton](https://www.joyent.com/triton)
 * [Amazon Web Services](https://aws.amazon.com/ecs/)
 * [Google Cloud Platform](https://cloud.google.com/container-engine/docs/)
 * [Microsoft Azure](https://azure.microsoft.com/)

We also have walkthroughs for some hosts.

 * [Microsoft Azure](/developer/deployments/azure)
 * [Amazon Web Services](/developer/deployments/aws)

#### Installing Docker on localhost for testing

Download and install Docker from [https://docs.docker.com/engine/installation/#supported-platforms](https://docs.docker.com/engine/installation/#supported-platforms)

#### Accessing the docker image
Our docker images are located on docker hub.

[https://hub.docker.com/r/formio/formio-enterprise/](https://hub.docker.com/r/formio/formio-enterprise/)

To pull it down, run the following docker command.

```bash
docker pull formio/formio-enterprise
```

#### Create a docker network to contain all the docker instances.
A typical Form.io installation includes a MongoDB, and a Node.js API Server. If your environment is fully dockerized, you can spin up the stack using the following example commands.

This will create an isolated network for just the formio services that are required to run the server. In addition, it will provide for an easy way to link the services together.

```bash
docker network create formio
```

#### Create the Mongo instance.
Run mongodb with a volume mount for data. This will store the data in the host machine at /opt/mongodb. If the mongodb instance is restarted or replaced, the data still exists and can be restarted with a different mongodb instance.

**On Mac OS** running native docker engine, be sure to add ~/opt/mongodb to File Sharing list in Docker->Preferences->File Sharing. You may use a different path if desired.

```bash
mkdir ~/opt/mongodb
# Double check permissions on /opt/mongodb
docker run -itd  \
  --name formio-mongo \
  --network formio \
  --volume ~/opt/mongodb:/data/db \
  --restart unless-stopped \
  mongo
```

#### Start the formio-enterprise instance.
Before running this command, **you must** replace the YOURLICENSE with your enterprise license, as well as replace all the CHANGEME secrets with your own custom random strings. This will ensure that the server remains secure.

PORTAL_SECRET is the secret that will allow the form.io portal to communicate with this server. Please make a note of it as you will need it when connecting your project.

##### For Stand-alone API Server w/ No PDF Server

```bash
docker run -itd \
  -e "LICENSE=YOURLICENSE" \
  -e "PORTAL_SECRET=CHANGEME" \
  -e "JWT_SECRET=CHANGEME" \
  -e "DB_SECRET=CHANGEME" \
  --restart unless-stopped \
  --name formio-server \
  --network formio \
  --link formio-mongo:mongo \
  --restart unless-stopped \
  -p 3000:80 \
  formio/formio-enterprise;
```

##### For Stand-alone API server with Deployed Portal interface
This command will install the API server, but also include the Deployed portal interface along with an admin account which will let you log into the portal.

```bash
docker run -itd \
  -e "ADMIN_EMAIL=admin@example.com" \
  -e "ADMIN_PASS=CHANGEME" \
  -e "PRIMARY=true" \
  -e "LICENSE=YOURLICENSE" \
  -e "PORTAL_SECRET=CHANGEME" \
  -e "JWT_SECRET=CHANGEME" \
  -e "DB_SECRET=CHANGEME" \
  --restart unless-stopped \
  --name formio-server \
  --network formio \
  --link formio-mongo:mongo \
  --restart unless-stopped \
  -p 3000:80 \
  formio/formio-enterprise;
```


##### For Stand-alone API Server with PDF Server
If you are running a PDF server within the same server as your deployment, you will also want to connect this deployment to the running instance of the PDF server. This can be done using the following command.

```bash
docker run -itd \
  -e "LICENSE=YOURLICENSE" \
  -e "FORMIO_FILES_SERVER=http://formio-files:4005" \
  -e "PORTAL_SECRET=CHANGEME" \
  -e "JWT_SECRET=CHANGEME" \
  -e "DB_SECRET=CHANGEME" \
  --restart unless-stopped \
  --network formio \
  --name formio-server \
  --link formio-files-core:formio-files \
  --link formio-mongo:mongo \
  -p 3000:80 \
  formio/formio-enterprise
```

#### Testing the installation
You should now have an instance of the formio-enterprise running in your environment. To test it, go to [http://localhost:3000/status](http://localhost:3000/status){:target="_blank"} which will give you the build number and database schema version of your environment.

#### Upgrading your deployment
Once you have your Docker container running, you will certainly get to a point where you will need to upgrade your Docker container server. To do this, you simply pull down the latest container, and launch the new instance. Before you update, it is important to stage your commands within a text editor so that you simply need to copy and paste your command in your shell to perform the udpate. To determine the environment variables you will need to call, it is important to ensure that the same environment variables are used from one version to another. You can determine what environment variables to use by typing the following command in your terminal.

```bash
docker inspect formio-server
```

This will print out the information from the formio-server container, including the environment variables. You will then copy those environment variables and merge them with the following command within a Text editor of your chosing.

```bash
docker pull formio/formio-enterprise && \
docker rm formio-server-old || true && \
docker stop formio-server && \
docker rename formio-server formio-server-old && \
docker run -itd \
  -e "LICENSE=YOURLICENSE" \
  -e "PORTAL_SECRET=CHANGEME" \
  -e "JWT_SECRET=CHANGEME" \
  -e "DB_SECRET=CHANGEME" \
  --restart unless-stopped \
  --name formio-server \
  --network formio \
  --link formio-mongo:mongo \
  --restart unless-stopped \
  -p 3000:80 \
  formio/formio-enterprise;
```

This command pulls down the latest version of the container, stops the current container, renames it to ```formio-server-old``` so that you have a path to go back if the update causes any problems, and then launches the new server in its place.

#### Upgrading Stand-alone MongoDB
In some cases, you may have a local MongoDB running where you would also wish to upgrade the MongoDB container. You must be careful when doing this since removing a container could remove your database. Because of this, the following commands should be performed when upgrading a local stand-alone MongoDB database container.

```bash
# Backup the current database into "/tmp/mongoexport"
docker run -i --rm --network formio --link formio-mongo -v /tmp/mongoexport:/tmp mongo bash -c 'mongodump -v --host formio-mongo:27017 --out=/tmp';

# Stop and remove the running mongo server.
docker stop formio-mongo;
docker rm formio-mongo;

# Move the current mongo directory to a backup folder in case the import fails.
sudo mv ~/opt/mongodb ~/opt/mongodb-backup;

# Pull the latest version of Mongo.
docker pull mongo;

# Start up a new container with the latest version of MongoDB.
docker run -itd  \
  --name formio-mongo \
  --network formio \
  --volume ~/opt/mongodb:/data/db \
  --restart unless-stopped \
  mongo;

# Import the export into the mongodb container.
docker run -i --rm --network formio --link formio-mongo -v /tmp/mongoexport:/tmp mongo bash -c 'mongorestore -v --noIndexRestore --host formio-mongo:27017 /tmp';
```


### Production Environments
For Production deployments, it is recommended to host your Mongo Database within an external service. With this, you will use the MongoDB connection string to connect the API Server to the remotely hosted database. This will look like the following.

```bash
docker run -itd \
  -e "LICENSE=YOURLICENSE" \
  -e "PORTAL_SECRET=CHANGEME" \
  -e "JWT_SECRET=CHANGEME" \
  -e "DB_SECRET=CHANGEME" \
  -e "MONGO=mongodb://:@aws-us-east-1-portal.234.dblayer.com:23423/formio?ssl=true" \
  -e "FORMIO_FILES_SERVER=https://pdfserver.yourdomain.com" \
  --restart unless-stopped \
  --name formio-server \
  -p 80:80 \
  formio/formio-enterprise;
```

Note: You will notice that this command also includes a connection to a deployed PDF server using the ```FORMIO_FILES_SERVER``` command. If you are not running your own local PDF server, then this command can be ignored.

Note that you would also provide your own URL to the ```MONGO``` database and also provide your own domain where you are hosting the PDF server for the ```FORMIO_FILES_SERVER``` variable.

### PDF Server Deployment
For help on PDF server deployments, please see our help documentation by [clicking on the following link](https://help.form.io/userguide/pdfserver/).

#### Local or On-Premise Deployment including API, PDF, Minio, Mongo, and Redis on a Single Server

The following commands can be used to spin up a single server environment that will host all of the necessary dependencies
to run the Form.io API server + PDF server all on one server. The following command can be performed on a fresh Unix based system with Docker already installed.

```bash
docker network create formio && \
docker run -itd  \
  --name formio-mongo \
  --network formio \
  --volume ~/opt/mongodb:/data/db \
  --restart unless-stopped \
  mongo && \
docker run -itd \
  -e "LICENSE=YOURLICENSE" \
  -e "FORMIO_FILES_SERVER=http://formio-files:4005" \
  -e "PORTAL_SECRET=CHANGEME" \
  -e "JWT_SECRET=CHANGEME" \
  -e "DB_SECRET=CHANGEME" \
  --restart unless-stopped \
  --network formio \
  --name formio-server \
  --link formio-files-core:formio-files \
  --link formio-mongo:mongo \
  -p 3000:80 \
  formio/formio-enterprise && \
docker run -itd \
  -e "MINIO_ACCESS_KEY=CHANGEME" \
  -e "MINIO_SECRET_KEY=CHANGEME" \
  --network formio \
  --name formio-minio \
  --restart unless-stopped \
  -p 9000:9000 \
  -v ~/minio/data:/data \
  -v ~/minio/config:/root/.minio \
  minio/minio server /data && \
docker run -itd \
  -e "FORMIO_SERVER=http://formio" \
  -e "FORMIO_PROJECT=59b7b78367d7fa2312a57979" \
  -e "FORMIO_PROJECT_TOKEN=wi83DYHAieyt1MYRsTYA289MR9UIjM" \
  -e "FORMIO_PDF_PROJECT=http://formio/yourproject" \
  -e "FORMIO_PDF_APIKEY=is8w9ZRiW8I2TEioY39SJVWeIsO925" \
  -e "FORMIO_S3_SERVER=minio" \
  -e "FORMIO_S3_PORT=9000" \
  -e "FORMIO_S3_BUCKET=formio" \
  -e "FORMIO_S3_KEY=CHANGEME" \
  -e "FORMIO_S3_SECRET=CHANGEME" \
  --network formio \
  --link formio-server:formio \
  --link formio-minio:minio \
  --restart unless-stopped \
  --name formio-files-core \
  -p 4005:4005 \
  formio/formio-files-core;
```

You will need to change the FORMIO_PROJECT, FORMIO_PROJECT_TOKEN, FORMIO_PDF_APIKEY, and the project name only ("/yourproject") within FORMIO_PDF_PROJECT.
You will also want to change all CHANGEME to a secret password that only you know.

### Docker Secrets
Our Enterprise server also supports the Docker Secrets feature which allows you to store the Environment variables in a secure way. Go to [https://docs.docker.com/engine/swarm/secrets](https://docs.docker.com/engine/swarm/secrets) for more information.

To utilize Docker Secrets, all of the configuration variables are the same as environment variables. Simply use the same name in docker secrets and the server will use the value. In order to use them, set DOCKER_SECRETS=1 in your environment variables. You can also set DOCKER_SECRETS_PATH to use a path other than /run/secrets.

### Docker Compose
Docker Compose provides a way to setup the entire deployment within a single script. Here is an example Docker Compose file. Please follow the following steps to get Form.io working within Docker Compose.

- Install Docker to your local machine.
- Copy the following text below into a file called **docker-compose.yml**
- Get a temporary LICENSE by contacting support@form.io
- Once you receive your license, paste this as the value for the LICENSE: environment variable within the docker-compose.yml file.
- Type ```docker-compose up``` within your terminal.
- This will install all dependencies locally and run the server @ http://localhost:3000 on your machine.
- Login using the credentials admin@example.com and CHANGEME as the password.
- You should see a project called "Portal Base", open this project and then navigate to Settings > Stage Versions > Import Template
- Download the [PDF Project](https://help.form.io/assets/pdfproject.json) to your local machine, and then import that into the Portal Base project
- Next navigate to Settings > Stage Settings > API Keys and create an API key for this project.
- Next navigate to Settings > PDF Management and then click on the Enterprise tab.
- Copy the value of the FORMIO_PROJECT and then request support@form.io to enable this project for Enterprise plan.
- Once this is done, you can then copy the following values and paste them into the docker-compose.yml file. Note: Your values will be different
    - FORMIO_PROJECT: 5d03208cf1fefc22cbefaa1d
    - FORMIO_PROJECT_TOKEN: 1ntb8zE4LhoaaekMMKQQ3kMakr1kUN
    - FORMIO_PDF_PROJECT: http://formio/formio
    - FORMIO_PDF_APIKEY: UzEevZFX9dXjIQ982E3aTIi9Ir3rAi
- Re-install the docker compose by typing the following.

    ```
      docker-compose stop
      docker-compose rm
      docker-compose up
    ```
- You should now have a completely working local Enterprise environment of Form.io.

**docker-compose.yml**
```yml
version: '3.7'
services:
  mongo:
    image: mongo:4.2
    restart: always
    volumes:
      - mdb-data:/data/db
    networks:
      formio:
        aliases:
          - mongo
    environment:
      MONGO_INITDB_ROOT_USERNAME:
      MONGO_INITDB_ROOT_PASSWORD:
  minio:
    image: minio/minio
    restart: always
    volumes:
      - minio-data:/data
      - minio-config:/root/.minio
    ports:
      - "9000:9000"
    networks:
      formio:
        aliases:
          - minio
    environment:
      MINIO_ACCESS_KEY: CHANGEME
      MINIO_SECRET_KEY: CHANGEME
    command: server /data
  formio:
    image: formio/formio-enterprise
    restart: always
    ports:
      - "3000:80"
    networks:
      formio:
        aliases:
          - formio
    environment:
      PRIMARY: 1
      ADMIN_EMAIL: admin@example.com
      ADMIN_PASS: CHANGEME
      FORMIO_FILES_SERVER: http://formio-files:4005
      LICENSE:
  formio-files:
    image: formio/formio-files-core
    restart: always
    ports:
      - "4005:4005"
    networks:
      formio:
        aliases:
          - formio-files
    environment:
      FORMIO_SERVER: http://formio
      FORMIO_PROJECT:
      FORMIO_PROJECT_TOKEN:
      FORMIO_PDF_PROJECT: http://formio/formio
      FORMIO_PDF_APIKEY:
      FORMIO_S3_SERVER: minio
      FORMIO_S3_PORT: 9000
      FORMIO_S3_BUCKET: formio
      FORMIO_S3_KEY: CHANGEME
      FORMIO_S3_SECRET: CHANGEME
networks:
  formio:
volumes:
  mdb-data:
  minio-data:
  minio-config:
```
