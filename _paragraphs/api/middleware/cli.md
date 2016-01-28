---
title: Command Line Binding
book: api
chapter: middleware
slug: cli
weight: 50
---
The easiest way to get started with our Remote Middleware technology is to use our Command Line interface tool to help
establish a websocket connection to the form you are interested in binding to. You can download the Command Line Interface
by typing the folling within your terminal.

    npm install -g formio-cli

Once you have this installed, you will be using the ```bind``` method to create the websocket connection between your terminal
and the remote API platform. The format for the ```bind``` method is as follows.

    formio bind [method] [url] [middleware]

Where the following parameters need to be provided.

  - **[method]** - The HTTP method you wish to bind yourself to. "GET", "PUT", "POST", or "DELETE"
  - **[url]** - The API endpoint for the form you wish to bind.
  - **[middleware]** - The Node.js (javascript) file that contains the middleware you wish to execute.

Once executed, the Command Line Interface will ask you for your credentials of the service to verify that you have the
appropriate permissions to bind to the desired endpoint.

It should be noted, that if you omit the ```middleware``` parameter, that the command line interface will print out the RAW
JSON data to the terminal. This can be used to pipe this data into another application. As an example, lets say we wish to
bind to our "user" resource form as follows.

    formio bind POST https://yourapp.form.io/user

This would then show the following once you created a new User into the resource table.

   ![](/assets/img/formio-bind.png)