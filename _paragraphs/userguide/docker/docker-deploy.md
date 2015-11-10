---
title: Deploying
book: userguide
chapter: docker
slug: docker-deploy
weight: 40
---
Use our [formio-cli](https://github.com/formio/formio-cli) tool to deploy to the docker server. To install this, you will need [Node.js](https://nodejs.org/en/download/) installed.

Then type the following command on the command line.
```npm install -g formio-cli```

Now you can use the formio command to deploy a project from one server to another server.

Examples:
```
// A project without a server is implied from https://form.io
formio deploy myproject http://myproject.localhost:3000

// Projects can be specified with a subdomain.
formio deploy https://myproject.form.io http://myproject.localhost:3000

// Projects can also be referred to with their project id which will need to be looked up.
formio deploy https://form.io/project/{projectId} http://localhost:3000/project/{projectId}
```

Each server will require authentication so you will be asked twice, once for the source server and once for the destination server. These can also be specified with --src-username, --src-password, --dst-username, --dst-password.