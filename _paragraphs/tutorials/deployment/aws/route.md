---
title: Domain Routing (Route 53)
book: tutorials
section: deployment
chapter: aws
slug: aws-route
weight: 15
---
Now that your Environment is up and running, the next task is to attach a Domain to the Elastic Beanstalk deployment. If you configured the Elastic Beanstalk deployment to use High Availability, then it will have created some Elastic Load Balancers in front of the deployment which you can link the DNS records against.

  - To get started, we will click on **Route 53**

    <img src="/assets/img/developer/deployments/aws/route53.png" />

  - Next, you will need to created a **Hosted Zone**

    <img src="/assets/img/developer/deployments/aws/hostzone.png" />

  - You will now provide your domain name and then press **Create**
  - Next, you will create a new **Record Set** and then provide the following record.
    - ```*```.yourdomain.com
    - Type - A Record
    - Alias - Yes
    - Then select the Elastic Load Balancer as the target.
    - Now press **Create**
  - When you are done, your routes should look something like the following.

    <img src="/assets/img/developer/deployments/aws/routesetup.png" />

  - Now, you set your domain Nameservers to point to the ones provided by Route 53. Once the domains evaluate, then you should be able to see the deployed API within that domain.
