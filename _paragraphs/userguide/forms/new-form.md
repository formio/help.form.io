---
title: Creating a Form
book: userguide
chapter: forms
slug: new-form
weight: 10
---

Forms can be created from the Project home page. Get to this page by clicking on the Project name from the User Portal page or clicking the **edit** tab at the top right of the page while within the Project. 

At the bottom of the list of Forms, click the **New Form** button to begin creating a Form.

![7 create form](https://cloud.githubusercontent.com/assets/13321142/13097268/30ad40ae-d4e5-11e5-8de6-833cd4bda0c0.png){: .img-fluid .img-thumbnail }

#### Title

Enter a title for your Form. This will help you identify it later.

#### Name

This is the machine name for your Form. It can only contain alphanumeric characters and will be automatically populate from the title you enter in  camel cased (where the first word is lower cased and each subsequent word starts with a capital letter). Form Names can be changed if you do not wish to carry the Title. The Name field will be used when embedding the Form into your application.

#### API Path

The API Path is the endpoint for accessing the Form and Form submissions. Choose the endpoint you'd like to use.

#### Adding Form Components

Drag and Drop Form components on to your Form. See [Form Components](#form-components) for more information on types of components and how to configure them.

#### Advanced Settings

Enter any settings desired in the advanced settings section. Currently  **custom submission URL** is the only option for Advanced Settings. Saving a URL in this setting will **send submissions to that URL** instead of **&lt;<span class="text-primary">form</span>.<span class="text-secondary">io</span>&gt;**. This is helpful if you want to handle the Form submissions within your own service or if you wish to pre-process the data before sending it to **&lt;<span class="text-primary">form</span>.<span class="text-secondary">io</span>&gt;**. Use this only if you know what you are doing.
