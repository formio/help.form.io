---
title: JavaScript Renderer
book: developer
section: libraries
chapter: javascript
weight: 0
slug: javascript
---
### Installation
To install this library within your application, simply type the following.

```
npm install --save formiojs
```

### Full Documenation
All of the documentation for this library is found on the [Github Wiki Page](https://github.com/formio/formio.js/wiki).

### Example
As a simple example, you can use this library within your application to render a simple form as follows.

```html
<html>
  <head>
    <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'>
    <link rel='stylesheet' href='https://unpkg.com/formiojs@2.3.4/dist/formio.form.min.css'>
    <script src='https://unpkg.com/formiojs@2.3.4/dist/formio.form.min.js'></script>
    <script type='text/javascript'>
      window.onload = function() {
        var form = new FormioForm(document.getElementById('formio'));
        form.src = 'https://examples.form.io/example';
      };
    </script>
  </head>
  <body>
    <div id='formio'></div>
  </body>
</html>
```

This will render a form within your application using plain JavaScript. You can combine all of the available libraries together as follows.

```js
import Formio from 'formiojs';
import FormioUtils from 'formiojs/utils';
import FormioForm from 'formiojs/form';

let formio = new Formio('https://examples.form.io/example';
formio.loadForm().then((form) => {

  // Print out all the components.
  FormioUtils.eachComponent(form.components, (component) => {
    console.log(component);
  });

  // Render the form.
  let form = new FormioForm(document.getElementById('formio');
  form.form = form;
});
```

For full documentation, please go to the [Form.io JavaScript Forms & SDK Wiki Page](https://github.com/formio/formio.js/wiki)