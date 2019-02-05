---
title: ElasticCache (optional)
book: tutorials
section: deployment
chapter: aws
slug: aws-elasticcache
weight: 10
---
The next item we will setup will be **ElasticCache**. This is only needed if you are also deploying the **PDF Server** within your deployment since it is utilized to store and retrieve temporary authentication tokens used for downloading PDFs. Follow the instructions below to setup this service.

 - Within the AWS Search bar, type **Elastic** and then click on the link that says **ElastiCache**
   ![](/assets/img/integrations/aws/eb/ecsearch.png){: .img-fluid .img-thumbnail }

 - If you see an introduction screen, make sure to click on the link that says **Get Started Now**
 - Under the Create Page, make sure to provide the following required configurations.
   - Cluster Engine: **Redis**
   
 - The values of the other options can be determined by you, but here is just an example.
   - Name: **formio-redis**
   - Description: **A Redis service for the Form.io platform.**
   - Engine Version Compatibility: Pick the latest version
   - Port: **6379**
   - Node Type: **cache.r5.large**
   - Number of Replicas: **2**
   
 - When you are done, click on the **Create** button.
 - When the Redis server is done creating, you can then click on the **Cluster Name**, and then copy the value of the **Primary Endpoint** as shown below.
    ![](/assets/img/integrations/aws/eb/redisconfig.png){: .img-fluid .img-thumbnail }
    
