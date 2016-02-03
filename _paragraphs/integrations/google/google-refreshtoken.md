---
title: Refresh Token
book: integrations
chapter: google
slug: google-refreshtoken
weight: 10
---


To create a Refresh Token go to [https://developers.google.com/oauthplayground/](https://developers.google.com/oauthplayground/){:target="_blank"} and sign in using your Google Credentials. Expand the Drive API v3 and select the indicated services and click Authorize APIs. 


![](/assets/img/googlesheet/googlesheet-authorizeapi.png)


Allow all the services.


![](/assets/img/googlesheet/googlesheet-allowservice.png)


To generate a Refresh Token and an Access Token, click on the button 'Exchange authorization code for tokens'. Be sure that 'Auto-refresh the token before it expires' is checked.


![](/assets/img/googlesheet/googlesheet-generaterefreshtoken.png)


Your Refresh Token and Access Token should be generated. You will need the refresh token for the next step.


![](/assets/img/googlesheet/googlesheet-generatedrefreshtoken.png)