---
title: Stage Versions
book: userguide
chapter: staging
slug: stage-versions
weight: 30
---
Form.io allows users to push different forms though the staging pipeline by using **Version Tags** in the staging menu. 
Notice that that in this example, the **Dev** stage has a **New Form**

![](/assets/img/userguide/userguide-stage-version-1.png){: .img-fluid .img-thumbnail }

while the **Staging** stage does not. 

![](/assets/img/userguide/userguide-stage-version-2.png){: .img-fluid .img-thumbnail }

The goal is to now push the **New Form** down the pipeline so that the **Staging** stage now has the **Dev** changes.
To do this, navigate into the project settings by clicking the settings or gear icon on the left navigation panel 
and then select ```Staging``` from the side menu. Next, select either ```Create Version Tag``` or ```Create``` to get started. 

![](/assets/img/userguide/userguide-stage-version-3.png){: .img-fluid .img-thumbnail }

Label the version tag and then click ```Create Version Tag```. 

![](/assets/img/userguide/userguide-stage-version-4.png){: .img-fluid .img-thumbnail }

Please note, the new form version automatically anchored itself to your active stage. In this example, notice
that the **Dev** stage is now tagged 0.0.1. 

![](/assets/img/userguide/userguide-stage-version-5.png){: .img-fluid .img-thumbnail }
