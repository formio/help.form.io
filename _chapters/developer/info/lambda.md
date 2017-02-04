---
title: Developer Info
subtitle: AWS Lambda
book: developer
section: info
weight: 60
chapter: lambda
layout: chapter
---
There are many cases when you need to perform administrative tasks within your {{ site.formio }} project, but do not wish to expose
the permissions necessary for updates to the users of your application. The most common example
of this is for Subscription based applications. Let's suppose that you wish to allow your users to sign up for subscriptions
within your application, and based on them paying the fee, their account should be promoted in some way. Either through
assigning a role to that user, or by assigning a value within a resource they do not have permissions to update. Since the
user is logged into their account when the subscription is made, you need a way to perform an administrative update to the
project (give them more access), but cannot expose that API to the user who is logged into the app.

For this example, [AWS Lambda](https://aws.amazon.com/lambda) provides a very robust way to create a Proxy method which
the application uses to perform the validation of the request (like through your payment processor) and then subsequently
perform administrative API requests into the {{ site.formio }} project. There is a lot of documents on the web that provide detail
on how to configure and utilize AWS Lambda, so below is some example Node.js code that can be placed within your Lambda
function which will perform an administrative update to a record based on a user based authenticated request.

***Example Lambda Code to Update a User via Admin privileges from a users JWT Token***

```
'use strict';
const https = require('https');

// Enter your Form.io project API key here, which will provide AWS Lambda requests
// admin privilages.
let apiKey = '--- YOUR FORM.IO PROJECT API KEY ---';

// The lambda event execution context.
exports.handler = (event, context, callback) => {

    // The user will make a request to Lambda and provide his/her JWT Token
    // We will now use the "current" endpoint within our project to determine the
    // full user object from that token.
    const requestUser = https.request({
        hostname: 'examples.form.io',
        path: '/current',
        method: 'GET',
        headers: {
            'x-jwt-token': event.jwtToken
        }
    }, (requestUserResponse) => {
        let user = '';
        requestUserResponse.setEncoding('utf8');
        requestUserResponse.on('data', (chunk) => user += chunk);
        requestUserResponse.on('end', () => {

            // We now have the full user object. Parse it as a JSON object.
            user = JSON.parse(user);
            console.log(user);

            // Here is where you could do something to validate the user...
            // Such as, send a request to payment processor to validate payment
            // token, etc.

            // Say that this user is now valid.
            user.data.valid = true;

            // Now perform a PUT reqeust to update the user record as an administrator.
            // We will use the x-token header which utilizes the Project API key to perform
            // the update.
            const updateUser = https.request({
                hostname: 'examples.form.io',
                path: '/user/submission/' + user._id,
                method: 'PUT',
                headers: {
                    'x-token': apiKey,
                    'Content-Type' : 'application/json'
                }
            }, (updateUserResponse) => {

                // The user is now updated and valid.
                callback(null, user);
            });
            updateUser.on('error', callback);
            updateUser.end(JSON.stringify(user));
        });
    });
    requestUser.on('error', callback);
    requestUser.end();
};
```

After you have the Lambda function created, you now just need to hook that up to the **AWS API Gateway** to create a
serverless API proxy into your {{ site.formio }} account.

There are many applications for this capability, but this illustrates an example on how **AWS Lambda** can be used as an
API Proxy into {{ site.formio }}.
