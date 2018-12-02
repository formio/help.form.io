---
title: Token Swap
book: integrations
chapter: oauth
slug: tokenswap
weight: 45
---
One type of application design is where form.io forms are embedded in an existing application that already has OAuth authentication built into it. In this type of application, the OAuth token can be exchanged for a form.io token to enable all future interactions with form.io to be authenticated using the new form.io token.

To do this, you should have an existing Bearer (or other) authorization token from the OAuth provider. You also need to set up the OpenID and OpenID Connnect settings in your project.

Then, instantiate the Formio library with your project url and call the currentUser endpoint with your authorization header.

```js
var authorization = 'Bearer: ABC123XYZ789';

var formio = new Formio('https://myproject.form.io');
formio.currentUser({
  header: {
    authorization: authorization
  }
});
```

Form.io will use the authorization token to make a request to the OAuth endpoint, receive your user information and create a new form.io token that is passed back to the form.io library and used on subsequent requests.
