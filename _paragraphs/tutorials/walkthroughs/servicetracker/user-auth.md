---
title: User Authentication
book: tutorials
section: walkthroughs
chapter: servicetracker
slug: user-auth
weight: 13
---
Now that we have our application intializing, the next step is to establish the User Authentication which will allow our **Dealers**, **Contractors**, and **Admins** to log into the application. To start, you will first need to create the following auth pages.

***/src/views/user/auth.html***

```
  <div class="col-md-8 col-md-offset-2">
    <div class="panel panel-primary">
      <div class="panel-heading" style="border-bottom:0; padding-bottom: 0;">
        <ul class="nav nav-tabs">
          <li role="presentation" ng-class="{active: isActive('auth.login')}"><a ui-sref="auth.login()">Login</a></li>
        </ul>
      </div>
      <div class="panel-body">
        <div class="row">
          <div class="col-lg-12">
            <div ui-view></div>
          </div>
        </div>
      </div>
    </div>
  </div>
```

***/src/views/user/login.html***

```
  <formio src="userLoginForm"></formio>
```
The ```userLoginForm``` is actually a variable on ```$rootScope``` that provides the path to the form. You can also represent this in the following format.

```
  <formio src="'https://myproject.form.io/user/login'"></formio>
```
However, since we have many forms, it is easier to read and manage when all of those paths are defined within AppConfig and then handed to the ```$rootScope``` within the ```index.run.js``` controller.

The code above is one magical piece of Form.io, which allows you to use a single line of code to embed a full working JSON powered form into your application. All of the API is hooked up for you and will execute all of the actions on the backend which includes, for the case of the login form, the **Login** action.

Once we have our Login form in place, we need to register them with another special provider within the ```ngFormioHelper``` called ```FormioAuthProvider```. It is very much recommended to look at the source code of this provider, which can be found @ [https://github.com/formio/ngFormioHelper/blob/master/src/ng-formio-helper.js#L631](https://github.com/formio/ngFormioHelper/blob/master/src/ng-formio-helper.js#L631). To take advantage of this library, you add the following code to your index.config.js.

***/src/app/index.config.js***

```
  /** @ngInject */
  function config(
    toastrConfig,
    FormioProvider,
    FormioAuthProvider,
    AppConfig
  ) {
    // Set the base url for formio.
    FormioProvider.setBaseUrl(AppConfig.apiUrl);
    FormioProvider.setAppUrl(AppConfig.appUrl);

    // Initialize our FormioAuth provider states.
    FormioAuthProvider.setStates('auth.login', 'home');
    FormioAuthProvider.setForceAuth(true);
    FormioAuthProvider.register('login', 'user');
```

  - The ```FormioAuthProvider.setStates``` tells your application which UI Router states you would like to have as both "authenticated" and "anonymous" states. We are configuring it to say, "When they are not logged in, go to the 'auth.login' ui-router state, and when they login, I want them to go to the 'home' state."

  - The ```FormioAuthProvider.setForceAuth``` tells your application that you require users to be authenticated. If they are not, then no matter where they navigate, they will be redirected to the "anonymous" state which was configured using the ```FormioAuthProvider.setStates``` call.

  - The ```FormioAuthProvider.register``` method registers the ui-router path of 'login' within the parent of 'user'. This makes it so that you go to '/user/login' it will show the login form and call the ui-router state of 'user.login'.


The last thing we need to do is initialize the FormioAuth system, which fortunately, is very simple.

***/src/app/index.run.js***

```
  /** @ngInject */
  function runBlock(
    $log,
    $rootScope,
    AppConfig,
    FormioAuth
  ) {
    // Initialize the Form.io authentication system.
    FormioAuth.init();

    // Allow the app to have access to configurations.
    $rootScope.config = AppConfig;

    // Add the forms to the root scope.
    angular.forEach(AppConfig.forms, function(url, form) {
      $rootScope[form] = url;
    });
```
  - The ```FormioAuth.init``` method is used to register all of the items on the ```$rootScope``` that you need within the application.  Things like ```$rootScope.user``` and ```$rootScope.authenticated``` are examples of things that this creates for you, in addition to auto navigating to certain states depending on when the user is logged in or not.

To finish this up, we now just need to create a home page for them to land on when they log in. We can just have a simple landing page for now.

***/src/views/home.html***

```
  <div class="jumbotron bg-info">
    <h2>Welcome to the Service Tracker Application</h2>
    <p>The following applications highlights how you can create an applicatoin with complex nested resource relationships.</p>
  </div>
```

And then we need to just change the UI Router declaration in the ```index.route.js``` file.

***/src/app/index.route.js***

```
  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/?',
        templateUrl: 'views/home.html'
      });

    $urlRouterProvider.otherwise('/');
  }
```

We can now run the following within our Command Prompt to run the application and see User Authentication working!

```
  gulp serve
```

![](/assets/img/tutorials/walkthroughs/servicetracker/user-auth-page.png){: .img-fluid .img-thumbnail }

We are now ready to start registering our Resources!
