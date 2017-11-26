---
title: Version Deployment
book: userguide
chapter: staging
slug: version-deployment
weight: 30
---
Once you've defined a form version you can deploy the version to any stage you'd like
 
continuing with the example, select the **Staging** stage and using the staging panel simply select the
0.0.1 verizon from the select verizon tag drop down and click ```Deploy version tag to Stage```. 

![](/assets/img/userguide/userguide-stage-deployment-1.png)

Notice that the **Staging** stage now has the 0.0.1 version tag, mirroring the **Dev** stage. 

![](/assets/img/userguide/userguide-stage-deployment-2.png)

This means that **New Form** is now available in our **Staging** stage, where as earlier it was not.  

![](/assets/img/userguide/userguide-stage-deployment-3.png)

Finally, we can now deploy our stage to our **Live** stage. Please note that since the **Live** stage is a protected 
stage the only way to make changes to the stage is by using form versions. 

![](/assets/img/userguide/userguide-stage-deployment-4.png)

This is extremely useful because you can always role back an active stage to a previous version. 