---
title: Email Action
book: userguide
chapter: actions
slug: action-email
weight: 30
---
The email action allows sending an email when an event occurs on a form.

![36 email settings pt 1](https://cloud.githubusercontent.com/assets/13321142/13097235/303076be-d4e5-11e5-8ebc-3ad18f190eed.png){: .img-fluid .img-thumbnail }

#### Handler

The handler determines when the email will be sent. Currently there are two options. Before and After are the two options. If you select both, it will run twice, once before and once after the methods selected.

#### Method

When to run this action. Select which system events will trigger this action.

#### Transport

Select which email transport to use. These need to be configured in your project settings. Transports will not be available for selection if you haven't configured them.

#### From

Enter the from email address for the emails.

#### To

Enter the email addresses to send to. You can use fields from the form by using <code>&#123;&#123; data.email &#125;&#125;</code> where the field name is email.

#### Subject

The subject of the email. You may use fields from the form using <code>&#123;&#123; data.fieldname &#125;&#125;</code>

#### Message

The message in the email. You may use fields from the form using <code>&#123;&#123; data.fieldname &#125;&#125;</code>

#### Attach Submission Files

Check this if you would like to attach uploaded files from the file component to the email.


#### Attach PDF Files

Check this if you would like to attach a PDF of the submission to the email. This will count toward your PDF Submission count for every email sent.

<p class="note">If you are remotely deployed, please set the BASE_URL=https://yourdomain.com to match the API server’s domain protocol and domain name for the formio-enterprise server</p>


### Nunjucks Templating
All of the email fields are sent through a templating engine called [Nunjucks](https://mozilla.github.io/nunjucks/). It is recommended that you read through the documentation of this templating language to understand how it can be utilized to produce very complex templates for your emails using form data. This documentation can be found @ [https://mozilla.github.io/nunjucks/templating.html](https://mozilla.github.io/nunjucks/templating.html). You can use the following variables which are provided to each template.

<table class="table table-bordered table-striped">
  <tr>
    <th>data</th>
    <td>The submission data which maps to the data object of the submission. Example: <code>&#123;&#123; data.firstName &#125;&#125;</code> would map to the data provided in the "First Name" field if one is provided in your form.</td>
  </tr>
  <tr>
    <th>id</th>
    <td>The ID of the submission being submitted.</td>
  </tr>
  <tr>
    <th><code>&#123;&#123; data.[RESOURCE]Obj &#125;&#125;</code></th>
    <td>Because all of the nested resources will only show their "template" data, every nested resource also has an object property assigned to the data to give you access to the full resource object assigned to that submission. For example, if you have a <strong>Customer</strong> resource field assigned to an <strong>Order</strong> resource, and you sent an email from the order. <code>&#123;&#123; data.customer &#125;&#125;</code> would only show the templated customer, however <code>&#123;&#123; data.customerObj &#125;&#125;</code> would contain the full customer object. In this case, you could type <code>&#123;&#123; data.customerObj.data.email &#125;&#125;</code> to get the customers email address within the template.</td>
  </tr>
  <tr>
    <th>content</th>
    <td>This is the content within the Mail message section that you wish to inject within a template. This is useful if you wish to have a common template that all your emails use, and then use the "message" portion to construct the content within that template using <code>&#123;&#123; content &#125;&#125;</code></td>
  </tr>
  <tr>
    <th>form</th>
    <td>The form object that this email is being sent from. <code>&#123;&#123; form.components &#125;&#125;</code> would provide you with all the components within the form.</td>
  </tr>
  <tr>
    <th>components</th>
    <td>A flattened list of form components. Example, <code>&#123;&#123; components.firstName.label &#125;&#125;</code> would print out the First Name component.</td>
  </tr>
  <tr>
    <th>owner</th>
    <td>The user who owns the form.</td>
  </tr>
  <tr>
    <th>req</th>
    <td>This is a stripped down request object that contains the following parameters.
      <table class="table table-bordered">
        <tr>
          <th>user</th>
          <td>The currently logged in user object. Example:  <code>&#123;&#123; req.user.data.email &#125;&#125;</code> would print out the users email address.</td>
        </tr>
        <tr>
          <th>params</th>
          <td>The request parameters. For example, for url https://myproject.form.io/myform, <code>&#123;&#123; req.params.formId &#125;&#125;</code> would be the Id of that form</td>
        </tr>
        <tr>
          <th>token</th>
          <td>The JWT token of the user submitting the form.</td>
        </tr>
        <tr>
          <th>query</th>
          <td>The request query. For example, for url https://myproject.form.io/myform?testparam=1, <code>&#123;&#123; req.query.testparam &#125;&#125;</code> would be 1</td>
        </tr>
      </table>
    </td>
  </tr>
  <tr>
    <th>res</th>
    <td>A stripped down response object that contains the following parameters..
      <table class="table table-bordered">
        <tr>
          <th>token</th>
          <td>The decoded token object of the logged in user.</td>
        </tr>
      </table>
    </td>
  </tr>
  <tr>
    <th>mail</th>
    <td>The current mail object being sent. Example <code>&#123;&#123; mail.to &#125;&#125;</code> would contain the email address who the message is being sent to, which contains the following parameters.
      <table class="table table-bordered">
        <tr>
          <th>transport</th>
          <td>The transport protocol used to send the email.</td>
        </tr>
        <tr>
          <th>from</th>
          <td>Who this email is being sent from.</td>
        </tr>
        <tr>
          <th>emails</th>
          <td>An array of emails that are set to receive the email.</td>
        </tr>
        <tr>
          <th>subject</th>
          <td>The subject of the email.</td>
        </tr>
        <tr>
          <th>message</th>
          <td>The message of the email.</td>
        </tr>
      </table>

    </td>
  </tr>
</table>

#### Nunjucks Filters
In addition to the core filters provided by Nunjucks, the following additional filters are also included for use within Emails.

<table class="table table-bordered table-striped">
  <tr>
    <th><code>date</code></th>
    <td>Prints out a date value as a readible date. See <a href="https://github.com/e-picas/nunjucks-date-filter">Nunjucks Date Filter</a> for detailed documentation. Example <code>&#123;&#123; created | date("YYYY") &#125;&#125;</code></td>
  </tr>
</table>

#### Nunjucks Macros
In addition to template variables, we also provide a number of macros that can be used to easily render form submission information into your emails. These are as follows.

<table class="table table-bordered table-striped">
  <tr>
    <th><code>&#123;&#123; table(form.components, title) &#125;&#125;</code></th>
    <td>Prints out a nested table of the form submission.</td>
  </tr>
  <tr>
    <th><code>&#123;&#123; submission(data, components) &#125;&#125;</code></th>
    <td>Prints out a flat submission data table.</td>
  </tr>
  <tr>
    <th><code>&#123;&#123; value(key) &#125;&#125;</code></th>
    <td>Prints out a readible value for a submission of a certain field. Example <code>&#123;&#123; value('birthday') &#125;&#125;</code></td>
  </tr>
  <tr>
    <th><code>&#123;&#123; label(key) &#125;&#125;</code></th>
    <td>Prints out the configured label for a certain field. Example <code>&#123;&#123; label('birthday') &#125;&#125;</code></td>
  </tr>
</table>
