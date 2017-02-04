---
title: Deploying an Application
book: intro
weight: 404
chapter: appdev
slug: deployapp
---
Once finished making modifications to an app, it is time to deploy it to a website. There are two steps to this. Building the app and deploying the ```dist``` folder to a server.

Building the App is relatively straightforward. If you have already set up the tools in the above section for modifying your app you should have Node, Git and Gulp installed. Then run this command.

```
  gulp build
```

This will update the ```/dist``` folder with any changes you have made to the app.

Deploying the app is as simple as copy the contents of the ```/dist``` folder to any server capable of serving files. This can be an Apache, Nginx or other web server. It can also be any other type of CDN such as Amazon S3 or Github pages. There are no special requirements beyond being able to serve files.

Once copied to the server the app should be accessible on the internet. The app will use form.io to manage all of the API and data. If you would like to host your own version of the form.io server, you can either check out the [open source version](https://github.com/formio/formio) or our [docker deployments](/userguide/docker/) for enterprise.
