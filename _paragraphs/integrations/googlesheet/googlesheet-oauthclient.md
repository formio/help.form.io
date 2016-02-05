---
title: OAuth Client
book: integrations
chapter: googlesheet
slug: googlesheet-oauthclient
weight: 5
---

Login with google credentials on [Google Developers Console](https://console.developers.google.com/){:target="_blank"} and select 'Use Google API' to enable API, manage API and create credentials. And if you are not logged in then it ask to sign in into google account at first time. 

![](/assets/img/googlesheet/googlesheet-account-signin-username.png)

![](/assets/img/googlesheet/googlesheet-account-signin-password.png)

If you already have a project in the console, click on it in the console. Otherwise, click *Create Project* and fill out the required fields.

![](/assets/img/googlesheet/googlesheet-create-project-at-first-time.png)

By clicking on *Create Project* button, a popup will appear which ask you for project name. Add the project name and click on *Create* button.
![](/assets/img/googlesheet/googlesheet-create-project.png)

Make sure that the project is created and it will appear on 'Dashboard' as well as in 'Header'. To go to API Manager page click on *User Google APIs*. It will lead you to **API Manager** page.

![](/assets/img/googlesheet/googlesheet-project-created.png)

Find **Credentials** Tab inside **API Manager** to create new credential. While creating new credential please make sure to select **OAuth client ID**. 

![](/assets/img/googlesheet/googlesheet-credential-tab.png)

Once done, you will be redirected to **Create Client ID** page. If you get message like **To create an OAuth client ID, you must set a product name on the consent screen** click on *Configure Consent Screen* button. Otherwise this step can be skipped.

![](/assets/img/googlesheet/googlesheet-configure-consent-screen.png)

It will then ask you to set product name. Enter product name and click on *Save* button. Rest fields can be skipped.

![](/assets/img/googlesheet/googlesheet-product-name-save.png)

It will now ask you to set **Application Type** having multiple options like "Web Applications", "Android" etc. Select web application.

Now move on to **Authorized Redirect URIs** section and add link "https://developers.google.com/oauthplayground" if not already there.

![](/assets/img/googlesheet/googlesheet-web-application.png)

Once done with all above settings, click on *Create* button and it will create **Client ID** and **Secret Key** for you.

![](/assets/img/googlesheet/googlesheet-oauth-client.png)