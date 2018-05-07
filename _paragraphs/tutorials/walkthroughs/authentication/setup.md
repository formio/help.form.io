---
title: Application Setup
book: tutorials
section: walkthroughs
chapter: authentication
slug: setup
weight: 30
---
To get started, you will need to make sure that you have the following accounts and tools installed on your machine.

 - A Form.io Account - visit [portal.form.io](https://portal.form.io) to register
 - An installation of Node.js - visit [node.org](https://nodejs.org/en/) for download instructions, we recommend using the latest LTS version
 
While not required, we will be using the Angular CLI to build this demo application. Please reference [cli.angular.io](https://cli.angular.io/) for additional support. 
To install and create the application's development environment, please run the following commands as an `administrator` from within either the Mac Terminal or Windows PowerShell:

```
npm install -g @angular/cli
ng new authentication --style=scss
cd authentication
npm install
ng serve
```

If everything is configured correctly, a default Angular 2+ application should be live at `localhost:4200`.





