---
title: Exploring
book: userguide
chapter: docker
slug: docker-explore
weight: 60
---
Once the server is setup, running and has the DNS configured for it, you can start exploring the server.

By default, the main endpoint will respond with the primary project installed on the server. For new installs, this is the formio project. This project is meant to manage "Administrator" level accounts for who can login and manage projects on the server.

```
GET http://localhost:3000
```

Response:

```
[
    {
        "_id":"5751c2df5717292c84f4211c",
        "name":"formio","title":"Formio",
        "description":"The primary project for new installs.",
        "url":"http://localhost:3000/project/5751c2df5717292c84f4211c",
        "alias":"http://formio.localhost:3000"
    }
]
```

Using either the url or alias properties plus "/form" (depending on whether your DNS is set up with subdomains or not), you can view the forms in the primary project.

```
GET http://localhost:3000/project/5751c2df5717292c84f4211c/form
```

Response:

```
[
  {
    "_id":"5751c2e05717292c84f42120",
    "title":"User",
    "type":"resource",
    "name":"user",
    "path":"user",
    "project":"5751c2df5717292c84f4211c",
    "components":[
      {
        "validate":{
          "required":true
        },
        "type":"email",
        "persistent":true,
        "unique":false,
        "protected":false,
        "defaultValue":"",
        "suffix":"",
        "prefix":"",
        "placeholder":"Enter your email address",
        "key":"email",
        "label":"Email",
        "inputType":"email",
        "tableView":true,
        "input":true
      },
      {
        "validate":{
          "required":true
        },
        "type":"password",
        "persistent":true,
        "protected":true,
        "suffix":"",
        "prefix":"",
        "placeholder":"Enter your password",
        "key":"password",
        "label":"Password",
        "inputType":"password",
        "tableView":false,
        "input":true
      },
      {
        "type":"button",
        "theme":"primary",
        "disableOnInvalid":true,
        "action":"submit",
        "block":false,
        "rightIcon":"",
        "leftIcon":"",
        "size":"md",
        "key":"submit",
        "tableView":false,
        "label":"Submit",
        "input":true
      }
    ]
  },
  {
    "_id":"5751c2e05717292c84f42121",
    "title":"User Login",
    "type":"form",
    "name":"userLogin",
    "path":"user/login",
    "project":"5751c2df5717292c84f4211c",
    "components":[
      {
        "validate":{
          "required":true
        },
        "type":"email",
        "persistent":true,
        "unique":false,
        "protected":false,
        "placeholder":"Enter your email address",
        "key":"email",
        "label":"Email",
        "inputType":"email",
        "tableView":true,
        "input":true
      },
      {
        "validate":{
          "required":true
        },
        "type":"password",
        "persistent":true,
        "protected":true,
        "placeholder":"Enter your password",
        "key":"password",
        "label":"Password",
        "inputType":"password",
        "tableView":false,
        "input":true
      },
      {
        "type":"button",
        "theme":"primary",
        "disableOnInvalid":true,
        "action":"submit",
        "block":false,
        "rightIcon":"",
        "leftIcon":"",
        "size":"md",
        "key":"submit",
        "tableView":false,
        "label":"Submit",
        "input":true
      }
    ]
  }
]
```

As we can see from the response by default there are two forms created within the primary project. The first is the User resource and the second is the User Login form. The User Login form allows users to log in and get an access token.

Using the information from these forms you can now log in and get an access token.

The path of the User Login form is "/user/login" so now we can construct the path to log in. Please note that you will need to add "/submission" to access the submissions of a form instead of the form definition itself. Any of the following will work (depending on DNS settings).

```
POST http://localhost:3000/project/5751c2df5717292c84f4211c/form/5751c2e05717292c84f42121/submission
POST http://localhost:3000/project/5751c2df5717292c84f4211c/user/login/submission
POST http://formio.localhost:3000/form/5751c2e05717292c84f42121/submission
POST http://formio.localhost:3000/user/login/submission

Payload:
{
  "data":{
    "email":ADMIN_EMAIL,
    "password":ADMIN_PASS
  }
}
```
(Be sure to set the Content-Type header to "application/json")

Use the same ADMIN_EMAIL and ADMIN_PASS from the installation section above.

Response:

```
{
  "_id": "5751ddbe797c15868646d766",
  "modified": "2016-06-03T19:42:54.771Z",
  "form": "5751c2e05717292c84f42120",
  "data": {
    "email": "test@example.com"
  },
  "created": "2016-06-03T19:42:54.771Z",
  "externalIds": [],
  "access": [],
  "roles": [
    "5751ddbe797c15868646d75e"
  ],
  "owner": null
}
```

In addition, the response will have a "x-jwt-token" header. This is the most important part. In all further requests, if you use the x-jwt-token header with that value it will authenticate you as the admin user. Please note that the token does expire but every request returns a refreshed token.

Now that you have a jwt token, you can fully explore the API as an authenticated user. For example, to see what projects a user has deployed to the server, do this:

```
headers:
x-jwt-token: (very long jwt hash)
GET http://api.localhost:3000/project
```
