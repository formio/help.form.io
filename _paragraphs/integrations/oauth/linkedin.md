---
title: LinkedIn
book: integrations
chapter: oauth
slug: linkedin
weight: 90
---
Login in to LinkedIn and Click On the [Create Application](https://www.linkedin.com/developer/apps){:target="_blank"}

![](/assets/img/oauth/linkedinoauth-create-application.png){: .img-fluid .img-thumbnail }

Fill in the Company Name, Name, Application Logo, Application Use, Business Email, Business Phone, Website URL and Description with appropriate details about your application. This information is displayed to potential users of your application when they asked to grant permissions to your app.

![](/assets/img/oauth/linkedinoauth-create-application-form.png){: .img-fluid .img-thumbnail }

You should checked '*r_basicprofile*' for **Default Application Permissions**.

Grab the **Client ID** and **Client Secret**. These should be put in your project settings under LinkedIn OAuth under **Client ID** and **Client Secret**.
 
Fill in the **Authorized Redirect URLs** with your application's **hostname**. OAuth will not work unless you enter the same hostname as the one your application is served from. Using `localhost` for running your app locally is acceptable, but make sure the right port is provided.

![](/assets/img/oauth/linkedinoauth-settings.png){: .img-fluid .img-thumbnail }

Click On the *Update*
LinkedIn OAuth should now be set up. Continue with adding [Login, Register and Link buttons](#button) to your forms.
