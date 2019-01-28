---
title: Custom
book: userguide
chapter: form-components
slug: custom
weight: 200
---
Custom components allow creating a form field with a custom JSON schema that can be rendered as anything within a frontend application. This is usefully for special or complex form fields that don't already exist in form.io. Using this type, any kind of field can be created.
 
![](/assets/img/custom.png){: .img-fluid .img-thumbnail }
 
To use a custom component, create a JSON definition of the field with the information needed to render it. Create a custom field and paste the JSON object into it. This must be a valid JSON object.

```json
{
  "type": "custom",
  "isNew": true,
  "key": "custom",
  "protected": false,
  "persistent": true
}
```

There are several properties that are required but **you may add any additional properties that you would like**.

##### Type
The type property will be used to select which component to render on the frontend. It cannot be an existing field type.

##### Key
The key field is where the data will be saved to. This must be unique per field. For example, if ```key = 'customers'``` then the value of the field will be saved in ```data.customers```.

##### Persistent
This will determine whether or not the value is saved to the main database. This is useful for using Remote Middleware, verify password fields or sending the data in an action but not saving it. 

##### Protected
This will determine whether or not the field will be visible from the API. If it is a protected field then it will only be writeable but not readable.

#### Rendering

In order to render the custom component, the frontend application must register the component template. This is done in the config step with the formioComponentsProvider.

```
app.config([
  'formioComponentsProvider',
  function (formioComponentsProvider) {
    formioComponentsProvider.register('checkmatrix', {
      title: 'Check Matrix',
      template: 'formio/components/check-matrix.html',
      settings: {}
    });
	}
]);
```

The template will then be used to render the component. In addition, a controller may be added to the template to create more interactive form elements.

This is a working example of a custom component. It is a Matrix checkbox that changes the number of columns and rows based on two other form fields.
 
<iframe width="100%" height="500" src="//jsfiddle.net/randallknutson/zLxhqarh/embedded/result,js,html/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>
