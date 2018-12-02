---
title: Form Building
book: intro
weight: 105
chapter: howworks
slug: formbuilding
---
One major capability of Form.io is that it leverages an easy to drag-and-drop form builder to dynamically create the **Forms** and **Resources** for your application.

![](/assets/img/userguide/form-builder.png){: .img-fluid .img-thumbnail }

Our form builder, however, is very special where instead of building an HTML form, it instead generates a JSON schema representation of the form or resource. A very simple example of what a schema looks like is as follows.

``` json
{
  "title": "Person",
  "display": "form",
  "type": "form",
  "name": "person",
  "path": "person",
  "components": [
    {
      "type": "textfield",
      "input": true,
      "inputType": "text",
      "label": "First Name",
      "key": "firstName"
    },
    {
      "type": "textfield",
      "input": true,
      "inputType": "text",
      "label": "Last Name",
      "key": "lastName"
    },
    {
      "type": "email",
      "key": "email",
      "label": "Email",
      "inputType": "email",
      "input": true
    },
    {
      "input": true,
      "label": "Submit",
      "key": "submit",
      "action": "submit",
      "type": "button"
    }
  ]
}
```

Here is a [Codepen demonstration](http://codepen.io/travist/pen/rjdebX/) of this JSON schema building that should help provide some working examples of how this functions.

<p data-height="600" data-theme-id="0" data-slug-hash="rjdebX" data-default-tab="result" data-user="travist" data-embed-version="2" data-pen-title="Form.io Form Building and Rendering" class="codepen">See the Pen <a href="http://codepen.io/travist/pen/rjdebX/">Form.io Form Building and Rendering</a> by Travis Tidwell (<a href="http://codepen.io/travist">@travist</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

By creating this schema, this form is now capable of being dynamically rendered within the Serverless application (using Angular, React, etc), but is also used to automatically generate the REST API to support this form using the same JSON schema. This API can be viewed as follows.

![](/assets/img/userguide/person-api.png){: .img-fluid .img-thumbnail }


