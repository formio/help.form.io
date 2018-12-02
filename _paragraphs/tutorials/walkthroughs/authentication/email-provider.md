---
title: Email Provider
book: tutorials
section: walkthroughs
chapter: authentication
slug: mailtrap
weight: 80
---
At the onset of this walk through, we mentioned that [mailtrap.io](https://mailtrap.io/) would be used to simulate the email process.
Before we configure the password reset logic, let's start with a simple example to make sure our testing email service works.
We will be sending a 'new user' registration email to a hypothetical admin and registry anytime a new user is added to the application.

![Mailtrap](/assets/img/tutorials/walkthroughs/authentication/auth-mailer-01.png){: .img-fluid .img-thumbnail }

Start by creating a new inbox and click the gear or settings icon to under the actions header.

![Mailtrap](/assets/img/tutorials/walkthroughs/authentication/auth-mailer-02.png){: .img-fluid .img-thumbnail }

Taking note of the username and password head over to [portal.form.io](https://portal.form.io/#/) and go to
settings -> integrations -> email providers -> SMTP Settings. Import the relevant information retrieved from Mailtrap
and make sure to click `Save Settings` before proceeding.

![Mailtrap](/assets/img/tutorials/walkthroughs/authentication/auth-mailer-03.png){: .img-fluid .img-thumbnail }

Visiting the `User Resource` `Actions` panel we'll be adding to 2 email actions as mentioned above.

![Mailtrap](/assets/img/tutorials/walkthroughs/authentication/auth-mailer-04.png){: .img-fluid .img-thumbnail }

Here are the settings for the admin notification email.

![Mailtrap](/assets/img/tutorials/walkthroughs/authentication/auth-mailer-05.png){: .img-fluid .img-thumbnail }

And here are the settings for the individual who registered in the app.

![Mailtrap](/assets/img/tutorials/walkthroughs/authentication/auth-mailer-06.png){: .img-fluid .img-thumbnail }

Here is what the complete `Actions` panel looks like after adding both events.

![Mailtrap](/assets/img/tutorials/walkthroughs/authentication/auth-mailer-07.png){: .img-fluid .img-thumbnail }

Visiting the app once again create a new user.

![Mailtrap](/assets/img/tutorials/walkthroughs/authentication/auth-mailer-08.png){: .img-fluid .img-thumbnail }

After submitting the form, going to your Mailtrap inbox should reveal both email captured by the system.

![Mailtrap](/assets/img/tutorials/walkthroughs/authentication/auth-mailer-09.png){: .img-fluid .img-thumbnail }





