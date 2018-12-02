---
title: Creating the Application
book: tutorials
section: walkthroughs
chapter: servicetracker
slug: application-create
weight: 8
---
Now that we have our resources structured the way we need them to be, the next step is to build the application that will host these resources in application form. The Service Tracker application has actually already been created and can be found @ [https://github.com/formio/formio-app-servicetracker](https://github.com/formio/formio-app-servicetracker). You can easily see this application in action by going to the **Preview** section, and even clone this locally and get it running by walking through the **Launch** > **Local Development** section.

In this section, however, we will be focused on building this application from scratch so that all of the development pieces are fully documented as well as provide you a good base for creating your own applications on the Form.io platform. To get started, we will be using the [Angular-Gulp Yeoman Generator](https://github.com/Swiip/generator-gulp-angular) to create our base application. To do this, we will create a new folder and then create the scaffolding using Yeoman as follows. Execute the following in your Command Prompt.

```
  mkdir servicetracker
  cd servicetracker
  yo gulp-angular
```

Walk through the Yeoman Generator providing the following configurations.

 - **Which version of Angular do you want?**
    - 1.4.x (stable)
 - **What Angular modules would you like to have?** (press spacebar to deselect)
    - angular-sanitize.js
    - angular-aria.js
 - **Do you need jQuery or perhaps Zepto?**
    - jQuery 2.x (new version, lighter, IE9+)
 - **Would you like to use a REST resource library?**
    -  None, $http is enough!
 - **Would you like to use a router?**
    - UI Router, flexible routing with nested views
 - **Which UI framework do you want?**
    - Bootstrap, the most popular HTML, CSS, and JS framework
 - **How do you want to implement your Bootstrap components?**
    - Angular UI Bootstrap, Bootstrap components written in pure AngularJS by the AngularUI Team
 - **Which CSS preprocessor do you want?**
    - Sass (Node)
 - **Which JS preprocessor do you want?**
    - None, I like to code in standard JavaScript.
 - **Which HTML template engine would you want?**
    - None, I like to code in standard HTML.

This will take several minutes to install. Once it does, you can now run the application by typing the following.

```
  gulp serve
```

Which will show the following.

![](/assets/img/tutorials/walkthroughs/servicetracker/angular-gulp-create.png){: .img-fluid .img-thumbnail }

We can now install all the dependencies we will need to create our Service Tracker applcation.
