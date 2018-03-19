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

![](/assets/img/intro/formio-create.png)

The modal window appears will prompt you to name the project, give it a description, change the framework, and even import an existing project JSON. 
 
### Application Templates
An **Application Template** (also referred to as a Project Template) provides the blueprint for creating a new project which contains pre-configured **Forms**, **Resources**, **Actions**, and **Roles and Permissions** that would support an application using the API's provided by such entities. Each template is provided through a **project.json** file that is attached to each application. An example is the following **[project.json](https://github.com/formio/formio-app-humanresources/blob/master/src/project.json)** file which is used for the [Human Resources Application](https://github.com/formio/formio-app-humanresources) application. This **project.json** file can also be used when creating new empty projects under the ***Upload existing Template*** when creating a new project. Each of the **Project Templates** are intended to serve as a starting point and provide an example on how to quickly get started building a Serverless application on top of the Form.io platform.

You can create a new project by either clicking on one of the existing **Project Templates**, or by clicking on the **Create Project** button.

### Project Configuration
Once inside a new project, there are a few important things to take note of. The two most important of these, is the **Project Settings** as well as the **API Endpoint** url which was created for your project.

![](/assets/img/intro/formio-overview.png)

Additionally each project framework comes equipped an walk through that can help users create a new application. We invite you to explore your **Project Settings** to get an understanding with how your project can be customized specifically for your application.

After you are done exploring, we are now ready to click into the **Resources** section.
