---
title: Email Token - Portal
book: tutorials
section: walkthroughs
chapter: authentication
slug: portal-email-reset
weight: 90
---
It's time to add the portal configuration for handling the password reset function. Start by creating two blank forms,
a `Reset Mailer` form which will accept an email address and then send the user a temp token via url, and a `Reset Auth`
form which will have 2 password fields that will update the current users system credentials.

![Portal Password Reset Config](/assets/img/tutorials/walkthroughs/authentication/reset-mailer-01.png){: .img-fluid .img-thumbnail }

Starting with the mailer add an email component and make sure the API key is set to `email`.

![Portal Password Reset Config](/assets/img/tutorials/walkthroughs/authentication/reset-mailer-02.png){: .img-fluid .img-thumbnail }

Save the form and head over to the `Actions` Tab.

![Portal Password Reset Config](/assets/img/tutorials/walkthroughs/authentication/reset-mailer-03.png){: .img-fluid .img-thumbnail }

Create a new email action that will control sending a reset password link inside the email's body to our Mailtrap service.
We create a temp token via the following notation: `[[token(data.email=user)]]`.

![Portal Password Reset Config](/assets/img/tutorials/walkthroughs/authentication/reset-mailer-04.png){: .img-fluid .img-thumbnail }

Save your form action.

![Portal Password Reset Config](/assets/img/tutorials/walkthroughs/authentication/reset-mailer-05.png){: .img-fluid .img-thumbnail }

Test the form with a user that already exists in the system.

![Portal Password Reset Config](/assets/img/tutorials/walkthroughs/authentication/reset-mailer-06.png){: .img-fluid .img-thumbnail }

Mailtrap should receive and email with a link to the application with an auth token included in the url parameters.
At this point in time the app isn't configured to handle our new route, `/auth/reset`

![Portal Password Reset Config](/assets/img/tutorials/walkthroughs/authentication/reset-mailer-07.png){: .img-fluid .img-thumbnail }
