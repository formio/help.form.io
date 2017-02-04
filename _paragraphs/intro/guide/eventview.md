---
title: Event View
book: intro
weight: 700
chapter: guide
layout: chapter
slug: eventview
---
We can now alter the View page for our Event to show the information for that event, as well as have the form on the page for the normal Users to register for the event. We can do this by overriding the **view** template within the **Event.js** resource provider.

![](/assets/img/userguide/eventview.png)

Now, inside of the **view.html** page, we can create our custom template for our Event as well as render the Event Registration form within that view. Like this...

```
<div class="row">
  <div class="col col-sm-6">
    <div class="panel panel-primary">
      <div class="panel-heading">
        <h3 class="panel-title">Event Information</h3>
      </div>
      <ul class="list-group">
        <li class="list-group-item"><strong>Title:</strong> {{ event.resource.data.title }}</li>
        <li class="list-group-item"><strong>Description:</strong> {{ event.resource.data.description }}</li>
        <li class="list-group-item"><strong>Date:</strong> {{ event.resource.data.date }}</li>
      </ul>
    </div>
  </div>
  <div class="col col-sm-6">
    <div class="panel panel-success">
      <div class="panel-heading">
        <h3 class="panel-title">Event Registration</h3>
      </div>
      <div class="panel-body">
        <formio src="eventRegisterForm" submission="submission" hide-components="hideComponents"></formio>
      </div>
    </div>
  </div>
</div>
```

This produces the following result...

![](/assets/img/userguide/eventviewpage.png)

While this is great, we still have a problem. We need to default the **Event** field to the event within context, as well as default the **User** fields to the user who is logged in. We can accomplish this within the view controller of our Resource, which can be found within the **Event.js** resource provider we edited previously. This time, we will add a **view** controller.

In this controller, we will do three things.

  - Default the **Event** field to the event in context.
  - Default the **User** field to the logged in user.
  - Hide these two fields so that they do not confuse the person using the form.

Here is the code that does this. Take note of the comments which will help understand what code is doing what. Also, ignore the "..." since those are just there for brevity.

```
angular.module('formioAppBasic')
  .provider('EventResource', function() {
    return {
      ...
      ...
      controllers: {

        // The view controller is executed when the Event "view" page is shown.
        view: ['$scope', '$rootScope', function($scope, $rootScope) {

          // Default the submission object (which is passed to the <formio> directive).
          $scope.submission = {data: {}};

          // This variable is passed to the <formio> directive which will hide the following compoennts.
          $scope.hideComponents = ['event', 'user'];

          // Register when the Event object is loaded into context.
          $scope.event.loadSubmissionPromise.then(function(event) {

            // Default the submission object to select the correct Event.
            $scope.submission.data.event = event;
          });

          // whenReady is a promise that is triggered when the logged in user has been loaded.
          $rootScope.whenReady.then(function() {

            // Default the user object to the logged in user.
            $scope.submission.data.user = $rootScope.user;
          });
        }],
      ...
      ...
      }
    };
  });
```

After we have made this change, we now have what we are looking for!

![](/assets/img/userguide/eventviewgood.png)

We now have a full working Event Management system, which even allows for other users to create an account and Register for this event. We hope that this walkthrough guide provides you a solid footing on building your next Serverless application on Form.io!

If you would like to download the code behind this application, then go to <a class="btn btn-primary" href="https://github.com/formio/formio-app-eventmanager">Event Manager Github Page</a>. You can also bootstrap this application by typing the following command.

```
  npm install -g formio-cli
  formio bootstrap formio/formio-app-eventmanager
```

