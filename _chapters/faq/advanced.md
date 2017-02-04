---
title: FAQ
subtitle: Advanced Questions
book: faq
weight: 10
chapter: advanced
layout: chapter
---

#### Can I query resource data using my custom fields as parameters?
Form.io offers flexible query capabilities which can be configured to query based on  variables like date parameters. All of the index endpoints use the Resource.js definitions that you can use to get the queries you want. You can look at that here.

https://github.com/travist/resourcejs#filtering-the-results

This directly maps to the submission endpoint found @ https://myproject.form.io/myform/submission.

So, to query data within your submission (if you have a field called "date") you can use the following.

https://myproject.form.io/myform/submission?data.date__gte={{ ISO_DATE_START }}&data.date__lte={{ ISO_DATE_STOP }}

Here is some code examples where we are doing this in an application.

https://github.com/formio/formio-app-expensereport/blob/ec2bed69cc2f43d890d768f72ed4c591b4050cdc/src/app/factories/reloadFormioGrid.js#L18

#### Internalizing Form.io using resource bundle files
For translations we are wrapping https://github.com/angular-translate/angular-translate so the process of setting it up is the same for us.

Here are a couple ways of doing that:

1. You can call
$translateProvider.translation('en', {
  'Original String': 'Translated String'
});

This will register a new language to the translation provider. The Original String is the string within your form that you want to translate. It could be the field label, placeholder or dropdown value. You can include multiple strings in the language definition.

2. You can also include the translations in external files with https://www.npmjs.com/package/angular-translate-loader-static-filesor other loaders.

From then on use angular-translates language switching capability and the form will translate itself.

Creating one time JWT tokens
You can achieve this by creating a user accounts with passwords that only your server knows.  Since you will never send that password to the front end, this is secure since the communication is server-to-server.  You can then authenticate the users using only their email address and a password that only you know. I would actually recommend generating an API Key within your Form.io project settings.

https://monosnap.com/file/CfojMKtmTsWRlgyUZbUl8AmOOey35t

You can then use this key for two purposes... 1.) To make requests to the API as the project owner (who has global admin privileges) and 2.) To serve as the password of all the users you create on the backend.

You can then serve as the authentication proxy for Form.io by simply creating users with that password, and then logging them in using the same password. Here is a gist of what I am talking about.

https://gist.github.com/travist/09c11ac0593f88cd3e9189d7c357c81c

You can then generate a user token that will authenticate them as the user within the User resource (only giving them that role within your project) and then hand that to their browser. That token will then give them only the permissions of the user account you authenticated against.


#### Creating a manual form submission via API
If you want to create submissions manually via API, you can use the following documentation: https://help.form.io/api/#crud
As for updating, we use PUT rather than PATCH; during an update, only the present fields in the payload will modify the underlying submission

url: https://{projectname}.form.io/{resourcename}/submission/{submissionId}
method: put
headers: {
  “content-type”: “application/json"
  "x-jwt-token": <token>
}

// Data sent in the request, as JSON
{
  "data": {
    <form component key>: <form component value>
  }
}

There are some additional fields that can be part of the payload, but this is the core of a submission. Once a submission has been made, more fields will be populated, but you don’t need to include them, as you can’t edit them (with the exception of the owner with permissions). Each component on the form has a unique api key, which will populate one key/value pair in the data object as follows.

{
  “_id": <submission bson id>,
  "form": <form bson id>,
  "data": {
    <form component key 1>: <form component value 1>,
    <form component key 2>: <form component value 2>,
  },
  “created”: <timestamp>,
  “updated”: <timestamp>,
  “owner”: <owner bson id>
}
.


#### Nested Data - Multiple Parents
Form.io allows for nested data that can be utilized from a single or multiple parent data source. Where you would traditionally use a data object, like a SQL Table, you would create a resource within Form.io.

 Example: You have an application that pulls from multiple data sources and is nested within one another.

Order have *Products*
_Company_ have *Products*
Orders have _Companies_

In this example, create following resources: Order(s), Products, and Company. To reference a resource, simply utilize the form builder. You can add the Resource Form component (Listed under special components), which allows you to associate forms and resources as you please, on a per submission basis.

#### Submitting Form Data To External URL:
The easiest way to set this up is to go to the "Advanced Settings" at the bottom of the form when editing it on portal.form.io. From there you can set the "Custom Action URL" which is where the form will submit to. This works well when there is one location a form will submit to.

If you need more flexibility in where the form submits, you can also implement the "formSubmit" event and submit the form wherever you'd like. This would be in the controller that contains the form.

https://help.form.io/api/#formio-events

For example:

$scope.on('formSubmit', function(event, submission) {
  event.preventDefault();
  $http.post(myUrl, submission);
})

1. Authenticate in such a way that when I load the web page (which is already behind a login), pass that login info and make sure that any submissions that occur are done as the currently logged in user.

Make sure you have the latest renderer library @ https://github.com/formio/ngFormio. In  bower.json, you need to remove the "formio" dependency and replace it by typing

bower install --save ng-formio

Once you log in, you should see an item in your localStorage called formioToken.  This contains the JWT token necessary to authenticate with Form.io. You can do this manually or using the Formio api.

