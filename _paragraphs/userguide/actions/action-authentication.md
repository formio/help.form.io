---
title: Authentication Action
book: userguide
chapter: actions
slug: action-authentication
weight: 20
---
The authentication action allows you to do user authentication within your application against a User Resource. When a user authenticates, they will be issued a JSON Web Token (JWT) which will authorize access to parts of the system.

![](/assets/img/action-authentication.png){: .img-fluid .img-thumbnail }

#### Resource Association

The resource association will determine how the authentication is handled with the submission. Use **New Resource** for forms like Registration forms. This will create a new submission and perform the authentication against the new resource. This will both create the user account and log them in. Use **Existing Resource** for forms like Login forms where users should be checked against existing submissions.

#### Role

The selected role will be added to all new resources created by the form with this Authentication Action.

#### Username Field

This is the field on the form that contains the username. If there are embedded resources within the form, you can authenticate against that embedded resource instead of the current form.

#### Password Field

This is the field on the form that contains the password.
