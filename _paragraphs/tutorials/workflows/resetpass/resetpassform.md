---
title: Reset Password Form
book: tutorials
section: workflows
chapter: resetpass
slug: resetpassform
weight: 1
---
Before we complete the workflow from the application perspective, we will first need to create a new form within Form.io that will serve as the **Password Reset** form. This can be accomplished by creating the following form.

![](/assets/img/tutorials/workflows/resetpass/resetpassform.png){: .img-fluid .img-thumbnail }

The **Verify Password** field has a custom validation configured with the following rule.

```
valid = (input == '{{ password }}') ? true : 'Passwords must match';
```

Once you save this form, go ahead and remove the **Save Submission** action since we are not using this form to save any data.

![](/assets/img/tutorials/workflows/resetpass/resetpassactions.png){: .img-fluid .img-thumbnail }

You don't need to worry about setting up Access permissions since we are not really using this form for submission, but rather to render the form in the application.

We can now add this form to our application within the `/src/config.js` file as follows.

```
angular.module('formioApp').constant('AppConfig', {
  appUrl: APP_URL,
  apiUrl: API_URL,
  forms: {
    userLoginForm: APP_URL + '/user/login',
    sendResetPassword: APP_URL + '/sendreset',
    resetPassForm: APP_URL + '/resetpass'
  },
  resources: {
    employee: {
      form: APP_URL + '/employee',
      resource: 'EmployeeResource'
    }
  }
});
```

We are now ready to handle the token response from email.
