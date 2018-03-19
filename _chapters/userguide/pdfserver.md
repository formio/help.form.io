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

![](/assets/img/userguide/pdfserver/pdfupgrade.png)

### Import the PDF Resources
Now that you have upgraded your project, you will now need to import the PDF Resources into your project. To do this, download the
following PDF project.json locally to your computer.

  <a href="/assets/pdfproject.json" class="btn btn-default" download>Download PDF Project</a>

You can now navigate to your current project, and then import this template into your project, by clicking on .

![](/assets/img/userguide/pdfserver/pdfimport.png)

then click on the **Import Project Template to Live**. You will now see a new Resource in your project called **PDF** that will be used to keep track of all your pdf forms.

### Create an API key for your project
We will now need to create an **API key** for your project so that the PDF server can communicate to your project and add new entries into the PDF form that was imported in the previous step. To do this,
we will simply click on the settings of your project and create a new api key as follows.

![](/assets/img/userguide/pdfserver/pdfapikeys.png)

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

```
docker login
docker pull formio/formio-files-core
```

Once you have the server deployed, you can then navigate to your **PDF Enterprise Page** which can be found in the PDF section of your project as follows.

![](/assets/img/userguide/pdfserver/pdfsettings.png)

In these settings, you will see a block of code that looks like this.

```
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

You will need to copy these settings. For the Minio server deployments, you will need to provide the FORMIO_S3_SERVER configuration. You will then run this within your terminal which should spin up your new server. The settings are described as follows.

{: .table .table-bordered .table-striped}
| Setting | Description | Example |
|---------|-------------|---------|
| FORMIO_PROJECT | This is your project ID, which can be seen by looking at your project URL and copying what comes after ```/project/...``. | 5aafe4e36d2d1e3153681e2a |
| FORMIO_PROJECT_TOKEN | This is a provided PDF server token that must be provided to start the server. | OFU1XbBosvNMpses2LBTawcLrUX6K2 |
| FORMIO_PDF_PROJECT | This is the URL of your project. If you imported the pdf template into your current project, then this is the URL of your project. | https://pdfexample.form.io |
| FORMIO_PDF_APIKEY | This is the API key we generated in the previous step. | XFaM2dDQyg4yWPAI8sd2Zuol3Ef7Ti |
| FORMIO_S3_SERVER | The URL of your S3 server. You can omit this if you are using Amazon S3 | localhost |
| FORMIO_S3_PORT | The port of your S3 server. You can omit this if you are using Amazon S3 | 9000 |
| FORMIO_S3_BUCKET | The name of your S3 bucket | pdf |
| FORMIO_S3_REGION | The region of your S3 bucket. You can omit this if you are using Minio | us-east-1 |
| FORMIO_S3_KEY | The S3 authentication key | IZ3671M2GO1KTSA1Z9ZU |
| FORMIO_S3_SECRET | The S3 authentication secret | 9PkfNHuqiNtTp0f4teHIL2yOULDjKGXjFYERxVB3 |

### Point your project to your new PDF Server
The final step is to point your project to use the new PDF server that you just deployed. Within the **PDF Enterprise Page** of your project, you will add the url of your server to the settings and then press **Save**.

![](/assets/img/userguide/pdfserver/pdfserverurl.png)

You are now running a completely hosted **PDF Server**!