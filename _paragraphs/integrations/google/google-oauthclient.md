---
title: OAuth Client
book: integrations
chapter: google
slug: google-oauthclient
weight: 5
---

To get your OAuth token, log in with you google credentials on [Google Developers Console](https://console.developers.google.com/){:target="_blank"} and select 'Use Google API' to enable API, manage API and create credentials. 


![](/assets/img/googlesheet/googlesheet-googleapis.png)


Select 'Drive API'.


![](/assets/img/googlesheet/googlesheet-driveapi.png)


Select the "Credentials" Tab inside the Drive API to create new credentials.  


![](/assets/img/googlesheet/googlesheet-credentialtab.png)


In the Credentials Tab, select the New Credentials with OAuth Client ID that is used to request access to the user data. 


![](/assets/img/googlesheet/googlesheet-newcredential.png)


Select Application Type as Web Application and insert the name of your app in the Name field and then create the credentials.


![](/assets/img/googlesheet/googlesheet-createcredential.png)


You will be presented with the generated OAuth Client in a popup. These credentials are only good for a given time period so we need to set up a refresh token to keep them up to date.


![](/assets/img/googlesheet/googlesheet-oauthclient.png)


You can see all your generated credentials under "Credential" tab if you need to access them again later.


![](/assets/img/googlesheet/googlesheet-generatedcredential.png)