---
title: AngularJS Integration
book: integrations
chapter: okta
slug: okta-angularjs
weight: 40
---
For AngularJS applications, you can use our helper library @ https://github.com/formio/ngFormioHelper to add Okta SSO into your application.

```
bower install --save ng-formio-helper
```

You will then need to add the ```FormioAuth``` provider to your application as follows. You will also need to make sure you that you set the ```$locationProvider``` to **html5Mode** as follows.

```javascript
angular
    .module('myApp', [
      'ngFormioHelper'
    ])
    .config([
      '$locationProvider',
      function($locationProvider) {
        $locationProvider.html5Mode(true);
      }
    ])
    .run([
       'FormioAuth',
       function(
         FormioAuth
       ) {
         // Initialize the FormioAuth handler.
         FormioAuth.init({
           oauth: {
             type: 'okta',
             options: {
               url: 'https://formio.okta.com',
               clientId: '0oa2bshrAhgqeZb42333',
               redirectUri: 'http://localhost:3002/',
               scopes: ['openid', 'groups', 'profile']
             }
           }
         });
       }
     ]);
```

 
