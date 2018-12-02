---
title: Add OAuth Button to Form
book: integrations
chapter: oauth
slug: button
weight: 20
---
If you are using Remote Authentication you do not need to modify the register form, you can just do this on the login form.

Edit your User Login Form and drag a new button component onto the form.

![](/assets/img/integrationsoauth/button.png){: .img-fluid .img-thumbnail }

Be sure to select OAuth for the button action. You will not be able to assign the OAuth action later if it is not an OAuth action.

Ensure that **Disable on Form Invalid** is not checked.

*Save* and then *Save the Form*

Repeat this step for the *User Register Form* (But you may change the label to suit. For example: *Register with Github*).
