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
    <pre>
    {
      "AWSEBDockerrunVersion": "1",
      "Authentication": {
        "Bucket": "formio-docker",
        "Key": ".dockercfg"
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
    </pre>

  - Create a new Elastic Beanstalk deployment by clicking on the icon in the AWS Dashboard.

    <img src="/assets/img/developer/deployments/aws/awsdashboard.png" style="width:600px" />

  - Next click on "New Application"

    <img src="/assets/img/developer/deployments/aws/newapp.png" style="width:600px" />

  - Next provide the Application name.

    <img src="/assets/img/developer/deployments/aws/appname.png" style="width:600px" />

  - Next create a new "Web Server" application.

    <img src="/assets/img/developer/deployments/aws/webserver.png" style="width:600px" />

  - Now select the Docker predefined configuration.

    <img src="/assets/img/developer/deployments/aws/dockerconfig.png" style="width:600px" />

  - Now chose the **Dockerrun.config.json** file you created in the previous step.

    <img src="/assets/img/developer/deployments/aws/dockerrun.png" style="width:600px" />

  - Now provide your environment name for your deployment.

    <img src="/assets/img/developer/deployments/aws/envname.png" style="width:600px" />

  - Skip through Additional Resources, Configuration Details, Environment Tags, and Permissions.
  - On the Review page, press **Launch**
  - It will fail to launch the first time. This is normal.


