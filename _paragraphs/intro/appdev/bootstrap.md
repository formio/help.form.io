---
title: Bootstrap existing Apps
book: intro
weight: 500
chapter: appdev
slug: bootstrap
---
Once you have a project developed, you can now create a mechanism where that app can be rapidly boostrapped into a new deployment. This allows you to build your own **Application Template** and share that within Github for others to deploy. This uses the [Form.io CLI Tool](https://github.com/formio-cli) to download the files from Github, then use the **project.json** export, create that project on Form.io, configure the app to point to the newly generated API, and then serve the application locally. As an example, you can quickly "bootstrap" the [Service Tracker](https://github.com/formio/formio-app-servicetracker) application by typing the following commands in your terminal.

```
  npm install -g formio-cli
  formio bootstrap formio/formio-app-servicetracker
```

In this example, the **formio/formio-app-servicetracker** is the Github domain path for the project @ https://github.com/formio/formio-app-servicetracker. The `formio bootstrap` command downloads the project from Github to your local machine, uses the `/dist/project.json` file to create the project on Form.io, and then assigns the `/dist/config.js` file to point to that generated API. All within one single command.

### Creating your own Application Template
To generate your own application template, you need to do the following.

  - Export your Project within Form.io as a **project.json** file.
  - Include that file within your ```/src``` folder.
  - Create a ```/src/config.template.js``` file which will use the `{{ protocol }}`, `{{ path }}`, and `{{ host }}` settings. See [config.template.js](https://github.com/formio/formio-app-basic/blob/master/src/config.template.js) for an example.
  - Build the project so it creates these files within the ```dist``` folder, and commit that folder in your repo.
  - Add the ```formio``` declaration in your project.json pointing to the root folder. [Here is an example](https://github.com/formio/formio-app-basic/blob/master/package.json#L11)

Once you do this, you should now be able to run the ```formio deploy``` command on your own Github domain to dynamically clone your application!

Congratulations, you are now a Form.io Rockstar!
