---
title: Building the Application
book: intro
weight: 200
chapter: appdev
slug: buildingapp
---
Once you get your application project started, you are now ready to start building. If you started with one of the **Form.io Application Templates**, then the first thing you will want to do is clone it on your local machine and then start the process of building the application.

To do this, you will need [Node.js](https://nodejs.org) installed. See the [nodejs installation page](https://nodejs.org/en/) for information on how to do this. We recommend installing the latest **LTS** version of Node on your machine.

You will also need git, a source code manager. Many operating systems come with git pre-installed. If you don't have it already, you can get it at [https://git-scm.com/](https://git-scm.com/).

Once you have node and git installed, you are ready to copy down the application repository and make customizations.

The Preview window has the URL of the template repo used for the preview. Copy that URL and do a git clone. For example:

```shell
    git clone git@github.com:formio/formio-app-todo.git
```

Inside the ```/src/config.js``` file you will need to set the APP_URL which says where your project is on form.io. This is the url at the top of your project page or it can be found on the Preview page.

```javascript
    var APP_URL = 'https://todo.form.io';
```

Then run the following commands which will download all dependencies and start a local server.

```shell
    npm install -g gulp
    npm install
    gulp serve
```

You can now make any modifications to the application you need and preview them locally on your computer. Form modifications are still done on form.io. For a detailed example of how to build a real application, we recommend taking a look at the [30 minute guide](/intro/guide/) which provides a complete walkthrough of creating a new application on Form.io.
