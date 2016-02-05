---
title: Refresh Token
book: integrations
chapter: googlesheet
slug: googlesheet-refreshtoken
weight: 10
---

For creating Refresh Token go to at [https://developers.google.com/oauthplayground/](https://developers.google.com/oauthplayground/){:target="_blank"} using Google Credential. 

Step 1 : Click the gear icon in the upper right corner and check the box **labeled Use your own OAuth credentials** if it isn't already checked, then:

* Make sure that:
  * OAuth flow is set to Server-side.
  * Access type is set to Offline (this will ensure you get a refresh token and an access token instead of just an access token). 
* For the OAuth Client ID, enter the Client ID obtained in step 1.
* For the OAuth Client secret, enter the Client secret obtained in step 1.

Step 2: **Select & authorize APIs**, enter the following in the Input your own scopes text box if it's not already there:
**https://www.googleapis.com/auth/adwords**

Step 3: Enable **Drive API v3**

Click on *Authorize APIs* button.
  
![](/assets/img/googlesheet/googlesheet-developers-tool.png)

Click on **Allow** button to allow all selected **Drive API v3** services.

![](/assets/img/googlesheet/googlesheet-allowservice.png)

The above step will generate **Authorization Code** for you. Now, click on *Exchange authorization code for token* button.

![](/assets/img/googlesheet/googlesheet-exchange-authorization.png)

If all goes well, you should see **Refresh Token** generated.

```{
  "access_token": "ya29.fwKue996sM2tUwlgASySADFjlsdSDFCcCbHd4gaaEKDUjdJD237o-pF7hhrXvm6MQNbYZq",
  "token_type": "Bearer",
  "expires_in": 3600,
  "refresh_token": "1/GowydzqSDFjdjJjhgoi6kjJSE69mcnO6zK6XiATCKT"
}```

![](/assets/img/googlesheet/googlesheet-refresh-token.png)