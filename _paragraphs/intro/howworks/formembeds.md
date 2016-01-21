---
title: Form Embedding
book: intro
weight: 201
chapter: howworks
slug: formembeds
---
The most simple explanation of form.io is that it is a form creation and embedding platform. It is different than most form systems however in that forms are not embedded with iframes. Instead, forms are rendered using a front end library such as angular or react and connected to a backend API to handle the data submissions. 

After building a form with the drag and drop form builder, forms are embedded in an application or directly on a website. The form definitions themselves are actually json objects that define what fields should be on a form, what types of validations should occur, and where the data should submit to. Each form will have a URL associated with it that points to the json object definition of the form. This is how it is embedded.

Before forms can be embedded, the ```ngFormio``` library and all of its dependencies need to be included on the page and an angular application needs to be created.

There are typically two cases where form embeds occur. The first is in a non-angular website or application and the second is in an existing angular application. Let's take a look at how to set each up to be ready to embed <form.io> forms. 

#### Website or New Angular Application Setup

When embedding a form in a non existing angular website or application, the easiest way to do it is to include the ```formio-full.js``` file. This file can be found at [https://github.com/formio/ngFormio/tree/develop/dist](https://github.com/formio/ngFormio/tree/develop/dist). 

Either download this file and include it locally or use a CDN by adding this somewhere in the body of the page.

```
<script src="https://cdn.rawgit.com/formio/ngFormio/develop/dist/formio-full.min.js"></script>
```

Next, you will need to create an angular application and add ```formio``` as an included module. Add this below the include tag.
```
<script type="text/javascript">
  var app = angular.module('formApp', ['formio']);
</script>
```

Finally, add the app to the web page by adding the following code:

```
<div ng-app="formApp" class="well">
  <!-- Ths is where to embed forms -->
</div>
```

Now load the web page in the browser and the formio library with all of its depenencies will be loaded, an angular application will be created and embedded on the page.

Here is a jsfiddle of a simple embed.

<iframe width="100%" height="300" src="//jsfiddle.net/randallknutson/nk6nuw6z/embedded/result,js,html,resources" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

#### Existing Angular Application Setup

If you already have an angular application and want to add form.io forms to your application, follow the instructions in this section. This is more advanced and will outline the requirements without making assumptions about how your application is being built.

First you will need to include the [https://github.com/formio/ngFormio](https://github.com/formio/ngFormio) library in your application. You can do this with bower by ```bower install formio``` or manually downloading the files.

Additionally you will need to add all of the ngFormio dependencies. These are listed in the ```bower.json``` file within the repo and currently consist of the following:

 - angular
 - angular-sanitize
 - angular-bootstrap
 - angular-moment
 - angular-ui-mask
 - angular-ui-select
 - bootstrap
 - bootstrap-ui-datetime-picker
 - ng-file-upload
 - signature_pad
 - ui-select
 
You'll need to load all of those dependencies into your project and add ```<script>``` tags for them so they are included in the app. You can do this with bower and wiredep or another way as you prefer. For examples on how to do this, check out our demo apps at [https://github.com/formio?utf8=%E2%9C%93&query=formio-app-](https://github.com/formio?utf8=%E2%9C%93&query=formio-app-).
 
Next, add ```formio``` module to your app definition. For example.

```
app.module('MyAwesomeApp', [
  'one-module', 
  'two-module', 
  'formio'
]);
```

Once the formio library is loaded on the page and added as a dependency in the angular app you are ready to add form embeds within your application.

#### Doing the form embed

Lets take a look at an embed code.

```<formio src="'https://myapp.form.io/user/register'">```

The ```<formio>``` HTML tag works very much like an ```<img>``` tag, but instead of providing the source to the image in the ```src``` attribute, you provide the API url to the form within Form.io. Here is an example of what the path may look like without a variable.

```<formio src="'https://myapp.form.io/user/register'"></formio>```

This does a couple of things...

  - Dynamically renders the form provided the JSON schema from the API.
  - Automatically hooks up the I/O for the form to Form.io to provide **Actions** and **Submissions** when the form is submitted.
  
Notice how there is a double quote with a single quote inside it for the src. This is so that angular.js knows the value is a string. It is also possible to set it to a scope variable like this where ```$scope.userRegisterForm = 'https://myapp.form.io/user/register';``` is set in a controller.

```<formio src="userRegisterForm"></formio>```

For more information on how to embed forms in an application or directly into a website go to [Angular Embedding](/api/#angular/).