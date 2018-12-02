---
title: Kickbox
book: integrations
chapter: email
slug: kickbox
weight: 15
---
There are many situations where you need to validate a persons email address in realtime as they fill out the form, and fail the form submission if the email is invalid. A good example use case for this would be at an industry conference where you need to ensure that everyone who signs up at your booth provides a valid email address in order to win that amazing prize drawing. In order to provide this capability, Form.io has teamed up with an amazing email validation service called [Kickbox.io](https://kickbox.io) to provide realtime email validation to the Form.io forms.

#### Getting Started
The first thing you will need to do to enable realtime email validations is to create an account @ [Kickbox.io](https://kickbox.io){:target:"_blank"}. Once you have created an account, you will need to create a new Verify API configuration.

![](/assets/img/integrations/kickbox/kickbox-verify.png){: .img-fluid .img-thumbnail }

Next, you will click on the ***New App*** button, and then provide your application a name and then **Production**. Note: You may want to use Sandbox to perform some tests to ensure it works. The sandbox allows you to use some predetermined email addresses that return certain results for you to test the application. You can find out more about how this works by visiting the [Sandbox API](http://docs.kickbox.io/docs/sandbox-api){:target:"_blank"} documentation.

![](/assets/img/integrations/kickbox/kickbox-newapp.png){: .img-fluid .img-thumbnail }

After you create an application, you will next copy the API Key provided and use it to configure your Form.io Project Settings.

![](/assets/img/integrations/kickbox/kickbox-apikey.png){: .img-fluid .img-thumbnail }

#### Configuring Form.io Project
Once you have your Kickbox.io account, the next thing you will need to do is configure your Form.io Project with the API key provided from Kickbox.io. Follow the steps provided in the following image.

![](/assets/img/integrations/kickbox/kickbox-settings.png){: .img-fluid .img-thumbnail }

Make sure you press ***Save Settings*** when you configure your API Key.

The next step is to create a form that will require Email input. As an example, we will make a simple Contact Us form for our website and include the Email.

![](/assets/img/integrations/kickbox/kickbox-form.png){: .img-fluid .img-thumbnail }

For the ***Email*** component, we will want to make sure we configure the settings under the ***Validation*** tab to enable ***Kickbox*** validation.

![](/assets/img/integrations/kickbox/kickbox-emailcomp.png){: .img-fluid .img-thumbnail }

Now **Save the Form***.

Finally, to ensure that this form can be submitted by Anonyous people, go into the **Access** tab and allow ***Anonymous*** to create their own submissions.

![](/assets/img/integrations/kickbox/kickbox-formperms.png){: .img-fluid .img-thumbnail }

Make sure you press the ***Save Changes*** button to save the new permissions.

You can now test out your form by going to the ***Launch*** section, click on **A Single Form**, and then click on the Launch button next to the Contact Us form.

![](/assets/img/integrations/kickbox/kickbox-launch.png){: .img-fluid .img-thumbnail }

You can now try out the Kickbox validation system by filling out the form and trying to submit an invalid email address. Congrats, you now have real-time email validation!

![](/assets/img/integrations/kickbox/kickbox-liveform.png){: .img-fluid .img-thumbnail }
