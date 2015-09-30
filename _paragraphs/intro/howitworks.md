---
title: How it works
book: intro
weight: 11
chapter: welcome
slug: formio-how
---
  - If we take a look at the ToDo application within your favorite IDE, and then open up the ```dist/views/user/register.html``` template, you will see the following.

    ![](/assets/img/intro/formio-app-edit.png)

This ```<formio>``` HTML tag works very much like an ```<img>``` tag, but instead of providing the source to the image in the ```src``` attribute, you provide the API url to the form within Form.io. Here is an example of what the path may look like without a variable.

    <formio src="'https://myapp.form.io/user/register'"></formio>

This does a couple of things...

  - Dynamically renders the form provided the JSON schema from the API.
  - Automatically hooks up the I/O for the form to Form.io to provide **Actions** and **Submissions** when the form is submitted.

To better illustrate how this works, let's modify our application to include a custom form.

  - To start we will simply create a new form in Form.io called **Contact Form**

    ![](/assets/img/intro/formio-new-form.png)
    ![](/assets/img/intro/formio-contact-form.png)

  - We now need to change the **Permissions** of the form to allow **Anonymous** submissions.

    ![](/assets/img/intro/contact-perms.png)

  - After you save the permissions, let's now copy the API URL.

    ![](/assets/img/intro/formio-copy-url.png)

  - And paste it in place of the ```userRegisterForm``` variable like so...

    ![](/assets/img/intro/formio-embed-contact.png)

  - You should now be able to refresh your application and see the following.

    ![](/assets/img/intro/embed-contact.png)