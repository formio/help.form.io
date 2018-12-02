---
title: Refresh Token
book: developer
section: integrations
chapter: googledrive
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

Under Step 1 on the left hand side of the page, expand the **Google Sheets API v4** and select **https://www.googleapis.com/auth/spreadsheets** scope and then click **Authorize APIs**.

![](/assets/img/integrations/google/sheets-authorize.png){: .img-fluid .img-thumbnail }

Click **Allow** to authorize the app.

![](/assets/img/integrations/google/sheets-allow.png){: .img-fluid .img-thumbnail }

The above step will generate an **Authorization Code** for you. Be sure that 'Auto-refresh the token before it expires' is checked and then click on *Exchange authorization code for token* button.

![](/assets/img/googlesheet/googlesheet-exchange-authorization.png){: .img-fluid .img-thumbnail }

Your **Refresh Token** should be generated. You will need the refresh token for the next step.

```json
{
  "access_token": "ya29.fwKue996sM2tUwlgASySADFjlsdSDFCcCbHd4gaaEKDUjdJD237o-pF7hhrXvm6MQNbYZq",
  "token_type": "Bearer",
  "expires_in": 3600,
  "refresh_token": "1/GowydzqSDFjdjJjhgoi6kjJSE69mcnO6zK6XiATCKT"
}
```

![](/assets/img/integrations/google/sheets-refresh-token.png){: .img-fluid .img-thumbnail }
