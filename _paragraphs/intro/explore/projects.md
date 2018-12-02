---
title: Projects
book: intro
weight: 100
chapter: explore
slug: projects
---
A **Project** can be thought of as an isolated container for all the **Resources**, **Forms**, **Submissions**, **Roles and Permissions**, and **Settings** for a new Application that is being developed.

These Projects can then be shared between other Developers through the use of **Teams** which are also configured on the main dashboard screen. It should be noted, however, that all Projects by default are considered Free-tier or **Basic** functionality, but they each can be upgraded to enable Premium features and more API bandwidth.

To create a new project select any **Framework** option or the **New Project +** tile from within the existing project window.

![](/assets/img/intro/formio-create.png){: .img-fluid .img-thumbnail }

The modal window appears will prompt you to name the project, give it a description, change the framework, and even import an existing project JSON. 
 
### Target Frameworks
The **Target Frameworks** refer to the different software platforms that can be utilized when building an application with Form.io. There are many platforms available and Form.io can even work with frameworks that are not on the list, but the list of available out-of-the-box platforms that we support are as follows.

 - [Angular](https://angular.io) - This is an application platform that is ideal for large Enterprise applications and is based on TypeScript.
 - [React](https://reactjs.org/) - React is known as a high performance, Enterprise grade, application framework that does require more dependencies when constructing entire applications.
 - [Vue](https://vuejs.org/) - An elegant and powerful framework that provides the high performance of React, while also giving many of the application constructs that you would find with Angular.
 - [Aurelia](https://aurelia.io/) - An easy-to-learn and powerful framework that combines many of the great patterns from all of the popular frameworks.
 - [Vanilla](http://vanilla-js.com/) - If you use any legacy framework such as jQuery or any other custom JS library, Form.io works great since it also provides a Vanilla JS renderer and builder.

### Project Configuration
Once inside a new project, there are a few important things to take note of. The first thing that should be noted is the **API Endpoint** for your application.

![](/assets/img/intro/apiendpoint.png){: .img-fluid .img-thumbnail }

This shows that every project within Form.io is actually a full-featured API platform. All interfaces with the Portal @ https://portal.form.io are actually driven by the API's provided by the Project API. This API can be seen by clicking on the API section of your project and inspecting all of the API's provided through the **Forms** and **Resources** within your application.

![](/assets/img/intro/projectapi.png){: .img-fluid .img-thumbnail }

All **Settings** for your project can also be manipulated within the **Settings** section. It should be noted that all settings are Encrypted within the database.

![](/assets/img/intro/projectsettings.png){: .img-fluid .img-thumbnail }

Additionally each project framework comes equipped an walk through that can help users create a new application. We invite you to explore your **Project Settings** to get an understanding with how your project can be customized specifically for your application.

![](/assets/img/intro/formio-overview.png){: .img-fluid .img-thumbnail }

After you are done exploring, we are now ready to click into the **Resources** section.
