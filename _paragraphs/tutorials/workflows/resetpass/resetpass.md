---
title: Resetting the Password
book: tutorials
section: workflows
chapter: resetpass
slug: resetpass
weight: 2
---
Notice in the previous section, we had the user click on the following link.

```
<a href="{{ data.applicationUrl }}/?token=[[token(data.email=employee)]]#resetpass">Click here to reset your password</a>
```

Within this URL is a HASH parameter to take the user back to the application under the ***resetpass** state. After they click on that link, they will be taken back to the application where that state is triggered, and the token is passed along to the application. The first step is to handle that token within the application so that their user is established. We can do this within the `/src/config.js` file by adding the following code.

```
// Parse query string.
var query = {};
location.search.substr(1).split("&").forEach(function(item) {
  query[item.split("=")[0]] = item.split("=")[1] && decodeURIComponent(item.split("=")[1]);
});

if (query.token) {
  localStorage.setItem('formioToken', query.token);
  localStorage.removeItem('formioAppUser');
  localStorage.removeItem('formioUser');
  window.history.pushState("", "", location.pathname + location.hash);
}
```

This bit of logic looks for the token passed to the application, and then if it is found, set the user to that token, and then reset the url to not show the token anymore. This will make it so your application cleanly goes to the state provided above, while at the same time authenticate the user.  From, here we need to create a state where they land to reset their password, which we can add into the `/src/app/index.route.js` file.

```
$stateProvider
      ...
      ...
      .state('auth.sendreset', {
        url: '/sendreset',
        templateUrl: 'views/user/sendreset.html',
        controller: ['$scope', function($scope) {
          $scope.submitted = false;
          $scope.$on('formSubmission', function(event, submission) {
            $scope.submitted = true;
          });
        }]
      })
      .state('resetpass', {
        url: '/resetpass',
        templateUrl: 'views/user/resetpass.html',
        controller: ['$scope', function($scope) {

        }]
      });
```

We can now create a new template to render the form we added in a previous section, which is as follows.

`/src/views/user/resetpass.html`

```html
<div class="col-md-8 col-md-offset-2">
  <div class="panel panel-default">
    <div class="panel-heading">
      <h3 class="panel-title">Reset Password</h3>
    </div>
    <div class="panel-body">
      <h4>Please provide your password to reset.</h4>
      <formio form="form"></formio>
    </div>
  </div>
</div>
```

Notice that we are not passing the `src` of the form to the `<formio>` directive. The reason for this is because we are not wanting to submit the form that is rendered. By default the `src` parameter will not only render the form, but then also submit to the API once they press submit. By passing the `form` JSON object into the form, we are telling the renderer that we just wish to render the form, which we will then handle the response manually. We can do this within the controller as follows.

```
.state('resetpass', {
    url: '/resetpass',
    templateUrl: 'views/user/resetpass.html',
    controller: ['$scope', 'Formio', '$rootScope', 'AppConfig', function($scope, Formio, $rootScope, AppConfig) {
      $scope.form = null;
      (new Formio(AppConfig.forms.resetPassForm)).loadForm().then(function(form) {
        $scope.form = form;
      });
    }]
  });
```

We now need to handle the submission of the form, which we will then set the `$rootScope.user` object password, and then Save the user back to the API. This can be done like the following.

```
.state('resetpass', {
    url: '/resetpass',
    templateUrl: 'views/user/resetpass.html',
    controller: [
      '$scope',
      '$state',
      'Formio',
      '$rootScope',
      'AppConfig',
      function(
        $scope,
        $state,
        Formio,
        $rootScope,
        AppConfig
    ) {
      $scope.form = null;
      (new Formio(AppConfig.forms.resetPassForm)).loadForm().then(function(form) {
        $scope.form = form;
      });

      // Ensure the user is fully loaded.
      $rootScope.whenReady.then(function() {
        $scope.$on('formSubmission', function(event, submission) {

            // Set the logged in user's password.
            $rootScope.user.data.password = submission.data.password;

            // Now save the user back to the API.
            (new Formio(AppConfig.resources.employee.form)).saveSubmission($rootScope.user).then(function() {

                // Go to the home state after they reset their password.
                $state.go('home');
            });
        });
      });
    }]
  });
```

Now, the user can reset their own password and you can control every aspect of the workflow around it!

If you would like to see a working example of this whole process in action please download the following application.

<a href="https://github.com/formio/formio-app-humanresources" target="_blank" class="btn btn-primary">Download Human Resources Application</a>

