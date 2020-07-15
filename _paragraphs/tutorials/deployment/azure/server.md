---
title: Virtual Machine Setup
book: tutorials
section: deployment
chapter: azure
slug: server
weight: 5
---
You will now setup the **API Server** by using the Azure Container Instances setup.

 - An On-Premise Enterprise license is required to complete this installation
 - In the left menu, click on the **Virtual Machines** menu item, and then press **+ Add** button.
 - In the search for images, type the word **Docker**, and then click on the **Docker on Ubuntu Server**
 - You will then see an info page with a **Create** button at the bottom. Click on this button.
 - Next, you will provide the Host name, and a root user account credentials.
 - You will now need to select your Instance for your machine. We recommend the following.
   - **Test Environments** - A1 Standard
   - **Production Environments** - A6 Standard

   ![](/assets/img/integrations/azure/vm-create.png){: .img-fluid .img-thumbnail }

 - Now press **Create**
 - You will now wait for this machine to be created, and once it is, we will need to open up the HTTP port 80 on this machine.
 - To do this, you will click on this machine in the **Virtual Machines** section, and then click on **Endpoints** and then click **+ Add**
 - We will now configure the following endpoint.
   - Name: HTTP
   - Protocol: TCP
   - Public Port: 80
   - Private Port: 80
   - Press **OK**
 - Now that we have an HTTP port open on this machine, we can now SSH into the machine using your computers Terminal.
 - To login to this machine, you will first need to get the **DNS Name** by clicking on the **Overview** tab.
 - You will then see the **DNS Name**, which you will then need to copy.

   ![](/assets/img/integrations/azure/vm-dns-name.png){: .img-fluid .img-thumbnail }

 - Next, you will open up a Terminal on your local computer and type the following.

   ```
   ssh [user]@[dns name]
   ```

   Make sure you replace ```[user]``` with the username that you used to create the virtual machine, and the ```[dns name]``` with the name you just copied.
 - You will then be prompted to enter your password which you will enter the same password you provided when you created the virtual machine.
 - You should then see the console of the Ubuntu virtual machine. You will now need to login to your **Docker Hub** acount by typing

   ```bash
   docker login
   ```

 - Once logged in, you will now need to download the Docker containers.
   While it is recommended to put the **API Server** and the **PDF Server** on separate Virtual machines, for this example, we will just download both of them on the same machine.

   ```bash
   docker pull formio/formio-enterprise
   docker pull formio/formio-files-core
   ```

 - You will now need to create an "internal" network that you will use to connect all the internal docker containers together.

   ```bash
   docker network create formio
   ```

 - Next you will create the Minio Server which will connect to your **Azure Blob** that we just created.

   ```bash
   docker run -itd \
    -e "MINIO_ACCESS_KEY=myblob" \
    -e "MINIO_SECRET_KEY=[AZURE BLOB SECRET KEY]" \
    --network formio \
    --name formio-minio \
    --restart unless-stopped \
    minio/minio gateway azure;
   ```

   Where you will replace "myblob" with you Azure blob name, and the ```[AZURE BLOB SECRET KEY]``` with the key we saved earlier.
 - Once this is completed, we can ensure this is running by typing the following command.

   ```bash
   docker logs formio-minio
   ```

   You should see some status output from the running minio container.

 - Next we will spin up our **API Server** using the following command.

   ```bash
   docker run -itd \
     -e "LICENSE=YOURLICENSE" \
     -e "FORMIO_FILES_SERVER=http://formio-files:4005" \
     -e "PORTAL_SECRET=CHANGEME" \
     -e "JWT_SECRET=CHANGEME" \
     -e "DB_SECRET=CHANGEME" \
     -e "MONGO=mongodb://formio:[PASSWORD]@formio.documents.azure.com:10255/formio?ssl=true&replicaSet=globaldb" \
     --restart unless-stopped \
     --network formio \
     --name formio-server \
     --link formio-files-core:formio-files \
     -p 3000:80 \
     formio/formio-enterprise;
   ```

   You will need to make sure that you change out the values for PORTAL_SECRET, JWT_SECRET, DB_SECRET, MONGO, REDIS_ADDR, AND REDIS_PASS to be the values that you saved in your editor during the setup process.

 - After this runs for a minute, you should then be able to type the following to check on the status.

   ![](/assets/img/integrations/azure/api-server-running.png){: .img-fluid .img-thumbnail }

 - Next, we will deploy our **PDF server** to point to both the API server + Minio File Server.

   ```bash
   docker run -itd \
     -e "FORMIO_SERVER=http://formio" \
     -e "FORMIO_PROJECT=59b7b78367d7fa2312a57979" \
     -e "FORMIO_PROJECT_TOKEN=wi83DYHAieyt1MYRsTYA289MR9UIjM" \
     -e "FORMIO_PDF_PROJECT=http://formio/yourproject" \
     -e "FORMIO_PDF_APIKEY=is8w9ZRiW8I2TEioY39SJVWeIsO925" \
     -e "FORMIO_S3_SERVER=minio" \
     -e "FORMIO_S3_PORT=9000" \
     -e "FORMIO_S3_BUCKET=formio" \
     -e "FORMIO_S3_KEY=myblob" \
     -e "FORMIO_S3_SECRET=[AZURE BLOB SECRET KEY]" \
     --network formio \
     --link formio-server:formio \
     --link formio-minio:minio \
     --restart unless-stopped \
     --name formio-files-core \
     -p 4005:4005 \
     formio/formio-files-core
   ```

   You will need to change the FORMIO_PROJECT, FORMIO_PROJECT_TOKEN, FORMIO_PDF_PROJECT, FORMIO_PDF_APIKEY, FORMIO_S3_KEY, and FORMIO_S3_SECRET with configurations provided previously as well as settings that are provided to you within your Project Settings, under **PDF Management** @ https://portal.form.io.

   For the FORMIO_PDF_PROJECT, you can keep the "http://formio/" since this will connect to the locally running server, and then with the correct project name, it will find your project.

 - Once this is running, you should be able to type the following.

   ```bash
   docker logs formio-files-core
   ```

   and then see the following.

   ![](/assets/img/integrations/azure/files-running.png){: .img-fluid .img-thumbnail }

 - You should now have two public ports accessible on this machine.
   - API Server: Port 3000
   - PDF Server: Port 4005

 - We can now make all of this fall under a single HTTP port by configuring an NGINX proxy on our server.
