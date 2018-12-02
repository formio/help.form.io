---
title: Facebook
book: integrations
chapter: oauth
slug: facebook
weight: 65
---
Login to Facebook and visit the [Developer page](https://developers.facebook.com/).

Click on *My Apps > Add a New App*.

![](/assets/img/oauth/facebook-front-page.png){: .img-fluid .img-thumbnail }

Click on *Website*.

![](/assets/img/oauth/facebook-new-app-type.png){: .img-fluid .img-thumbnail }

Enter a name for your app and click *Create New Facebook App ID*.

![](/assets/img/oauth/facebook-quick-start.png){: .img-fluid .img-thumbnail }

Select a category for your app and click *Create App ID*.

![](/assets/img/oauth/facebook-new-app-id.png){: .img-fluid .img-thumbnail }

Scroll down and fill in the **Site URL** with your application's **hostname**. OAuth will not work unless you enter the same hostname as the one your application is served from. Using `localhost` for running your app locally is acceptable, but make sure the right port is provided.

![](/assets/img/oauth/facebook-new-app-url.png){: .img-fluid .img-thumbnail }

Click *Next*.

Scroll to the top and click *Skip Quick Start*.

Take note of the App ID and App Secret (in this guide we will refer to them as Client ID and Client Secret). Enter them in the Project Settings for Facebook Oauth.

![](/assets/img/oauth/facebook-app-settings-view.png){: .img-fluid .img-thumbnail }

<p class="note" markdown="1">Note that your Facebook app is now in development mode and can only be logged into by you. When you are ready to open up OAuth logins to the public, go to the *Status & Review* page and click the toggle button to make your app public.</p>

Facebook OAuth should now be set up. Continue with adding [Login, Register and Link buttons](#button) to your forms.
