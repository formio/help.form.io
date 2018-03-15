---
title: Authentication Configuration
book: tutorials
section: deployment
chapter: aws
slug: aws-auth
weight: 11
---
The first step in creating an AWS Deployment is to establish an authentication mechanism from your AWS Account into your Docker Hub profile.
They way to accomplish this is outlined within the AWS Documentation found @ [http://docs.aws.amazon.com/elasticbeanstalk/latest/dg/create_deploy_docker.container.console.html#docker-images-private](http://docs.aws.amazon.com/elasticbeanstalk/latest/dg/create_deploy_docker.container.console.html#docker-images-private).

The steps to get started are as follows.

  - Login to your Docker Hub account via command prompt.
<pre>
    docker login https://hub.docker.com/r/formio/formio-server
</pre>

  - Next you will need to copy the contents of the "auths" section of the ``` ~/.docker/config.json``` file to create a special AWS Authentication file which will look something similar to the following.

    **formio.dockercfg**
    <pre>
    {
      "https://index.docker.io/v1/": {
        "auth": "[YOUR AUTH KEY GOES HERE]",
        "email": "travis@form.io"
      }
    }
    </pre>

  - Next you will find the S3 bucket that Elastic Beanstalk created within your AWS Account. This typically looks like the following when you go to **S3** section of your AWS Account.

    <img src="/assets/img/developer/deployments/aws/elasticbeanstalks3.png" style="width:600px" />

    If this bucket does not exist, then you may need to create a default Elastic Beanstalk deployment so that it will automatically create this bucket and configure it for Elastic Beanstalk use.

  - Once you get this bucket created, you will now need to add your **formio.dockercfg** to this bucket and take note of the name of this bucket to configure the Dockerrun.aws.json