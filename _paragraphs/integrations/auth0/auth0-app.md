---
title: Auth0 + Form.io integration
book: integrations
chapter: auth0
slug: auth0-app
weight: 11
---
Now that you have a rule setup, the next step is to create an application and integrate Form.io within that application. For this example, we will start with an application provided by Auth0 found @ [https://auth0.com/docs/quickstart/spa/angularjs/01-login](https://auth0.com/docs/quickstart/spa/angularjs/01-login).

Once you download this application, you will need to install all dependencies by typing.

```bash
bower install
```

You will then need to install the [formio.js](https://github.com/formio/formiojs) library by typing the following.

```bash
npm install formiojs
```

And then provide the following within the ***/index.html*** file.

```html
<script type="text/javascript" src="node_modules/formiojs/dist/formio.min.js"></script>
```

Once you do that, you can then put the following within the ***/auth0-variables.js*** file.

```javascript
var FORMIO_PROJECT = 'https://yourproject.form.io';
var FORMIO_API = 'https://api.form.io';
```

Now, within the ***/app.js*** file, we will need to initialize the Formio library with the following.

```javascript
function config($stateProvider, lockProvider, $urlRouterProvider) {
   Formio.setBaseUrl(FORMIO_API);
   Formio.setAppurl(FORMIO_PROJECT);

   ...
   ...
}
```

And finally, within the ***/components/auth/auth.service.js*** file, we will need to alter the service to set the Form.io JWT token with the one that we provided to the Auth0 Rule.

```javascript
function authService(lock, authManager) {

    function login() {
      lock.show();
    }

    // Logging out just requires removing the user's
    // id_token and profile
    function logout() {
      localStorage.removeItem('id_token');
      authManager.unauthenticate();
      Formio.setUser(null);
    }

    // Set up the logic for when a user authenticates
    // This method is called from app.run.js
    function registerAuthenticationListener() {
      lock.on('authenticated', function (authResult) {
        localStorage.setItem('id_token', authResult.idToken);
        lock.getProfile(authResult.idToken, function (error, profile) {
          Formio.setToken(profile.user_metadata.formio.token);
          authManager.authenticate();
        });
      });
    }

    return {
      login: login,
      logout: logout,
      registerAuthenticationListener: registerAuthenticationListener
    }
  }
```

Now, when you log into Auth0, you will automatically connect to a Form.io User within your application creating a seamless authentication between the two platforms!
