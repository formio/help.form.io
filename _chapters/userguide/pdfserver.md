---
title: User's Guide
subtitle: PDF Server
book: userguide
weight: 210
chapter: pdfserver
layout: chapter
---
The PDF Server allows you to deploy the Form.io PDF solution into your own environment, where you can store all of the PDF
files within your own storage provider. The PDF server supports any **S3 Compatible** storage provider, but also integrates
with [Minio](https://minio.io/) to allow for local storage of PDF files. Here are the instructions to deploy your own
PDF server.

### Upgrade your project.
In order to get the PDF server connected to your project, you must first upgrade your project within the Project Plan section
of your project. Your project must be at least a **Team Pro** project in order to enable the PDF Server capabilities. You can
upgrade, by selecting more than one PDF Server within the project upgrade section.

![](/assets/img/userguide/pdfserver/pdfupgrade.png){: .img-fluid .img-thumbnail }

### Import the PDF Resources
Now that you have upgraded your project, you will now need to import the PDF Resources into your project. To do this, download the
following PDF project.json locally to your computer.

[Download PDF Project](/assets/pdfproject.json){: .btn .btn-primary }

You can now navigate to your current project, and then import this template into your project, by clicking on .

![](/assets/img/userguide/pdfserver/pdfimport.png){: .img-fluid .img-thumbnail }

then click on the **Import Project Template to Live**. You will now see a new Resource in your project called **PDF** that will be used to keep track of all your pdf forms.

### Create an API key for your project
We will now need to create an **API key** for your project so that the PDF server can communicate to your project and add new entries into the PDF form that was imported in the previous step. To do this,
we will simply click on the settings of your project and create a new api key as follows.

![](/assets/img/userguide/pdfserver/pdfapikeys.png){: .img-fluid .img-thumbnail }

Make sure you keep track of this key since we will need it later.

### Create your S3 Storage
Now that our project is configured, we will now need to setup an S3 storage for our forms. The PDF Server does require an S3 compatible storage system. Obviously, we would recommend using [Amazon S3](https://aws.amazon.com/s3).
This server also support the [Minio Private Cloud](https://minio.io) system, which is documented below. Within Amazon S3, you will
need to create a new storage **bucket** which will store all of the PDF files. After you are done doing this, you will need to ensure
you have an **IAM** account attached to the bucket policy of your S3 server. Please follow [the following instructions](http://docs.aws.amazon.com/AmazonS3/latest/dev/walkthrough1.html) to
create an access policy to your S3 bucket. When you are done, you will have both an ***Access Key*** and a ***Secret Key***.

### Deploy the PDF Server
Now that you have your S3 storage in place, and have an **Access Key** and **Secret Key**, you can now deploy your PDF server.
In order to do this, you will need to have a [Docker Hub](https://hub.docker.com/) account, and send that to the Form.io team so that we can
provide you read access to the PDF server repository. Once you have been given read access, you should then be able to perform the following within your
Docker enabled server.

```bash
docker login
docker pull formio/formio-files-core
```

Once you have the server deployed, you can then navigate to your **PDF Enterprise Page** which can be found in the PDF section of your project as follows.

![](/assets/img/userguide/pdfserver/pdfsettings.png){: .img-fluid .img-thumbnail }

In these settings, you will see a block of code that looks like this.

```bash
docker run -itd \
  -e "FORMIO_PROJECT=[PROJECT ID]" \
  -e "FORMIO_PROJECT_TOKEN=[PROJECT TOKEN]" \
  -e "FORMIO_PDF_PROJECT=[PDF PROJECT API URL]" \
  -e "FORMIO_PDF_APIKEY=[PDF PROJECT API KEY]" \
  -e "FORMIO_S3_SERVER=[YOUR S3 SERVER]" \
  -e "FORMIO_S3_BUCKET=[YOUR S3 BUCKET NAME]" \
  -e "FORMIO_S3_REGION=[YOUR S3 REGION]" \
  -e "FORMIO_S3_KEY=[YOUR S3 AUTH KEY]" \
  -e "FORMIO_S3_SECRET=[YOUR S3 AUTH SECRET]" \
  --restart unless-stopped \
  --name formio-files-core \
  -p 80:4005 \
  formio/formio-files-core;
```

You will need to copy these settings. For the Minio server deployments, you will need to provide the FORMIO_S3_SERVER configuration. You will then run this within your terminal which should spin up your new server.

### Remote Form.io Server + PDF Server
If you have a combination of both the remote Form.io API server **formio/formio-enterprise** as well as the deployed PDF server **formio/formio-files-core**, you will need to introduce two new Environment variables to ensure that the API server can communicate to the PDF server and vice versa. Because of this, you will need to introduce the following two Environment Variables within the API Server and PDF Server respectively.

{: .table .table-bordered .table-striped}
| Deployment | Setting | Description | Example |
|---------|---------|-------------|---------|
| API Server (formio/formio-enterprise) | FORMIO_FILES_SERVER | This is the URL of the PDF server, which is set within the API server so that it can download Submission PDF's pointed to the PDF Server | https://pdf.yourserver.com |
| PDF Server (formio/formio-files-core) | FORMIO_SERVER | This is the URL of the API server, so that the remote PDF server can communicate to the API server to authenticate certain requests. | https://forms.yourserver.com |

### PDF Server Environment Variables
The settings for the deployed PDF Server are described as follows.

{: .table .table-bordered .table-striped}
| Setting | Description | Example |
|---------|-------------|---------|
| FORMIO_SERVER | This is the URL to a remotely deployed server | https://forms.yourserver.com |
| FORMIO_PROJECT | This is your project ID, which can be seen by looking at your project URL and copying what comes after ```/project/...``. | 5aafe4e36d2d1e3153681e2a |
| FORMIO_PROJECT_TOKEN | This is a provided PDF server token that must be provided to start the server. | OFU1XbBosvNMpses2LBTawcLrUX6K2 |
| FORMIO_PDF_PROJECT | This is the URL of your project. If you imported the pdf template into your current project, then this is the URL of your project. | https://pdfexample.form.io |
| FORMIO_PDF_APIKEY | This is the API key we generated in the previous step. | XFaM2dDQyg4yWPAI8sd2Zuol3Ef7Ti |
| FORMIO_VIEWER | The URL of a custom viewer application. See [https://help.form.io/userguide/pdf/#custom-viewer](/userguide/pdf/#custom-viewer) for more information. | https://formio.github.io/formio-viewer/dist?theme=paper |
| FORMIO_S3_SERVER | The URL of your S3 server. You can omit this if you are using Amazon S3 | localhost |
| FORMIO_S3_PORT | The port of your S3 server. You can omit this if you are using Amazon S3 | 9000 |
| FORMIO_S3_BUCKET | The name of your S3 bucket | pdf |
| FORMIO_S3_REGION | The region of your S3 bucket. You can omit this if you are using Minio | us-east-1 |
| FORMIO_S3_KEY | The S3 authentication key | IZ3671M2GO1KTSA1Z9ZU |
| FORMIO_S3_SECRET | The S3 authentication secret | 9PkfNHuqiNtTp0f4teHIL2yOULDjKGXjFYERxVB3 |

### Point your project to your new PDF Server
The final step is to point your project to use the new PDF server that you just deployed. Within the **PDF Enterprise Page** of your project, you will add the url of your server to the settings and then press **Save**.

![](/assets/img/userguide/pdfserver/pdfserverurl.png){: .img-fluid .img-thumbnail }

You are now running a completely hosted **PDF Server**!

### Typical Form.io Server + PDF Server scalable environment.
It is very common to setup the Form.io API Server within a scalable environment along with the PDF Server. Here are the Docker commands to configure a side-by-side API Server + PDF Server deployment.

#### API Server + Redis
Assuming that you have an external MongoDB setup, the only thing that you will need to configure in addition to a MongoDB server is a Redis instance. The PDF downloads uses a temp token feature of the API server which does require that **Redis** be installed. You can either setup Redis externally, or in some cases this can be managed on the actual API Server. Typically, for a production environment, you would want to have Redis running external, but it is also not considered bad practice to have Redis on the actual server since it is only used to store the temporary download tokens and the worst thing that will happen is that a token would expire if the servers reset. To accomplish this, you will execute the following commands within your terminal.

First create a newtwork that will connect Form.io Server to the local Redis Instance

```bash
docker network create formio
```

Now spin up a local instance of Redis on this server.

```bash
docker run -itd \
  --name formio-redis \
  --network formio \
  --restart unless-stopped \
  redis;
```

Next, spin up your Form.io API server connecting it to the local Redis instance. 

```bash
docker run -itd \
  -e "LICENSE=YOURLICENSE" \
  -e "PORTAL_SECRET=CHANGEME" \
  -e "JWT_SECRET=CHANGEME" \
  -e "DB_SECRET=CHANGEME" \
  -e "MONGO=mongodb://:@aws-us-east-1-portal.234.dblayer.com:23423/formio?ssl=true" \
  -e "FORMIO_FILES_SERVER=https://pdfserver.yourdomain.com" \
  --network formio \
  --link formio-redis:redis \
  --restart unless-stopped \
  --name formio-server \
  -p 80:80 \
  formio/formio-enterprise;
```

Note that you would provide your own URL to the ```MONGO``` database and also provide your own domain where you are hosting the PDF server for the ```FORMIO_FILES_SERVER``` variable.

#### API Server Standalone
For some cases, you may wish to keep your Redis database external to your Form.io API server. This would allow for your API servers to become more ephemeral where they can autoscale. If this is the case, then you would provide the following configurations when spinning up your servers. For example, this would be what our Docker command would look like connecting to an ElasticCache instance in AWS.

```bash
docker run -itd \
  -e "LICENSE=YOURLICENSE" \
  -e "PORTAL_SECRET=CHANGEME" \
  -e "JWT_SECRET=CHANGEME" \
  -e "DB_SECRET=CHANGEME" \
  -e "MONGO=mongodb://:@aws-us-east-1-portal.234.dblayer.com:23423/formio?ssl=true" \
  -e "REDIS_ADDR=production-001.2iu8pr.0001.usw2.cache.amazonaws.com" \
  -e "REDIS_PORT=6379" \
  -e "FORMIO_FILES_SERVER=https://pdfserver.yourdomain.com" \
  --restart unless-stopped \
  --name formio-server \
  -p 80:80 \
  formio/formio-enterprise;
```

Notice that in this scenario, you do not need to create a ```formio``` newtork and connect your Docker container to the redis machine with the ```-link``` command.

### PDF (files) Server
To run the PDF Server in a production environment, the first thing you need to do is create an external mechanism for storing files. If you are using AWS S3, then this can be pretty simple where you just connect the PDF Server to that instance of S3 using the ```FORMIO_S3_SERVER``` as follows

```bash
docker run -itd \
  -e "FORMIO_SERVER=https://formio.yourdomain.com" \
  -e "FORMIO_PROJECT=59b7b78367d7fa2312a57979" \
  -e "FORMIO_PROJECT_TOKEN=wi83DYHAieyt1MYRsTYA289MR9UIjM" \
  -e "FORMIO_PDF_PROJECT=https://formio.yourdomain.com/yourproject" \
  -e "FORMIO_PDF_APIKEY=is8w9ZRiW8I2TEioY39SJVWeIsO925" \
  -e "FORMIO_S3_KEY=[S3 KEY]" \
  -e "FORMIO_S3_SECRET=[S3 SECRET]" \
  -e "FORMIO_S3_BUCKET=[S3 BUCKET]" \
  -e "FORMIO_S3_REGION=[S3 REGION]" \
  --restart unless-stopped \
  --name formio-files-core \
  -p 80:4005 \
  formio/formio-files-core;
```

### PDF (files) Server + Minio
If you would like to run a different file storage mechanism than S3, or maybe you would like to host your files locally, then you will need to use [Minio](https://minio.io). This allows you to connect to any external file system or a local file system if you would like. You can go to their website, and read their documentation on how to set it up.

Once you are ready to install it, you can then run it locally as follows by first creating a newtwork as follows.

```host
formio network create formio
```

Then run Minio. For example, this command would connect with Minio, which is connected to an Azure Blob.

```bash
docker run -itd \
 -e "MINIO_ACCESS_KEY=myblob" \
 -e "MINIO_SECRET_KEY=[AZURE BLOB SECRET KEY]" \
 --network formio \
 --name formio-minio \
 --restart unless-stopped \
 -p 9000:9000 \
 minio/minio gateway azure;
```

You can now connect to Minio with the following.

```bash
docker run -itd \
  -e "FORMIO_SERVER=https://formio.yourdomain.com" \
  -e "FORMIO_PROJECT=59b7b78367d7fa2312a57979" \
  -e "FORMIO_PROJECT_TOKEN=wi83DYHAieyt1MYRsTYA289MR9UIjM" \
  -e "FORMIO_PDF_PROJECT=https://formio.yourdomain.com/yourproject" \
  -e "FORMIO_PDF_APIKEY=is8w9ZRiW8I2TEioY39SJVWeIsO925" \
  -e "FORMIO_S3_KEY=myblob" \
  -e "FORMIO_S3_SECRET=[AZURE BLOB SECRET]" \
  -e "FORMIO_S3_BUCKET=formio" \
  -e "FORMIO_S3_REGION=us-east-1" \
  -e "FORMIO_S3_SERVER=minio" \
  -e "FORMIO_S3_PORT=9000" \
  --network formio \
  --link formio-minio:minio \
  --restart unless-stopped \
  --name formio-files-core \
  -p 80:4005 \
  formio/formio-files-core;
```

### Local Deployment: API, PDF, Minio, Mongo, and Redis

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
  --name formio-redis \
  --network formio \
  --restart unless-stopped \
  redis && \
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
  --link formio-redis:redis \
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

You can now run your Form.io API Server alongside your PDF Server!
