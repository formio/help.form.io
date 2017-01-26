---
title: Docker Configuration
book: developer
section: deployments
chapter: aws
slug: aws-config
weight: 13
---
Now that your Docker deployment is up, you will need to configure it so that it can connect to the Database servers as well as have the correct configurations for proper operation.

  - Within your Docker environment, click on **Configuration** and then press the gear icon next to **Software Configuration**

    <img src="/assets/img/developer/deployments/aws/envconfig.png" style="width:600px" />

  - Now within the **Environemnt Variables** section, you need to provide the configurations which are covered in the <a href="/userguide/#docker-variables">Docker Variables</a> section of our help docs. It will look something similar to this.

    <img src="/assets/img/developer/deployments/aws/env.png" style="width:600px" />

  - Press save and restart deployment.

Your deployment should now be live!


