---
title: Email Action
book: userguide
chapter: actions
slug: action-email
weight: 30
---
The email action allows sending an email when an event occurs on a form.

![36 email settings pt 1](https://cloud.githubusercontent.com/assets/13321142/13097235/303076be-d4e5-11e5-8ebc-3ad18f190eed.png)

#### Handler

The handler determines when the email will be sent. Currently there are two options. Before and After are the two options. If you select both, it will run twice, once before and once after the methods selected.

#### Method

When to run this action. Select which system events will trigger this action.

#### Transport

Select which email transport to use. These need to be configured in your project settings. Transports will not be available for selection if you haven't configured them.

#### From

Enter the from email address for the emails.

#### To

Enter the email addresses to send to. You can use fields from the form by using `{{ data.email }}` where the field name is email.

#### Subject

The subject of the email. You may use fields from the form using `{{ data.fieldname }}`

#### Message

The message in the email. You may use fields from the form using `{{ data.fieldname }}`

### Nunjucks Templating
All of the email fields are sent through a templating engine called [Nunjucks](https://mozilla.github.io/nunjucks/). It is recommended that you read through the documentation of this templating language to understand how it can be utilized to produce very complex templates for your emails using form data. This documentation can be found @ [https://mozilla.github.io/nunjucks/templating.html](https://mozilla.github.io/nunjucks/templating.html). You can use the following variables which are provided to each template.

<table class="table table-bordered table-striped">
  <tr>
    <th>data</th>
    <td>The submission data which maps to the data object of the submission. Example: {{ data.firstName }} would map to the data provided in the "First Name" field if one is provided in your form.</td>
  </tr>
  <tr>
    <th>id</th>
    <td>The ID of the submission being submitted.</td>
  </tr>
  <tr>
    <th>{{ data.[RESOURCE]Obj }}</th>
    <td>Because all of the nested resources will only show their "template" data, every nested resource also has an object property assigned to the data to give you access to the full resource object assigned to that submission. For example, if you have a **Customer** resource field assigned to an **Order** resource, and you sent an email from the order. {{ data.customer }} would only show the templated customer, however {{ data.customerObj }} would contain the full customer object. In this case, you could type {{ data.customerObj.data.email }} to get the customers email address within the template.</td>
  </tr>
  <tr>
    <th>req</th>
    <td>This is a stripped down request object that contains the following parameters.
      <table class="table table-bordered">
        <tr>
          <th>user</th>
          <td>The currently logged in user object. Example:  {{ req.user.data.email }} would print out the users email address.</td>
        </tr>
        <tr>
          <th>params</th>
          <td>The request parameters. For example, for url https://myproject.form.io/myform, {{ req.params.formId }} would be the Id of that form</td>
        </tr>
        <tr>
          <th>query</th>
          <td>The request query. For example, for url https://myproject.form.io/myform?testparam=1, {{ req.query.testparam }} would be 1</td>
        </tr>
      </table>
    </td>
  </tr>
  <tr>
    <th>mail</th>
    <td>The current mail object being sent. Example {{ mail.to }} would contain the email address who the message is being sent to.</td>
  </tr>
  <tr>
    <th></th>
  </tr>
</table>