To manually send an API request, you just need to provide this token in the header called x-jwt-token.   Here is an example of a manual request using Postman.  http://take.ms/6TWXT

To send using the Formio javascript API, you just need to dependency inject the Formio factory into your Angular.js controller and do the following.

controller(['Formio', function(Formio) {
  (new Formio('https://htxubtrasovaxqp.form.io/user')).saveSubmission({
    data: {
      email: 'test@example.com',
      password: '123testing'
    }
  });
});

The library will automatically include the formio token in the request.


2. Whenever the user comes back to that page, grab the latest or only submission and auto-populated the form.  Then be able to either overwrite or add to the submissions.


To auto-populate the submission into the form, you just need to load the submission object and then provide that to the <formio> directive. Here is some code that would do this within a controller.

controller(['Formio', '$scope', function(Formio, $scope) {
  (new Formio('https://htxubtrasovaxqp.form.io/user/23423423423423')).loadSubmission().then(function(sub) {
    $scope.submission = sub;
  });
});

<formio src="'https://htxubtrasovaxqp.form.io/user'" submission="submission"></formio>



#### Dynamic Field Mappings Within Form-Builder

You can accomplish this with a separate form that has a file upload component along with a DataGrid component that is the Form Key to XML mapping that each user can use to not only load the XML file, but perform the mappings dynamically.

As for extending the Form Builder, you can do this as well by creating overrides using the formioComponentsProvider.register method seen here.

https://github.com/formio/ngFormBuilder/blob/master/src/components/checkbox.js#L5

This allows you to register new components, but also to modify properties of existing components.

#### How are forms rendered using  formio directives? And the View/Edit/Delete tabs?
When using the formio directives, the forms are rendered on the frontend based on the JSON schema generated on the backend. This allows for you to embed the html directive once into the page, and any modifications to the form on Form.io will have the changes reflected, without your intervention. As for the different CRUD operations, you will need to add the tabs yourself (if that’s what you want) but there are two main directives for singular submission work. The formio directive will allow you to create/read/update a submission depending on whether or not a submission object is present, and the formio-delete submission will allow you to delete an individual submission with a confirmation dialogue. For more information on our embed directives, see: https://help.form.io/api/#angular

#### Manipulating DOM After Form Has Rendered
1) Make sure you’re using the correct form load event, its “formLoad” not “formload”. The formLoad event is triggered after the api request has been made, but before the renderer turns the response into the interactive form. If you want to add something to the form, you can manually inject JSON during this event, and the renderer will add it to the form.

2) If you want to add something manually (like permissions, without the user's interaction) you can inject additional submission data using the “formSubmit” event, which is called after the form has been submitted, but before the request is sent to the API server.

#### Binding to XML Document/Populating Data
Load the XML file within jQuery and use its capabilities to map the XML nodes to the form submission data within the form. This allows for auto-population of the form based on XML data entry.

#### Populating Data To a Form
Since we use Angular.js for our forms, populating data within the form is pretty simple. There are two different ways this is done.

Send the complete "submission" url to the form renderer like so.
<formio src="'https://myproject.form.io/myform/submission/:submissionId'"></formio>

Where the submission Id is the numeric Id for the submission. This method will load the submission and the form and populate the form with the submission.

       2. The other option is to pass the form and submission as separate objects within the renderer. This allows you much more granular control over what data you want to include.  That works like this.

         <formio src="'https://myproject/myform'" submission="submission"></formio>

The submission is defined in the controller as follows.

$scope.submission = {data: {
  firstName: 'Travis',
  lastName: 'Tidwell'
}};

This will auto-populate the form fields with the submission data.

#### How to populate Submission data and map to a field (Populating a submitted user email in a field)

<i>For examples purposes, the ToDo application is being used here:</i>

You can do this by setting the submission property of the form. Pass in a controller into the ResourceProvider for the todo resource within your application. For the todo application, the registration for this is within the index.route.js file within the src folder. You will see a line that says FormioResourceProvider.register('todo', AppConfig.forms.todoForm, {. Within here you can add a create controller for the todo resource (when a new todo is being created) and then set the user email on the submission there. Here is a gist. [https://gist.github.com/travist/293063135cf0c58eb78354c95f7a8378]

#### Pre-populated data to a Resource
That is basically how our REST API works, where you can provide a JSON schema to the form endpoint to create the form. Basically, all the Form builder does is generate that JSON schema for you. If you inspect the web network traffic when you save the resource, you should see the payload of what the JSON representation of a form looks like as well as get an idea how you can construct your tool to do it.

#### How to dynamically save the state of a form in a hidden formState field per submission

Add a Hidden field to your form named "form". This will create the form property that we can save the form to.

Then your angular code would look something like this:

<formio form="form" submission="submission">

Inside the controller for your state inject Formio and put:

var formUrl = 'http://myproject.form.io/myform' // Replace the project and form with the correct names.
$scope.submission = {
  data: {
    form: {}
  }
}
var formio = new Formio(formUrl);
formio.loadForm().then(function(form) {
  $scope.form = form;
  $scope.submission.data.form = form;
});

This will load the form definition into a variable that can be used to render the formio tag and places the form definition into the submission data object so it will save with the submission.
