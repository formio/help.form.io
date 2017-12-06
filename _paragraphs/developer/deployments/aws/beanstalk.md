---
title: Elastic Beanstalk
book: developer
section: deployments
chapter: aws
slug: aws-beanstalk
weight: 12
---
Now that you have the authentication file in place, you are ready to create your Elastic Beanstalk deployment.

 - Create your Docker deployment file - Within your local machine, create a new file called ```Dockerrun.aws.json``` with the contents as follows. The Authentication Bucket and Key should be the bucket name and the file name you uploaded to that bucket with your docker hub configuration.

    **Dockerrun.aws.json**

```
{
  "AWSEBDockerrunVersion": "1",
  "Authentication": {
    "Bucket": "elasticbeanstalk-us-east-1-385952297805",
    "Key": "formio.dockercfg"
  },
  "Image": {
    "Name": "formio/formio-server:latest",
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

  - Create a new Elastic Beanstalk deployment by clicking on the icon in the AWS Dashboard.

    <img src="/assets/img/developer/deployments/aws/awsdashboard.png" style="width:600px" />

  - Next click on "New Application"

    <img src="/assets/img/developer/deployments/aws/newapp.png" style="width:600px" />

  - Next provide the Application name.

    <img src="/assets/img/developer/deployments/aws/appname.png" style="width:300px" />

  - Now that you have an application created, you will now create a new **Environment** by clicking on the **Actions** tab and select **New Environment**

    <img src="/assets/img/developer/deployments/aws/newenvironment.png" style="width:600px" />

  - Next select a new "Web Server environment".

    <img src="/assets/img/developer/deployments/aws/webserver.png" style="width:600px" />

  - Now select the Docker predefined configuration, and then upload your **Dockerrun.aws.json** file for the Application code, and then select **Configure more options**.

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
| PROTOCOL | Only use this if you are not behind https (for test environments only) | http |

  - When you are done, you can now press the <strong>Create Environment</strong> button at the bottom of the page to build your environment.
  - This will now create a new Environment within AWS for your deployment. You are now ready to attach your Domains to the deployment.


