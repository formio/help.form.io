---
title: Authentication Configuration
book: developer
section: deployments
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
      "hub.docker.com": {
        "auth": "[YOUR AUTH KEY GOES HERE]",
        "email": "travis@form.io"
      }
    }
    </pre>

  - You will now need to create an S3 bucket within your AWS Account and upload this file into this bucket. Be sure to remember both the bucket name as well as the filename which you will need later.
