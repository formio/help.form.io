---
title: User's Guide
subtitle: PDF Server
book: userguide
weight: 110
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

  <a href="/assets/pdfproject.json" class="btn btn-default">Download PDF Project</a>

### Create your S3 Storage
The PDF Server does require an S3 compatible storage system. Obviously, we would recommend using [Amazon S3](https://aws.amazon.com/s3).
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