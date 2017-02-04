---
title: Event Registration
book: intro
weight: 600
chapter: guide
layout: chapter
slug: eventregister
---
We will now add the **Event Registration** form to the event. Form Management can be brought into the application using the **[FormioFormsProvider](https://github.com/formio/ngFormioHelper/wiki/FormioForms-Provider)**. This is similar to how the *FormioResourceProvider* works, but instead of attaching Resources to our application, we are attaching Forms to Resources. Since we wish to attach the **Event Registration** form to the **Event** Resource, we can provide the following code to achieve this. Please not that the "..." are used for brevity and should not be copied.

```/src/app.js```

```
.config([
  ...
  ...
  'FormioFormsProvider',
  ...
  ...
  function(
    ...
    ...
    FormioFormsProvider,
    ...
    ...
  ) {
    ...
    ...

    // Register all of the resources.
    angular.forEach(AppConfig.resources, function(resource, name) {
      FormioResourceProvider.register(name, resource.form, $injector.get(resource.resource + 'Provider'));
    });

    // Register the Event Registration Form.
    FormioFormsProvider.register('event-register', AppConfig.appUrl, {
      field: [{
        name: 'event',
        stateParam: 'eventId'
      }],
      base: 'event.',
      tag: 'event'
    });
  }
]);
```

We can now navigate to the following url to see the Forms for a specific event, as well as all the submissions within that Event.

```http://localhost:3001/event/[EVENTID]/forms```

You can also view the specific forms by clicking on each form, and then have access to manage all of the submissions within that form for the specific Event.

![](/assets/img/userguide/eventform.png)

Let's now change the Event view page to show the Event inforation with the **Register Form**




