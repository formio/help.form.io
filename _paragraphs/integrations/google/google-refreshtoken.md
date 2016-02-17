---
title: Refresh Token
book: integrations
chapter: google-drive
slug: google-refreshtoken
weight: 10
---


To create a Refresh Token go to [https://developers.google.com/oauthplayground/](https://developers.google.com/oauthplayground/){:target="_blank"} and sign in using your Google Credentials. 

Click the gear icon in the upper right corner and check the box **labeled Use your own OAuth credentials** if it isn't already checked, then:

* Make sure that:
  * OAuth flow is set to Server-side.
  * Access type is set to Offline (this will ensure you get a refresh token and an access token instead of just an access token). 
* For the OAuth Client ID, enter the Client ID obtained above.
* For the OAuth Client secret, enter the Client secret obtained above.

Under Step 1 on the left hand side of the page, expand the **Drive API v3** and select the indicated services and click *Authorize APIs*.

![](/assets/img/googlesheet/googlesheet-developers-tool.png)


Click **Allow** to authorize the app.


![](/assets/img/googlesheet/googlesheet-allowservice.png)

The above step will generate an **Authorization Code** for you. Be sure that 'Auto-refresh the token before it expires' is checked and then click on *Exchange authorization code for token* button.

![](/assets/img/googlesheet/googlesheet-exchange-authorization.png)

Your **Refresh Token** should be generated. You will need the refresh token for the next step.

```
{
  "access_token": "ya29.fwKue996sM2tUwlgASySADFjlsdSDFCcCbHd4gaaEKDUjdJD237o-pF7hhrXvm6MQNbYZq",
  "token_type": "Bearer",
  "expires_in": 3600,
  "refresh_token": "1/GowydzqSDFjdjJjhgoi6kjJSE69mcnO6zK6XiATCKT"
}
```

![](/assets/img/googlesheet/googlesheet-refresh-token.png)