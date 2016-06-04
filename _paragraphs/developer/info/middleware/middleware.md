---
title: Custom Remote Middleware
book: developer
section: info
chapter: middleware
slug: cli
weight: 60
---
Not only can you bind to an API via command line, but you can also execute a middleware file which can gain direct, real-time
access to the requests as they are coming into Form.io. This can be done by creating a Node.js middleware file that has
a similar syntax to Express.js middleware.

For example, let's suppose we wish to dynamically alter a submission as it is being submitted. A good use case for this is when
you wish to alter the emails of your application in a test environment by append ".example.com" to the emails in a submission.
This can be done creating a JavaScript file that takes the submission data, alters it, and then executes a next method when it
is done altering. Here is an example of what this middleware would look like.

<script src="https://gist.github.com/travist/90d64ae2b0bdbec76e10.js"></script>

This file could then be bound to the Form as follows within the command line.

    formio bind POST https://yourapp.form.io/user ./middleware.js

Now when you submit a new submission into that form, this middleware will be executed remotely, and then altered in real-time.

   ![](/assets/img/formio-alter-email.png)

We think it is pretty amazing too.