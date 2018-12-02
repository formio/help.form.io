---
title: Twitter
book: integrations
chapter: oauth
slug: twitter
weight: 80
---
Login to Twitter and visit the [Developer page](https://apps.twitter.com/).

Click on *Create New App*.


Fill in the **Application Name, Website,** and **Application description** with appropriate details about your application. This information is displayed to potential users of your application when they are asked to grant permissions to your app.

Fill in the **callback URL** with your application’s hostname. OAuth will not work unless you enter the same host name as the one your application is served from. Using `127.0.0.1` for running your app locally is acceptable, but make sure the right port is provided.

![](/assets/img/oauth/twitter-app-settings-edit.jpg){: .img-fluid .img-thumbnail }

Click *Keys and Access Tokens*.

Take note of the App ID and App Secret (in this guide we will refer to them as Client ID and Client Secret). Enter them in the Project Settings for Twitter Oauth.

![](/assets/img/oauth/twitter-app-keys.jpg){: .img-fluid .img-thumbnail }

Twitter OAuth should now be set up. Continue with adding [Login, Register and Link buttons](#button) to your forms.
