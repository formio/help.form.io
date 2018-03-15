---
title: Project Setup
book: developer
chapter: cordova
slug: cordova-prepare
weight: 10
---
The first step in generating a Cordova based application is to ensure that you have cloned and built your form.io project. If you are using one of our templates as a starting point this should be fairly straightforward. We'll be using formio-app-todo as a demo for how to do this.
 
First, clone the app and install the required dependencies. You can follow the steps in the portal at Launch->Local App Development.

```bash
git clone git@github.com:formio/formio-app-todo.git
cd formio-app-todo
npm install -g bower
npm install
bower install
```

Next make sure you've created a todo app on form.io and update the config to point to your project url.
 
In the /src/config.js file.

```javscript
var APP_URL = 'https://yourappurl.form.io';
```

You can test out the app by running

```bash
gulp serve
```

Finally, build a deployable version of the app into the **/dist** directory by running.

```bash
gulp build
```

If you are not using one of our templates, use whatever build mechanisms you have set up.
