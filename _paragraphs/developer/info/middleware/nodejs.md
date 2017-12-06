---
title: Node.js Remote Middleware
book: developer
section: info
chapter: middleware
slug: cli
weight: 60
---
Remote middleware can also be utilized within a Node.js application using the popular module [Primus](http://primus.io){:target="_blank"}. We have
included a handy wrapper for our binding capabilities within our [Form.io Service](https://github.com/formio/formio-service){:target="_blank"} library.
You can include this library within your Node.js application using the following.

    npm install -g formio-service

Once you have this within your application, you can bind to a Form.io form using the following code.

<script src="https://gist.github.com/travist/2eae831b8ca266bbab4f.js"></script>