---
title: Form.io Service
book: developer
section: libraries
chapter: node
weight: 5
slug: service
---
There are many cases when you will need to interface with the Form.io API from within your own Node.js application. This is why we created the [Form.io Service](https://github.com/formio/formio-service) library. For example, you can do the following to authenticate a user from within your Node.js application.

```
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