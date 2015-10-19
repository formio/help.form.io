---
title: OAuth
book: integrations
weight: 1
chapter: oauth
---

OAuth allows you to authenticate with **&lt;<span class="text-primary">form</span>.<span class="text-secondary">io</span>&gt;** using a 3rd party OAuth provider. This is very convenient because users may register new accounts and log in without having to manually enter a new username and password. To get your project working with OAuth, please walk through the following steps. These steps will be using a new project from the Default template, but you may use any project you wish.

### Step 1: Register with OAuth Provider

In order to use OAuth with a provider, you must first register your application with that provider and obtain a Client ID and Client Secret.

#### Registering with GitHub

 - Login to GitHub and visit your [Developer applications settings page](https://github.com/settings/developers).
 - Click *Register new application*.
 - Fill in the Application name, Homepage URL, and Application description with appropriate details about your application. This information is displayed to potential users of your application when they asked to grant permissions to your app.
 - Fill in the **Authorization callback URL** with your application's **hostname**. OAuth will not work unless you enter the same hostname as the one your application is served from. Using `localhost` for running your app locally is acceptable, but make sure the right port is provided.

    ![](/assets/img/oauth/github-app-settings-edit.png)

 - Click *Register application*.
 - Take note of the Client ID and Client Secret. You will need to use them in the next step.

    ![](/assets/img/oauth/github-app-settings-view.png)

#### Registering with Facebook

 - Login to Facebook and visit the [Developer page](https://developers.facebook.com/).
 - Click on *My Apps > Add a New App*.

    ![](/assets/img/oauth/facebook-front-page.png)

 - Click on *Website*.

    ![](/assets/img/oauth/facebook-new-app-type.png)

 - Enter a name for your app and click *Create New Facebook App ID*.

    ![](/assets/img/oauth/facebook-quick-start.png)

 - Select a category for your app and click *Create App ID*.

    ![](/assets/img/oauth/facebook-new-app-id.png)

 - Scroll down and fill in the **Site URL** with your application's **hostname**. OAuth will not work unless you enter the same hostname as the one your application is served from. Using `localhost` for running your app locally is acceptable, but make sure the right port is provided.

    ![](/assets/img/oauth/facebook-new-app-url.png)

 - Click *Next*.
 - Scroll to the top and click *Skip Quick Start*.
 - Take note of the App ID and App Secret (in this guide we will refer to them as Client ID and Client Secret). You will need to use them in the next step.

    ![](/assets/img/oauth/facebook-app-settings-view.png)

<p class="note" markdown="1">Note that your Facebook app is now in development mode and can only be logged into by you. When you are ready to open up OAuth logins to the public, go to the *Status & Review* page and click the toggle button to make your app public.</p>


### Step 2: Save credentials in Project Settings

 - Login to **&lt;<span class="text-primary">form</span>.<span class="text-secondary">io</span>&gt;** and go to the project you wish to use OAuth in.
 - Click on the *Settings* tab.

    ![](/assets/img/oauth/project-page.png)

 - Click on the *OAuth* tab.

    ![](/assets/img/oauth/project-settings-page.png)

 - Click on the OAuth provider you registered with and fill in the Client ID and Client Secret you received in the previous step.

    ![](/assets/img/oauth/project-oauth-settings-page.png)

 - Click *Save Settings*.

### Step 3: Add buttons to Register and Login Forms

 - Go back to your Project page and click the *Edit* button for User Register.

    ![](/assets/img/oauth/project-page-2.png)

 - Drag a new Button component to your form.

 - Set the **Action** to **OAuth** and **uncheck** the **Disable on Form Invalid** checkbox. Use an appropriate label like *Sign-Up with GitHub*.

    ![](/assets/img/oauth/project-oauth-button.png)

<p class="note" markdown="1">In this example we set the Left Icon classes to `fa fa-github` to show the Font Awesome icon. If you would like to use these icons, you must add [Font Awesome](https://fortawesome.github.io/Font-Awesome/) to your application. You are free to use any icon library, however.</p>

 - Click *Save* and then click *Save Form*
 - Repeat this step for the *User Login Form* (But you may change the label to suit. For example: *Sign-In with Github*).

### Step 4: Add OAuth Action to Register and Login Forms

 - Click on the *Actions* tab for the **User Register Form**.
 - Add a new OAuth Action.

    ![](/assets/img/oauth/project-form-actions.png)

 - Fill in the settings as shown below. For more information on what these settings do, see the [OAuth Action](/userguide/#action-oauth) in the User's Guide.

    ![](/assets/img/oauth/project-register-oauth-action-edit.png)

 - Click *Submit*.
 - Go to the *Actions* tab for the **User Login Form**.
 - Add a new OAuth Action.
 - Fill in the settings as shown below:

    ![](/assets/img/oauth/project-login-oauth-action-edit.png)

 - Click *Submit*.

### Step 5: Embed in your application

At this point, your project is completely set up to use OAuth authentication! Once you embed the User Register and User Login forms in your application, users will be able to use the OAuth provider you configured to login. For information on how to embed forms into your application, see [Application Embedding](/embedding).

### Step 6 (optional): Create a Link Form

If you want to let users authenticate with both a traditional username-password pair or an OAuth provider, then one extra step is necessary to allow users who created an account with a username and password to link their existing account with an OAuth provider.

 - Create an OAuth Link form in your project.
 - Edit the default Submit button to be an OAuth button with the settings below:

    ![](/assets/img/oauth/project-oauth-link-button.png)

 - Click *Create Form*
 - Click on the *Actions* tab and add a new OAuth Action with the settings below:

    ![](/assets/img/oauth/project-link-oauth-action-edit.png)

 - Click *Submit*
 - Next embed this form somewhere in your application where only authenticated users can access it, like a user settings page. 
 - You will need some custom logic to hide the form for users who have already logged in. Specifically, you must check if the user has an `externalIds` entry for your provider. Here is some sample code that will check if the user has been linked with GitHub using the [formio.js](https://github.com/formio/formio.js) library:

```javascript
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
