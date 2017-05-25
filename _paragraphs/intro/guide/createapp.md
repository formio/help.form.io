---
title: Create an Application
book: intro
weight: 400
chapter: guide
layout: chapter
slug: createeventapp
---
To get started quickly, we recommend using our pre-built templates which provide scaffolding for your application on Form.io. The best one for us to start with is the **[Basic Template](https://github.com/formio/formio-app-basic)** since it just provides User Authentication out of the box, which we can then add the Event management functionality.

To install the **Basic Application** on your local machine, you will need to do the following.

  - Ensure you have [Node.js](https://nodejs.org) installed
  - Install [Gulp](https://gulpjs.com) `npm install gulp-cli -g`
  - Download the ZIP file of the [Basic Application from Github](https://github.com/formio/formio-app-basic/archive/master.zip)
  - Extract the ZIP download and then type the following.

```shell
  npm install
  bower install
```

  - Now open up the file @ `/src/config.js` and change the following line to point to your API like so.

  ![](/assets/img/userguide/appconfig.png)

  - Now run the application by typing.

```shell
  gulp serve
```

  - Now log in as the Admin user you created in a previous step. You can also register new users who will be assigned the role of **Authenticated**.

  ![](/assets/img/userguide/apprun.png)

Now let's bring in our **Events** and **Event Registration** form.
