---
title: Deploying
book: userguide
chapter: docker
slug: docker-deploy
weight: 60
---
Use our [formio-cli](https://github.com/formio/formio-cli) tool to deploy to the docker server. To install this, you will need [Node.js](https://nodejs.org/en/download/) installed.

Then type the following command on the command line.

    npm install -g formio-cli

Now you can use the formio command to deploy a project from one server to another server.

    formio deploy https://myproject.form.io http://myproject.localhost:3000

Each server will require authentication so you will be asked twice, once for the source server and once for the destination server.
