---
title: Form Actions
book: intro
weight: 110
chapter: howworks
slug: actions
---
Once a form is submitted by the user, the data is sent to the API server where it is then processed through <strong>Actions</strong>. Everything from Sending Emails, Authentication, and even Saving the submissions in the database are configured through independent actions associated with the Form or Resource. Another way to think about actions, is that they serve as configurable middleware that can be attached to a Form, which perform tasks and data manipulation on the submission payload. Every Form and Resource can have an unlimited amount of Actions attached to them, and every action is sequentially executed in the order they are "stacked".

Here is an example screenshot of the Actions associated with a User Registration form, where we would like to Save their record, Send an email to an administrator of their registration, and then finally Log that user in (generate an auth token) for the application to then process.

![](/assets/img/userguide/formactions.png){: .img-fluid .img-thumbnail }

Here is a list of some actions that can be executed on every Form or Resource.

  - **Email** - Sending an email with the form information either to the person submitting the form or to a project administrator.
  - **Save Submission** - Saves the submission payload to either this form, or forward it along to a Resource
  - **Login** - Authenticate a user by generating a JWT token for the submission payload that was submitted.
  - **Webhook** - Trigger a REST API call to an external system when an action is executed.
  - **Integrations** - We offer a number of integrations that will send the form submission data to 3rd party providers.
  - **SQL Connection** - Connect a form submission to an external SQL database including PostgreSQL, MYSQL, and MSSQL

Find out more about actions in the [Actions Section](/userguide/actions/) of the User's Guide.
