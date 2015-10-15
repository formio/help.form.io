---
title: Using the React Module
book: embedding
chapter: react
slug: react-usage
weight: 20
---
Give `Formio` a `src` property and render:

```javascript
var React = require('react');
var Formio = require('react-formio');

// React <= 0.13
React.render(
  <Formio src="https://example.formio/example" />
  , document.getElementById('example')
);

// React >= 0.14
var ReactDOM = require('react-dom');

ReactDOM.render(
  <Formio src="https://example.formio/example" />
  , document.getElementById('example')
);
```

### Props

#### `src` : `string`

The form API source from [form.io](https://www.form.io) or your custom formio server.

See the [Creating a form](http://help.form.io/userguide/#new-form)
for where to set the API Path for your form.

You can also pass in the submission url as the `src` and the form will render with the data populated from the submission.

#### `form` : `object`

An object representing the form. Use this instead of src for custom forms. 

**Note:** `src` will override this property if used.

#### `submission`: `Object`

An object representing the default data for the form.

**Note:** `src` ill override this if a submission url is entered.

#### `onFormSubmit` : `(submission: object)`

A function callback that will be called when a submission is successful.

#### `onFormError` : `(response: object)`

A function callback that will be called when a submisison is unsuccessful.

#### `onFormLoad` : `(form: object)`

A function callback that will be called with a form is finished loading.

#### `onSubmissionLoad` : `(submission: object)`

A function callback that will be called after a submission is loaded.

#### `onElementRender` : `(element: object)`

A function callback that will be called each time a component is rendered.
