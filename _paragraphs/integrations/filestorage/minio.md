---
title: Minio
book: integrations
chapter: filestorage
slug: minio
weight: 300
---
The Form.io platform supports **On-Premise** or **Private Cloud** file hosting through the use of the [Minio Server](https://minio.io). These instructions will talk you through how to setup and configure your Minio deployment to point to the Form.io platform.

### Minio Setup
To deploy a new Minio server, you will need to first install [Docker](https://docker.io) either on your local machine or on your privte cloud server. Once you have Docker installed, you can then run the following command to spin up a new Minio instance.

```sh
docker run -itd \
  -e "MINIO_ACCESS_KEY=CHANGEME" \
  -e "MINIO_SECRET_KEY=CHANGEME" \
  --name formio-minio \
  --restart unless-stopped \
  -p 9000:9000 \
  -v ~/minio/data:/data \
  -v ~/minio/config:/root/.minio \
  minio/minio server /data
```

In this example, it is important to note that I have Minio mounting a local computer folder @ ```~/minio```. This can be changed to any internal drive on your machine where you would like to store the Minio files.

Once minio is running, you can then verify that by typing the following.

```bash
docker ps
```

You should see something that looks like the following.

![](/assets/img/integrations/minio/dockerps.png){: .img-fluid .img-thumbnail }

You can also go to the URL http://localhost:9000 in your browser and see the minio interface. You can log in using the ```MINIO_ACCESS_KEY``` and ```MINIO_SECRET_KEY``` that you used to spin up the minio server.

![](/assets/img/integrations/minio/miniobrowser.png){: .img-fluid .img-thumbnail }

Once, there you will want to creata a new Bucket by clicking on the **+** icon toward the bottom right of the screen, and then select **Create Bucket**. You can give your bucket any name you wish and then press Enter to save.

![](/assets/img/integrations/minio/miniocreatebucket.png){: .img-fluid .img-thumbnail }

Keep the name of the bucket for future configurations.

### Using NGROK for local testing
If you wish to test this capability locally, it is recommended to use the tool [NGROK](https://ngrok.com/) to create a web accessible proxy to your local host. Once you have NGROK installed, you can then run the following on your machine to create a secure web tunnel to your localhost.

```bash
ngrok http 9000
```

With this running, you should then be able to go to the HTTPS url provided in your browser where you will see your locally running Minio server portal. Keep this URL for the next steps.

### Form.io Configuration
Now that you have a Minio Server running, the next thing you will need to do is configure your Form.io portal settings to point to the running Minio server. You can do this by logging into https://portal.form.io and navigate to your Project. Once there you will then go through the following steps.

 - Go to **Settings &#10072; Integrations &#10072; File Storage &#10072; Amazon S3 / Minio (On-Premise, Private Cloud) **
 - Click on the checkbox that says **Use Minio Server**
 - Next, configure the Minio settings as follows where you will provide your own configurations.
 
![](/assets/img/integrations/minio/miniosettings.png){: .img-fluid .img-thumbnail }

Press **Save** to save your settings.

### Create a Form that uses Minio
Next, you will need to create a new Webform that has a **File** component. In the configurations of the file upload, you will want to make sure that you have selected **S3** as the **Storage** provider.

![](/assets/img/integrations/minio/minios3config.png){: .img-fluid .img-thumbnail }

You are now off and running with the Minio!
 
   
