---
title: Form.io Application with Okta SSO
book: integrations
chapter: okta
slug: okta-application
weight: 30
---
Now that we have configured both **Okta** and our **Form.io** project, the last step is to configure our application to accept the token handshake which will provide a single-sign-on between Okta and Form.io. This happens through a series of handshake events that occur within the application that is described below.

 - The user clicks on the application within the Okta Application protal.
 - This sends the user to the Okta Login Interface for them to login.
 - Once they are logged in, they are then redirected to the application with the tokens provided within the URL of the redirect.
 - The application will then take those auth tokens and store them within the local storage of the application for future authentications and allow for "refresh" of the application.
 - The Formio JavaScript SDK will then send the Okta Authentication Token to the Form.io Server to perform a **Token Swap**. This is done by sending a request to the **/current** endpoint with the **Authorization: Bearer** header which provides the Okta authorization token.
 - Now, within the Form.io Server, a request is made to the Okta servers "getinfo" API endpoint to fetch the user information including their groups.
 - From the Project configurations of group to role mappings, a new Form.io token is generated which contains the Form.io Roles that have been mapped to the Form.io Project Roles.
 - This new Form.io JWT token is then sent back to the application within the response of the **/current** API request within the **x-jwt-token** Response headers.
 - This new JWT token is stored as the Form.io token and then all requests operate as they normally do.
 
In order to create a login event, you will need to install our **Formio.js** core library. This can be done either with NPM or directly within your HTML page.

#### Using NPM
In your console, install formiojs library using the following.

```bash
npm install --save formiojs
npm install @okta/okta-auth-js --save
```

You will then need to put the following within your application.

```javascript
import Formio from 'formiojs/Formio';
import OktaAuth from '@okta/okta-auth-js';
```

or

```javascript
const Formio = require('formiojs/Formio');
var OktaAuth = require('@okta/okta-auth-js');
```

#### Within your HTML page
You can also include the Formio SDK within your application by including the following.

```html
<script src="https://ok1static.oktacdn.com/assets/js/sdk/okta-auth-js/1.16.0/okta-auth-js.min.js" type="text/javascript"></script>
<script href="https://unpkg.com/formiojs@3.0.0-rc.11/dist/formio.min.js"></script>
```

#### Creating a Single-Sign-On with Okta.
You can now place the following code as one of the first scripts that is executed within your application.

```javascript
Formio.ssoInit('okta', {
  url: 'https://formio.okta.com',
  clientId: '0oa2bshrAhgqeZb42333',
  redirectUri: 'http://localhost:3002/',
  scopes: ['openid', 'groups', 'profile']
}).then(() => {
  console.log('We are logged in!');
});
```

If you used the NPM method above, you will also want to ensure that you provide the OktaAuth class to the library as follows.

```javascript
Formio.ssoInit('okta', {
  OktaAuth: OktaAuth,
  url: 'https://formio.okta.com',
  clientId: '0oa2bshrAhgqeZb42333',
  redirectUri: 'http://localhost:3002/',
  scopes: ['openid', 'groups', 'profile']
}).then(() => {
  console.log('We are logged in!');
});
```
 
