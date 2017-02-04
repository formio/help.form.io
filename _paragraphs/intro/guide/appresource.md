---
title: Application Resources
book: intro
weight: 500
chapter: guide
layout: chapter
slug: eventresource
---
Now that you have a running application, you will need to register the **Event** Resource into the *FormioResourceProvider*. [Here are some docs explaining that provider in more detail](https://github.com/formio/ngFormioHelper/wiki/FormioResource-Provider).

We can register our **event** resource in our app pretty easily by adding an entry into the *resources* schema within the `/src/config.js` file as follows. We will also go ahead and add our **register** form as well into the **forms** section since we will need that later. Our ```/src/config.js``` file should look like the following.

`/src/config.js`

<small>
```
angular.module('formioAppBasic').constant('AppConfig', {
  appUrl: APP_URL,
  apiUrl: API_URL,
  forms: {
    userForm: APP_URL + '/user',
    userLoginForm: APP_URL + '/user/login',
    userRegisterForm: APP_URL + '/user/register',
    eventRegisterForm: APP_URL + '/register'
  },
  resources: {
    user: {
      form: APP_URL + '/user',
      resource: 'UserResource'
    },
    event: {
      form: APP_URL + '/event',
      resource: 'EventResource'
    }
  }
});
```
</small>

You will then copy the `/src/app/resources/User.js` file, rename it to **Event.js**, and paste it right next to User. You will then open up that file and rename the "UserResource" to "EventResource" like so.

![](/assets/img/userguide/eventcode.png)

Next, you will need to add a menu item to show the **Event** management system. You can do this by editing the top menu in `/src/index.html`.

```/src/index.html```

```
  <ul class="nav navbar-nav">
    <li ng-class="{'active': isActive('home')}"><a ui-sref="home">Home</a></li>
    <li ng-class="{'active': isActive('event')}"><a ui-sref="eventIndex()">Events</a></li>
  </ul>
```

You now have a complete Event management system!

![](/assets/img/userguide/eventindex.png)

Let's add our Registration form!
