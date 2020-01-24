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
 - Once you are within the **Elastic Beanstalk** main page, you will want to click on the link that says **Create New Application**

    ![](/assets/img/integrations/aws/eb/ebcreate.png){: .img-fluid .img-thumbnail }

 - In the next screen, provide a name and a description for your deployment. Then click **Create**

    ![](/assets/img/integrations/aws/eb/ebcreatepage.png){: .img-fluid .img-thumbnail }

 - Now, you will need to create an Environment. To do this, click on the link within the main page.

    ![](/assets/img/integrations/aws/eb/ebcreateenv.png){: .img-fluid .img-thumbnail }

 - For the environment tier, select **Web server environment**

    ![](/assets/img/integrations/aws/eb/ebselectenv.png){: .img-fluid .img-thumbnail }

 - For this next section, we will provide our own specifics for our environment. We will want to provide the following.
   - Application Name: Pick your own
   - Environment Name: Pick your own, but it is typical to have **prod**, **dev**, **stage**, etc in the name
   - Domain: Pick your own
   - Description: provide your own.
   - Platform: **Docker**

 - **Application Code**: For this, we will want to upload a ZIP provided @ [https://github.com/formio/aws-formio-deployment/raw/master/latest.zip](https://github.com/formio/aws-formio-deployment/raw/master/latest.zip). After you click Upload button, we will select this file as follows.

    ![](/assets/img/integrations/aws/eb/ebupload.png){: .img-fluid .img-thumbnail }

 - Next click on the button that says **Configure More Options**

    ![](/assets/img/integrations/aws/eb/ebmoreoptions.png){: .img-fluid .img-thumbnail }

 - In the next page, click on **Modify** link within the **Software** section.

    ![](/assets/img/integrations/aws/eb/ebsoftware.png){: .img-fluid .img-thumbnail }

 - We will now need to provide the following environment variables within the environment variables section.

   {: .table .table-bordered .table-striped}
   | Setting | Description | Example |
   |---------|-------------|---------|
   | MONGO | The MongoDB connection string to connect to your remote database. This is the value we copied before. | mongodb://formio:badpassword@docdb-2019-02-05-03-07-17.cluster-otsyrtio9xoe.us-east-1.docdb.amazonaws.com:27017/formio?ssl=true |
   | MONGO_SA | The URL to the MongoDB SA public certificate file. Copy this value as is. | https://s3.amazonaws.com/rds-downloads/rds-combined-ca-bundle.pem |
   | LICENSE | The license for your deployment. You will get this when you upgrade a project to Enterprise. | <---YOUR LICENSE---> |
   | PORTAL_SECRET | A secure secret that you will pick that is secure to establish a secure portal connection. | CHANGEME |
   | DB_SECRET | A secure secret that you will pick that is used to encrypt the project settings. | CHANGEME |
   | JWT_SECRET | A secure secret that you will pick that is used to establish secure JWT tokens. | CHANGEME |

 - These settings will look like the following.

    ![](/assets/img/integrations/aws/eb/ebenv.png){: .img-fluid .img-thumbnail }

 - Now press the **Save** Button to save your environment settings.
 - Next we will configure the **Instances** settings

    ![](/assets/img/integrations/aws/eb/ebinstances.png){: .img-fluid .img-thumbnail }

 - Within the instance settings, we need to ensure that the **Security Groups** enabled are the same as those we established for both the **DocumentDB** as well as the **ElastiCache**. By default, this is going to be the **default** security group. Select this and press **Save** button.

    ![](/assets/img/integrations/aws/eb/ec2securitygroups.png){: .img-fluid .img-thumbnail }

 - Now press the **Save** Button to save your environment settings.
 - You can now press the **Create Environment** button at the bottom of the page to build your environment.
 - This will now create a new Environment within AWS for your deployment. You are now ready to attach your Domains to the deployment.


