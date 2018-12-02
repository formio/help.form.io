---
title: Elastic Beanstalk
book: tutorials
section: deployment
chapter: aws
slug: aws-beanstalk
weight: 12
---
Now that you have the authentication file in place, you are ready to create your Elastic Beanstalk deployment.

 - First create a new folder where you will store your deployment files, and call it **formio-server**
 - Within this folder, create your Docker deployment file - Within your local machine, create a new file called ```Dockerrun.aws.json``` with the contents as follows. The Authentication Bucket and Key should be the bucket name and the file name you uploaded to that bucket with your docker hub configuration.

    **Dockerrun.aws.json**

    ```json
    {
      "AWSEBDockerrunVersion": "1",
      "Authentication": {
        "Bucket": "elasticbeanstalk-us-east-1-385952297805",
        "Key": "formio.dockercfg"
      },
      "Image": {
        "Name": "formio/formio-enterprise:latest",
        "Update": "true"
      },
      "Ports": [
        {
          "ContainerPort": "80"
        }
      ],
      "Logging": "/var/log/nodejs"
    }
    ```

  - Now that this is done, you will want to create a new folder within this folder called **.ebextensions**, within this folder, you will need to create a new file called **01_files.config** with the following contents.
  
    ```yaml
    files:
        "/etc/nginx/conf.d/proxy.conf" :
            mode: "000755"
            owner: root
            group: root
            content: |
               client_max_body_size 20M;
    ```

  - When you are done, your folder should look like the following.
  
  ![](/assets/img/tutorials/deployment/aws/deploy-folder.png){: .img-fluid .img-thumbnail }
  
  - Next, select the files within this folder, and then create a new ZIP file with those files. Make sure you create a ZIP of the files, and not the **formio-server** folder that we created at the beginning of this intro. Rename this file to **formio-server.zip**. Your folder should look like the following.
  
  ![](/assets/img/tutorials/deployment/aws/folder-zip.png){: .img-fluid .img-thumbnail }

  - Next, create a new Elastic Beanstalk deployment by clicking on the icon in the AWS Dashboard.

    <img src="/assets/img/developer/deployments/aws/awsdashboard.png" style="width:600px" />

  - Next click on "New Application"

    <img src="/assets/img/developer/deployments/aws/newapp.png" style="width:600px" />

  - Next provide the Application name.

    <img src="/assets/img/developer/deployments/aws/appname.png" style="width:300px" />

  - Now that you have an application created, you will now create a new **Environment** by clicking on the **Actions** tab and select **New Environment**

    <img src="/assets/img/developer/deployments/aws/newenvironment.png" style="width:600px" />

  - Next select a new "Web Server environment".

    <img src="/assets/img/developer/deployments/aws/webserver.png" style="width:600px" />

  - Now select the Docker predefined configuration, and then upload your **formio-server.zip** file for the Application code, and then select **Configure more options**.

    <img src="/assets/img/developer/deployments/aws/createenvironment.png" style="width:600px" />

  - First thing you will want to ensure is that this deployment is configured as a **High Availaibility** deployment. This will create the Elastic Load Balancers which we will use later.
  - After you have done that, you will now click on the **Modify** next to Software Settings

    <img src="/assets/img/developer/deployments/aws/configuresoftware.png" style="width:600px" />

  - Next provide the following Environment Variables to configure your instance.

    <img src="/assets/img/developer/deployments/aws/envvariables.png" style="width:600px" />

    {: .table .table-bordered .table-striped}
    | Setting | Description | Example |
    |---------|-------------|---------|
    | MONGO | The MongoDB connection string to connect to your remote database. | mongodb://<username>:<password>@aws-us-east-1-portal.234.dblayer.com:23423/formio?ssl=true |
    | MONGO_HIGH_AVAILABILITY | If your database is high availability (like from Mongo Cloud or Compose), then this needs to be set. | 1 |
    | ADMIN_EMAIL | The default administrator email | admin@example.com |
    | ADMIN_PASS | The default administrator password | [YOUR PASSWORD] |
    | DB_SECRET | The database encryption secret | [DB SECRET] |
    | JWT_SECRET | The secret password for JWT token encryption. | [TOKEN SECRET] |
    | FORMIO_FILES_SERVER | This is the URL of the PDF server, which is set within the API server so that it can download Submission PDF's pointed to the PDF Server | https://pdf.yourserver.com |

  - When you are done, you can now press the <strong>Create Environment</strong> button at the bottom of the page to build your environment.
  - This will now create a new Environment within AWS for your deployment. You are now ready to attach your Domains to the deployment.


