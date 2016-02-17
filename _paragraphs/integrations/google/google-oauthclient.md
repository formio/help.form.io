---
title: OAuth Client
book: integrations
chapter: google-drive
slug: google-oauthclient
weight: 5
---

To get your OAuth token, log in with you google credentials on [Google Developers Console](https://console.developers.google.com/){:target="_blank"}
 
Select **Use Google API**. Then click on **Drive API** and ensure that it is enabled.

If you already have a project in the console, click on it in the console. Otherwise, click *Create Project* and fill out the required fields.

![](/assets/img/googlesheet/googlesheet-create-project-at-first-time.png)

A popup will appear which ask you for project name. Add the project name and click the *Create* button.

![](/assets/img/googlesheet/googlesheet-create-project.png)

Once the project is created it will appear in the 'Dashboard' as well as in the 'Header'. To go to API Manager page click on *User Google APIs*. It will lead you to **API Manager** page.
 
Find **Credentials** Tab inside **API Manager** to create new credential. While creating new credential please make sure to select **OAuth client ID**.

![](/assets/img/googlesheet/googlesheet-credential-tab.png)

Once done, you will be redirected to **Create Client ID** page. If you get message like **To create an OAuth client ID, you must set a product name on the consent screen** click on *Configure Consent Screen* button. Otherwise this step can be skipped.

![](/assets/img/googlesheet/googlesheet-configure-consent-screen.png)

Enter the name of your app in the Name field and then **Save**. The rest of the fields may be skipped.

![](/assets/img/googlesheet/googlesheet-product-name-save.png)

It will now ask you to set **Application Type** having multiple options like "Web Applications", "Android" etc. Select **Web Application**.

In the **Authorized Redirect URIs** section add "https://developers.google.com/oauthplayground" if it is not already there.

![](/assets/img/googlesheet/googlesheet-web-application.png)

Once done, click on the *Create* button and it will create **Client ID** and **Secret Key** for you.

![](/assets/img/googlesheet/googlesheet-oauth-client.png)