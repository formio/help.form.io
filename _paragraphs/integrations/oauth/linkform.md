---
title: Create a Link Form
book: integrations
chapter: oauth
slug: linkform
weight: 40
---
At this point, your project is completely set up to use OAuth authentication! Once you embed the User Register and User Login forms in your application, users will be able to use the OAuth provider you configured to login. For information on how to embed forms into your application, see [Application Embedding](/developer/info/angular/).

If you want to let users authenticate with both a traditional username-password pair or an OAuth provider, then one extra step is necessary to allow users who created an account with a username and password to link their existing account with an OAuth provider.

Create an OAuth Link form in your project.
Edit the default Submit button to be an OAuth button with the settings below:

![](/assets/img/oauth/project-oauth-link-button.png){: .img-fluid .img-thumbnail }

Click *Create Form*
Click on the *Actions* tab and add a new OAuth Action with the settings below:

![](/assets/img/oauth/project-link-oauth-action-edit.png){: .img-fluid .img-thumbnail }

Click *Submit*
Next embed this form somewhere in your application where only authenticated users can access it, like a user settings page.
You will need some custom logic to hide the form for users who have already logged in. Specifically, you must check if the user has an `externalIds` entry for your provider. Here is some sample code that will check if the user has been linked with GitHub using the [formio.js](https://github.com/formio/formio.js) library:

```js
var isLinkedToGithub = false;

Formio.currentUser().then(function(user) {

    if(!user) {
        return;
    }

    user.externalIds.forEach(function(id) {
        if(id.type === 'github') {
            isLinkedToGithub = true;
        }
    });

    if(isLinkedToGithub) {
        // Hide form here
    }
});
```
