---
title: Password Reset - Portal
book: tutorials
section: walkthroughs
chapter: authentication
slug: portal-password-reset
weight: 110
---
Head back over to portal and either enter or create you `Reset Password Form`. In it we will be placing two password
components.

![Portal Password Reset](/assets/img/tutorials/walkthroughs/authentication/reset-password-01.png){: .img-fluid .img-thumbnail }

Inside the `Verify Password` text field, add the following custom validation:

```
valid = (input === data.password) ? true : 'Passwords Must Match';
```

![Portal Password Reset](/assets/img/tutorials/walkthroughs/authentication/reset-password-02.png){: .img-fluid .img-thumbnail }

