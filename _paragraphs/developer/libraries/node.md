---
title: Node.js
book: developer
chapter: libraries
weight: 500
slug: node
---
### Form.io Server
The core API engine behind the Form.io platform is an Open Source API engine that supports the forms, submissions, and access permissions around the data within that platform. You can read through how to get started by visiting the [formio/formio](https://github.com/formio/formio) Github page.

<a href="https://github.com/formio/formio" class="btn btn-primary">Click here to learn more</a>

### Integration Library
There are many cases when you will need to interface with the Form.io API from within your own Node.js application. This is why we created the [Form.io Service](https://github.com/formio/formio-service) library. For example, you can do the following to authenticate a user from within your Node.js application.

```js
var formio = require('formio-service')();
var Form = formio.Form;

// First authenticate.
formio.authenticate('test@example.com', 'password').then(function() {

    // Create a new form instance.
    var form = new Form('https://myapp.form.io/user');

    // Iterate through all the submissions.
    form.eachSubmission(function(submission) {

        // Console log the submissions.
        console.log(submission);
    });
});
```

<a href="https://github.com/formio/formio-service" class="btn btn-primary">Go here to learn more</a>

### Webhook Receiver
Form.io has the ability to fire off Webhooks whenever a form is submitted, but that webhook must still be received by a REST interface. That is why we build the [Webhook Receiver](https://github.com/formio/formio-webhook-reciever) which provides a starting point to having a receiver capture the webhook to then be integrated into your own backend services.

<a href="https://github.com/formio/formio-webhook-receiver" class="btn btn-primary">Click here to learn more</a>

### Node Red
Form.io also has integration with the amazing [Node Red](http://nodered.org) platform. With this installed within Node Red, you will now have two nodes to pick from.

  - formio save (storage): This will save a new form submission.
  - formio get (storage): This will retrieve a list of submissions based on a query provided in msg.query.
  - formio in (input): This will receive a Form.io form webhook to use forms as input.

To learn more about this, please go to [Form.io Node Red](https://github.com/formio/formio-red) Github page.
