---
title: Sending Reset Password
book: tutorials
section: workflows
chapter: resetpass
slug: sendreset
weight: 0
---
The first step is to present to the user a page within the application to reset their password. In this page, they will see a simple form where they will provide their Email address to then send an email. We can create that form within Form.io by creating a new Form call **Send Reset**. Within this form, we will also add a hidden field which will be the Application URL. This will be useful when adding that to the email template on where to send the user when they click on the Reset Password link. The form we are building will look like the following.

![](/assets/img/tutorials/workflows/resetpass/sendresetform.png){: .img-fluid .img-thumbnail }

Now that you have created this form, you will need add an **Email Action** which will trigger a SSO token for the user to login. For the Message body, we will provide the following.

```
<a href="{{ data.applicationUrl }}/?token=[[token(data.email=employee)]]#resetpass">Click here to reset your password</a>
```

This uses the [Login with Email](/developer/info/emaillogin/) capabilities discussed in the Developer section. Here is what that email action configuration looks like.

![](/assets/img/tutorials/workflows/resetpass/sendresetaction.png){: .img-fluid .img-thumbnail }

We now need to **Save Action**. We will then remove the **Save Submission** action (since we don't really care about saving the reset password events).

![](/assets/img/tutorials/workflows/resetpass/sendresetactions.png){: .img-fluid .img-thumbnail }

Next, we need to ensure that **Anonymous** users can submit this form since they will be logged out when they need to reset their password. We can do this easily within the **Access** section of our form.

![](/assets/img/tutorials/workflows/resetpass/sendresetaccess.png){: .img-fluid .img-thumbnail }

Make sure you press **Save Changes** so that the changes take effect.

Now that we have the form created, we will now add it to our **Human Resources** application. Within your project, in the `/src/config.js` file, we will add the following to the `forms` section.

```
angular.module('formioApp').constant('AppConfig', {
  appUrl: APP_URL,
  apiUrl: API_URL,
  forms: {
    userLoginForm: APP_URL + '/user/login',
    sendResetPassword: APP_URL + '/sendreset'
  },
  resources: {
    employee: {
      form: APP_URL + '/employee',
      resource: 'EmployeeResource'
    }
  }
});
```

We now need to register a state within the **Auth** state that will allow them to reset their password. We can do this within the `/src/app/index.route.js` file as follows. Don't copy the `...` text.

```
    $stateProvider
      ...
      ...
      .state('auth.sendreset', {
        url: '/sendreset',
        templateUrl: 'views/user/sendreset.html',
        controller: ['$scope', function($scope) {
          $scope.submitted = false;
          $scope.submission = {data: {applicationUrl: location.origin}};
          $scope.$on('formSubmission', function(event, submission) {
            $scope.submitted = true;
          });
        }]
      });
```

And then, within our `/src/views/user/sendreset.html` file, we will add the following.

```html
<div class="well" ng-if="!submitted">
  <h3>To reset your password, provide the following...</h3>
  <formio src="sendResetPassword" submission="submission"></formio>
</div>
<div class="well" ng-if="submitted">
  <h4>Thank you! We have sent you an email with a link to reset your password.</h4>
</div>
```

Notice in both the controller, as well as the template, that we are switching the UI so that it shows a confirmation to the user when their password has been reset. This is a nicety that adds to the user experience. You may have also noticed that we are setting the **applicationUrl** of the hidden field within the form. This is so that when the form is submitted, it will include that data along with the submission, which will then get passed along to the email action which will establish the correct callback url to the application.

We now need to add the forgot password link to the Authentication block, which will shift between showing the "Reset Password" link and "Login Link" depending on which state they are in. This will look like the following.

***/src/views/user/auth.html***

```html
<div class="col-md-8 col-md-offset-2">
  <div class="panel panel-default">
    ...
    ...
    ...
    <div class="panel-footer">
      <a ui-sref="auth.sendreset()" ng-if="isActive('auth.login')">Forgot your password? Click here.</a>
      <a ui-sref="auth.login()" ng-if="isActive('auth.sendreset')">Login</a>
    </div>
  </div>
</div>
```

This will now work like the following.

![](/assets/img/tutorials/workflows/resetpass/sendresetapp.png){: .img-fluid .img-thumbnail }

When they put in their email, they will now receive an email to reset their password. Once they click on that link, they will be redirected back to the application with a SSO token attached to the URL. Here we will have the user reset their password.
