---
title: Elastic Beanstalk
book: tutorials
section: deployment
chapter: aws
slug: aws-beanstalk
weight: 12
---
Now that we have our database and redis configured, we will be using **Elastic Beanstalk** to manage our docker deployments.

 - Within the AWS Home page, type **Elastic Beanstalk** into the search and click on the link provided.
 - Once you are within the **Elastic Beanstalk** main page, you will want to click on the link that says **Create New Environment**

    ![](/assets/img/integrations/aws/eb/ebcreate.png){: .img-fluid .img-thumbnail }

 - In the next screen, select **Web server environment** and then click **Select**
    ![](/assets/img/integrations/aws/eb/selectenv.jpg){: .img-fluid .img-thumbnail }

 - In the next screen, provide an **Application Name**

    ![](/assets/img/integrations/aws/eb/appname.jpg){: .img-fluid .img-thumbnail }

 - Scroll down and then provide an **Environment Name**

    ![](/assets/img/integrations/aws/eb/envname.jpg){: .img-fluid .img-thumbnail }

 - Scroll down some more and then select **Docker** as the environment. Just use the defaults provided for the other fields.

    ![](/assets/img/integrations/aws/eb/docker.jpg){: .img-fluid .img-thumbnail }

 - For this next section, click on **Upload your code**. Then follow the instructions below.

    ![](/assets/img/integrations/aws/eb/uploadcode.jpg){: .img-fluid .img-thumbnail }

 - **Application Code**: For this, we will want to upload a ZIP provided @ [https://github.com/formio/aws-formio-deployment/raw/master/latest.zip](https://github.com/formio/aws-formio-deployment/raw/master/latest.zip). After you click Upload button, we will select this file as follows.

    ![](/assets/img/integrations/aws/eb/uploadcode.png){: .img-fluid .img-thumbnail }

 - Next click on the button that says **Configure More Options**

    ![](/assets/img/integrations/aws/eb/configureoptions.jpg){: .img-fluid .img-thumbnail }

 - In the next page, click on **Edit** link within the **Software** section.

    ![](/assets/img/integrations/aws/eb/ebsoftware.jpg){: .img-fluid .img-thumbnail }

 - We will now need to provide the following environment variables within the environment variables section.

   {: .table .table-bordered .table-striped}
   | Setting | Description | Example |
   |---------|-------------|---------|
   | MONGO | The MongoDB connection string to connect to your remote database. This is the value we copied before. | mongodb://formio:badpassword@docdb-2019-02-05-03-07-17.cluster-otsyrtio9xoe.us-east-1.docdb.amazonaws.com:27017/formio?ssl=true |
   | MONGO_SA | The URL to the MongoDB SA public certificate file. Copy this value as is. | https://s3.amazonaws.com/rds-downloads/rds-combined-ca-bundle.pem |
   | LICENSE_KEY | The license key for your deployment. You will get this when you upgrade a project to Enterprise. | <---YOUR LICENSE---> |
   | PORTAL_ENABLED | Used to enable the On-Premise portal | true |
   | ADMIN_EMAIL | An admin account you would like to use as the first Admin user | admin@example.com |
   | ADMIN_PASS | A password for the first Admin user. This can be changed after the deployment is finished. | CHANGEME |
   | DB_SECRET | A secure secret that you will pick that is used to encrypt the project settings. | CHANGEME |
   | JWT_SECRET | A secure secret that you will pick that is used to establish secure JWT tokens. | CHANGEME |

 - These settings will look like the following.

    ![](/assets/img/integrations/aws/eb/ebenv.jpg){: .img-fluid .img-thumbnail }

 - Now press the **Save** Button to save your environment settings.
 - Next we will configure the **Instances** settings

    ![](/assets/img/integrations/aws/eb/ebinstances.jpg){: .img-fluid .img-thumbnail }

 - Within the instance settings, we need to ensure that the **Security Groups** enabled are the same as those we established for **DocumentDB**. By default, this is going to be the **default** security group. Select this and press **Save** button.

    ![](/assets/img/integrations/aws/eb/ec2securitygroups.jpg){: .img-fluid .img-thumbnail }

 - Now press the **Save** Button to save your environment settings.
 - You can now press the **Create Environment** button at the bottom of the page to build your environment.
 - This will now create a new Environment within AWS for your deployment. You are now ready to attach your Domains to the deployment.


