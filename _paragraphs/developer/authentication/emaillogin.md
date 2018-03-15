---
title: Developer Info
subtitle: Login with Email
book: developer
weight: 32
chapter: emaillogin
layout: chapter
---
In addition to providing full authentication capabilities, {{ site.formio }} also provides a very robust method for Automatic Logins via Email. There are many use cases where Email Login is utilized including, but not limited to...

 - Email Registrations (where they must click on a link in their email to register)
 - Email Reset Password

To make this happen, there is a special token that can be added to the message of your email action and templates. This token will generate a special JWT token to log in the person who the email was addressed to. This token is defined as follows.

```
  [[token(data.email=user)]]
```

Which is defined as follows...

```
  [[token(LOOKUP_FIELD=LOOKUP_RESOURCE)]]
```

 - **LOOKUP_FIELD** - This is the field that is used to search for the record we wish to login. This works by taking the value provided in the Email To: Address and searching the resource with that value as that field.
 - **LOOKUP_RESOURCE** - This is the resource to lookup when establishing the token.

***Important Note*** - This will ONLY create a token if the persons email address that is being sent the email is found within the resource.

For example, lets say you have a Resource as ***Customer*** and a field within that resource called ***Email*** you wish to create a token for. Now lets say you wish to send an email to one of your customers to complete their registration via email. This may look like the following.

```
  To:      john@example.com
  From:    no-reply@form.io
  Subject: Register Now
  Message: Click here to complete your registration http://myapp.com/?token=[[token(data.email=customer)]]#register
```

This following email performs the following:

 - Looks up **data.email=john@example.com** within the **customer** Resource.
 - If a record is found, it generates a temporary token and replaces ```[[token(data.email=customer)]]``` with that token.
 - Tells the application to navigate to the ***#register*** state once the authentication has been performed.

This turns this email into something that looks like the following.

```
  To:      john@example.com
  From:    no-reply@form.io
  Subject: Register Now
  Message: Click here to complete your registration http://myapp.com/?token=lkjsdlkjs90980982l3kjlkjslkjsd....#register
```

### Application Changes to handle Email Tokens
Once you have the email being sent, this single sign on URL will direct them to the Serverless application which needs to handle the token. This requires a minor change within your application to accept the token and then reset the ```localStorage``` value with the new token. The {{ site.formio }} library will then take it from there and authenticate all future requests with that token. You can make this change by adding the following to your ***/app/config.js*** file.

```
// Parse query string
var query = {};
location.search.substr(1).split("&").forEach(function(item) {
  query[item.split("=")[0]] = item.split("=")[1] && decodeURIComponent(item.split("=")[1]);
});

// This is what you will need to add to your application.
if (query.token) {
  localStorage.setItem('formioToken', query.token);
  localStorage.removeItem('formioAppUser');
  localStorage.removeItem('formioUser');
  window.history.pushState("", "", location.pathname + location.hash);
}
```

Once you have implemented this, your application should then be able to handle an automatic email authentication into your application.
