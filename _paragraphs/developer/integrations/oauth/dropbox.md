---
title: Dropbox
book: developer
section: integrations
chapter: oauth
slug: dropbox-oauth
weight: 25
---
Login in to Dropbox and visit the [Create Application page](https://www.dropbox.com/developers/apps/create)

![](/assets/img/oauth/dropbox.png)

Fill out the appropriate settings for your app. Using "Dropbox API" and "App Folder" should work for most applications.

![](/assets/img/oauth/dropbox-settings.png)

You should **Enable additional users** for your app so that others can use it as well. When ready, you can apply for production as well.

Grab the **App Key** and **App Secret**. These should be put in your project settings under Dropbox OAuth under **Client ID** and **Client Secret**.
 
Fill in the **Redirect URIs** with your application's **hostname**. OAuth will not work unless you enter the same hostname as the one your application is served from. Using `localhost` for running your app locally is acceptable, but make sure the right port is provided.

Dropbox OAuth should now be set up. Continue with adding [Login, Register and Link buttons](#button) to your forms.
