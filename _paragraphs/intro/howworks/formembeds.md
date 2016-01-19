---
title: Form Embedding
book: intro
weight: 201
chapter: howworks
slug: formembeds
---
The most simple explanation of form.io is that it is a form creation and embedding platform. It is different than most form systems however in that forms are not embedded with iframes. Instead, forms are rendered using a front end library such as angular or react and connected to a backend API to handle the data submissions. 

After building a form with the drag and drop form builder, forms are embedded in an application or directly on a website. The form definitions themselves are actually json objects that define what fields should be on a form, what types of validations should occur, and where the data should submit to. Each form will have a URL associated with it that points to the json object definition of the form. This is how it is embedded.

Lets take a look at an embed code.

```<formio src="'https://myapp.form.io/user/register'">```

The ```<formio>``` HTML tag works very much like an ```<img>``` tag, but instead of providing the source to the image in the ```src``` attribute, you provide the API url to the form within Form.io. Here is an example of what the path may look like without a variable.

```<formio src="'https://myapp.form.io/user/register'"></formio>```

This does a couple of things...

  - Dynamically renders the form provided the JSON schema from the API.
  - Automatically hooks up the I/O for the form to Form.io to provide **Actions** and **Submissions** when the form is submitted.
  
Notice how there is a double quote with a single quote inside it for the src. This is so that angular.js knows the value is a string. It is also possible to set it to a scope variable like this where ```$scope.userRegisterForm = 'https://myapp.form.io/user/register';``` is set in a controller.

```<formio src="userRegisterForm"></formio>```

Here is a working jsfiddle of the simplest way to do an embed.
<iframe width="100%" height="400" src="//jsfiddle.net/randallknutson/nk6nuw6z/embedded/result,js,html/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

For more information on how to embed forms in an application or directly into a website go to [Angular Embedding](/api/#angular/).
