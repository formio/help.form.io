---
title: Form.io Project
book: tutorials
section: deployment
chapter: aws
slug: aws-project
weight: 13
---
 - Now that we have our deployment up and running, the first step is to login to our new deployment. On the first page, we will now use the ADMIN_EMAIL and ADMIN_PASS values (which we added to the Environment Variables in a previous step) to authenticate into the developer portal.

    ![](/assets/img/integrations/aws/eb/login.jpg){: .img-fluid .img-thumbnail }

 - Once you are logged into the Developer Portal, we will now create a new Project.

    ![](/assets/img/integrations/aws/eb/newproject.jpg){: .img-fluid .img-thumbnail }

 - In the popup modal, give your project a title and then click **Create Project**

    ![](/assets/img/integrations/aws/eb/projecttitle.jpg){: .img-fluid .img-thumbnail }

 - Once you are within the Project page, click on the **Settings** button, then click **PDF Server** section.

    ![](/assets/img/integrations/aws/eb/pdfsettings.jpg){: .img-fluid .img-thumbnail }

 - NOTE: If you wish to globally set the PDF server for all projects, then you can provide this value as the **PDF_SERVER** environment variable within your Elastic Beanstalk deployment.

 - Next, set the PDF Server URL to the Domain name with a "pdf" subdomain, like so.

    ![](/assets/img/integrations/aws/eb/pdfurl.jpg){: .img-fluid .img-thumbnail }

 - You are now completely configured and ready to upload PDF files and generate PDF's of the submissions within Form.io!
