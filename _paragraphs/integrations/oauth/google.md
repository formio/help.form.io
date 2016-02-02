---
title: Google
book: integrations
chapter: oauth
slug: google
weight: 28
---
Login to Google and visit the [Developer page](https://console.developers.google.com/).

Click on *All Project > Create a project*.

![](/assets/img/oauth/google-create-project.jpg)

Enter a Project name for your app and click *Create*.

![](/assets/img/oauth/google-create-project_2.jpg)


Click on *Enable and manage APIs*.

![](/assets/img/oauth/google-manage-api.jpg)

Click on *Credentials  >  OAuth consent screen *.
Scroll down and fill in the **Product name shown to users ** with your application's **Homepage URL **.

![](/assets/img/oauth/google-project-name.jpg)

Click on *Credentials  >  Credentials *.

Scroll down and click on  **New Credentials ** then Select **Oauth Client ID**.

![](/assets/img/oauth/google-generate-oauth-id.jpg)


Scroll down to Select **Application** *type Web application*  and fill in the **Authorized redirect URIs** with your application's **hostname**. OAuth will not work unless you enter the same hostname as the one your application is served from. Using `127.0.0.1` for running your app locally is acceptable, but make sure the right port is provided.

![](/assets/img/oauth/google-redirect-uri.jpg)


Click on *Create*

Take note of the Client ID and Client Secret. Enter them in the Project Settings for Google Oauth.

![](/assets/img/oauth/google-keys.jpg)


Google OAuth should now be set up. Continue with adding [Login, Register and Link buttons](#button) to your forms.
