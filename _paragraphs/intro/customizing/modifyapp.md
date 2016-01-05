---
title: Modifying the App
book: intro
weight: 402
chapter: customizing
slug: modifyapp
---
At some point in development you will reach a point where you will want to change more than just the contents of a form. This could be changing the CSS of the application or adding an entirely new section to the app. This is when it is time to clone the application repo locally and switch to local development of the app.

To do this, you will need node.js installed. See the [nodejs installation page](https://nodejs.org/en/) for information on how to do this.

You will also need git, a source code manager. Many operating systems come with git pre-installed. If you don't have it already, you can get it at [https://git-scm.com/](https://git-scm.com/).

Once you have node and git installed, you are ready to copy down the application repository and make customizations.

The Preview window has the URL of the template repo used for the preview. Copy that URL and do a git clone. For example:

```git clone git@github.com:formio/formio-app-todo.git```

Inside the ```/src/config.js``` file you will need to set the APP_URL which says where your project is on form.io. This is the url at the top of your project page or it can be found on the Preview page.

```var APP_URL = 'https://todo.form.io';```

Then run the following commands which will download all dependencies and start a local server.

```npm install -g gulp```
```npm install```
```gulp serve```

You can now make any modifications to the application you need and preview them locally on your computer. Form modifications are still done on form.io.