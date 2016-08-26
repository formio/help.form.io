---
title: Text Area
book: userguide
chapter: form-components
slug: textarea
weight: 100
---
A textarea has the same options as the textfield form component. The difference is that it will be a multi-line input field that allows for longer text.

#### Creating a WYSIWYG Editor
The textarea component can also be used to create a WYSIWYG editor within your application using the famous [CK Editor](http://ckeditor.com/){:target:"_blank"}. This works by enabling a hidden ```wysiwyg``` flag on the textarea component. Currently, there is not a UI to make this change, so this will require you to use our API's to make that change. Using [Postman](https://www.getpostman.com/){:target:"_blank"}, we can first get the form we want to modify as follows.

![](/assets/img/userguide/form-components/wysiwyg-get.png)

You can then copy the ***Body*** of the form, change the URL to a ***PUT*** command, and then paste the body into the payload while changing that paramter to "true" like the following.

![](/assets/img/userguide/form-components/wysiwyg-put.png)

The next thing you will need to do is to add the following libraries to your front-end Angular.js application.

```
bower install --save ng-ckeditor
```

You will then need to add both CKEditor and the ng-CKEditor libraries to the page as follows.

```
<script src="//cdn.ckeditor.com/4.5.8/standard/ckeditor.js"></script>
<script src="./bower_components/ng-ckeditor/ng-ckeditor.js"></script>
```

And then initialize it within your Angular application as follows.

```
angular.module('myApplication', [
    'formio',
    'ngFormioHelper',
    'ngCkeditor'
  ])
```

Once you do this, your TextArea will show up as a WYSIWYG editor!