---
title: Configure Settings
book: tutorials
section: deployment
chapter: minio
slug: minio-configure
weight: 30
---
In form.io, go to your project's settings and go to Integrations -> File Storage -> S3.

![](/assets/img/tutorials/deployment/minio/settings.png)

Enter your Access Key, Secret Key that were generated when minio started.

Enter the bucket name that you created.

In the Bucket URL, Enter the endpoint that displayed when minio started followed by the bucket name. This should NOT have /minio in the url.
```
http://localhost:9000/test/
```

Enter any additional settings as required.

Save the settings.

Now, add a file component to a form and congfigure it for s3 as normal. Files will upload to your minio server.