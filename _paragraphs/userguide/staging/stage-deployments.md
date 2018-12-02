---
title: Stage Deployments
book: userguide
chapter: staging
slug: stage-deployments
weight: 40
---
Once a stage version has been defined, users can deploy the version to any stage.  
 
Continuing with the example, select the **Staging** stage and using the staging panel, select the
0.0.1 version from the select version tag drop down menu and click ```Deploy version tag to Stage```. 

![](/assets/img/userguide/userguide-stage-deployment-1.png){: .img-fluid .img-thumbnail }

Notice that the **Staging** stage now has the 0.0.1 version tag, mirroring the **Dev** stage. 

![](/assets/img/userguide/userguide-stage-deployment-2.png){: .img-fluid .img-thumbnail }

This means that **New Form** is now available in our **Staging** stage, where as earlier it was not.  

![](/assets/img/userguide/userguide-stage-deployment-3.png){: .img-fluid .img-thumbnail }

Finally, the stage can be deployed further down the pipeline to the **Live** stage. 
Please note, that since the **Live** stage was set as a protected stage earlier in this walk-through,
using a stage deployment is the only way to make changes to the **Live** stage.  

![](/assets/img/userguide/userguide-stage-deployment-4.png){: .img-fluid .img-thumbnail }

Beyond what has been illustrated above, staging can be used to role back an active stage to any previous iteration. 
