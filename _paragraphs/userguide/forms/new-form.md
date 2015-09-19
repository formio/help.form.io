---
title: Creating a Form
book: userguide
chapter: forms
slug: new-form
weight: 10
---

Forms can be created from the Project View page. Get to this page by clicking on the Project name on the My Projects page or clicking the **View** tab at the top right of the page.

At the bottom of the list of Forms, click the **New Form** button to begin creating a Form.

![](/assets/img/new-form.png)

#### Title

Enter a title for your Form. This will help you identify it later.

#### Name

This is the machine name for your Form. It can only contain alphanumeric characters and should be camel cased where this first word is lower cased and each subsequent word starts with a capital letter. A name will be automatically generated for you but you can change it if you want. The Name field will be used when embedding the Form into your application.

#### API Path

The API Path is the endpoint for accessing the Form and Form submissions. Choose the endpoint you'd like to use.

#### Adding Form Components

Drag and Drop Form components on to your Form. See [Form Components](#form-components) for more information on types of components and how to configure them.

#### Advanced Settings

Enter any advanced settings in the advanced settings section. Currently there is only one setting and that is **custom submission URL**. Saving a URL in this setting will **send submissions to that URL** instead of **&lt;<span class="text-primary">form</span>.<span class="text-secondary">io</span>&gt;**. This is helpful if you want to handle the Form submissions with your own service or if you wish to pre-process the data before sending it to **&lt;<span class="text-primary">form</span>.<span class="text-secondary">io</span>&gt;**. Use this only if you know what you are doing.
