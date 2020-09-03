---
title: Elastic Beanstalk
book: tutorials
section: deployment
chapter: aws
slug: aws-beanstalk
weight: 12
---
Now that we have our database and S3 configured, we will be using **Elastic Beanstalk** to manage our docker deployments.

 - Within the AWS Home page, type **Elastic Beanstalk** into the search and click on the link provided.
 - Once you are within the **Elastic Beanstalk** main page, you will want to click on the link that says **Create Application**

    ![](/assets/img/integrations/aws/eb/ebcreateapp.jpg){: .img-fluid .img-thumbnail }

 - NOTE: You may see a different page that has a link that says **Create New Environment**. If so, then click on that link, and then select the **Web server environment** on the next page and press **Select**.
 - In the next screen, provide an **Application Name**

    ![](/assets/img/integrations/aws/eb/appname.jpg){: .img-fluid .img-thumbnail }

 - Scroll down and then select **Docker** as the environment, and then select **Multi-container Docker**.

    ![](/assets/img/integrations/aws/eb/docker.jpg){: .img-fluid .img-thumbnail }

 - For this next section, click on **Upload your code**. Then follow the instructions below.

    ![](/assets/img/integrations/aws/eb/uploadcode.jpg){: .img-fluid .img-thumbnail }

 - **Application Code**: For this, we will want to upload a ZIP provided @ [https://github.com/formio/aws-formio-deployment/raw/master/multicontainer.zip](https://github.com/formio/aws-formio-deployment/raw/master/multicontainer.zip). After you click Upload button, we will select this file as follows.
 - **NOTE**: If you are running this environment in the US Gov Cloud, then you will need to use the ZIP provided @ [https://github.com/formio/aws-formio-deployment/raw/master/multicontainer-gov.zip](https://github.com/formio/aws-formio-deployment/raw/master/multicontainer-gov.zip)

    ![](/assets/img/integrations/aws/eb/uploadzip.jpg){: .img-fluid .img-thumbnail }

 - Next click on the button that says **Configure More Options**

    ![](/assets/img/integrations/aws/eb/configureoptions.jpg){: .img-fluid .img-thumbnail }

 - In the next page, click on **Edit** link within the **Software** section.

    ![](/assets/img/integrations/aws/eb/ebsoftware.jpg){: .img-fluid .img-thumbnail }

 - We will now need to provide the following environment variables within the environment variables section.

   {: .table .table-bordered .table-striped}
   | Setting | Description | Example |
   |---------|-------------|---------|
   | MONGO | The MongoDB connection string to connect to your remote database. This is the value we copied before. | mongodb://formio:badpassword@docdb-2019-02-05-03-07-17.cluster-otsyrtio9xoe.us-east-1.docdb.amazonaws.com:27017/formio?ssl=true |
   | LICENSE_KEY | The license key for your deployment. You will get this when you upgrade a project to Enterprise. | <---YOUR LICENSE---> |
   | PORTAL_ENABLED | Used to enable the On-Premise portal | true |
   | ADMIN_EMAIL | An admin account you would like to use as the first Admin user | admin@example.com |
   | ADMIN_PASS | A password for the first Admin user. This can be changed after the deployment is finished. | CHANGEME |
   | DB_SECRET | A secure secret that you will pick that is used to encrypt the project settings. | CHANGEME |
   | JWT_SECRET | A secure secret that you will pick that is used to establish secure JWT tokens. | CHANGEME |
   | FORMIO_S3_BUCKET | This is the name of the Bucket we created in the previous section | pdf-server |
   | FORMIO_S3_REGION | This is the region which the S3 bucket was created | us-east-1 |
   | FORMIO_S3_KEY | This is the Key we saved in the previous step. | ATHSLKJK234LSDLLKJS |
   | FORMIO_S3_SECRET | This is the Secret Key that we saved in the previous step. | nsl23lkjsdf9009sllkjowoi8sous923sd |
   | PDF_SERVER (optional) | Use this configuration if you would like to globally set the PDF_SERVER url to the deployment. See Project section for more information | http://pdf.formio-env.eba-pbxiw2wt.us-east-1.elasticbeanstalk.com |
 - NOTE: If you wish to secure your Environment Variables from visibility, then we recommend looking into the Amazon Key Management Service @ [https://aws.amazon.com/kms](https://aws.amazon.com/kms).

 - These settings will look like the following.

    ![](/assets/img/integrations/aws/eb/ebenv.jpg){: .img-fluid .img-thumbnail }

 - Now press the **Save** Button to save your environment settings.
 - Next we will configure the **Instances** settings

    ![](/assets/img/integrations/aws/eb/ebinstances.jpg){: .img-fluid .img-thumbnail }

 - Within the instance settings, we need to ensure that the **Security Groups** enabled are the same as those we established for **DocumentDB**. By default, this is going to be the **default** security group. Select this and press **Save** button.

    ![](/assets/img/integrations/aws/eb/ec2securitygroups.jpg){: .img-fluid .img-thumbnail }

 - Next we will configure the **Capacity** settings.

    ![](/assets/img/integrations/aws/eb/capacity.jpg){: .img-fluid .img-thumbnail }

 - Within this section, we will make sure we select a size of instance that is suitable for our Environment. Form.io recommends the following configurations for the following environments.

    {: .table .table-bordered .table-striped}
    | Environment Type | Instance Size |
    |---------|-------------|
    | Development Environments | at least **t3.medium** |
    | Production Environments | at least **t3.large** |

   For this example, we will just select **t3.medium**.

    ![](/assets/img/integrations/aws/eb/instance-type.jpg){: .img-fluid .img-thumbnail }

   Now press **Save** button at the bottom of the page.

 - Now press the **Save** Button to save all of your environment settings.
 - You can now press the **Create App** button at the bottom of the page to build your environment.
 - This will now create a new Environment within AWS for your deployment. We can now click on the Application URL and you should now see your portal.

    ![](/assets/img/integrations/aws/eb/gotoenv.jpg){: .img-fluid .img-thumbnail }

   We are now ready to create a new Project!
