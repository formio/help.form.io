---
title: Upgrading Versions
book: tutorials
section: deployment
chapter: aws
slug: aws-upgrade
weight: 15
---
To upgrade the server version running in your AWS elastic beantalk environment, do the following.
 - Update your Docker deployment file - Within your local machine, update the file called ```Dockerrun.aws.json```. You'll want to change the Image Name field. Leave everything else the same unless you intend to change it. Change out "latest" for the server version you want to run.

    **Dockerrun.aws.json**

```
{
  "AWSEBDockerrunVersion": "1",
  "Authentication": {
    "Bucket": "elasticbeanstalk-us-east-1-385952297805",
    "Key": "formio.dockercfg"
  },
  "Image": {
    "Name": "formio/formio-server:5.5.0",
    "Update": "true"
  },
  "Ports": [
    {
      "ContainerPort": "80"
    }
  ],
  "Logging": "/var/log/nodejs"
}
```

  - Next, in Elastic Beanstalk go to Application versions and click the Upload button.

    <img src="/assets/img/developer/deployments/aws/uploadversion.png" style="width:600px" />

  - By convention enter the server version number in the Version label (i.e. 5.5.0) that matches the server version in the Dockerrun.aws.json file. Then upload the Dockerrun.aws.json file and click "Upload".

    <img src="/assets/img/developer/deployments/aws/uploadconfig.png" style="width:600px" />

  - Finally, select the checkbox next to your new version (5.5.0 in this example) and select the Deploy button. Select the environment you want to deploy to and press the Deploy button.

    <img src="/assets/img/developer/deployments/aws/upgradedeploy.png" style="width:600px" />

Elastic Beanstalk will now deploy the new server version to your environment. You can roll back to a previous version by selecting it and clicking Deploy again.