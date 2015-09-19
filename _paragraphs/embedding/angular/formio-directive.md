---
title: formio Directive
book: userguide
chapter: angular
slug: formio-directive
weight: 20
---
Form.io forms can be embedded direction into your angular application with one line of code. Simply pass in the name of the form to the directive and the formio module will render out the form for you. If you only pass in the form name, a form with default values will be rendered. This is useful for **Creating** new submissions.

```html
<formio src="'https://yourproject.form.io/yourform'"></formio>;
```

### Rendering Submission in Form
You can also render out a form for a previous submission with the values already set in it. This is useful for **Editing** functionality to allow users to edit previous submissions.

```html
<formio src="'https://yourproject.form.io/yourform/submission/[submissionId]'"></formio>
```

### Read-only Submissions in Form
You can provide a ***read-only*** flat to the ```formio``` directive which will tell the form to render as a Read only form where the data is populated but cannot be edited. This is good for Printable form submissions as well as viewing a form submission.

```html
<formio src="'https://yourproject.form.io/yourform/submission/[submissionId]'" read-only=true></formio>
```

#### Attributes

<dl class="dl-horizontal">
    <dt><code>src</code></dt>
    <dd>The URL of the form or form submission to display.</dd>
    <dt><code>formAction</code></dt>
    <dd>The URL of the custom form action to handle submissions. If this attribute is provided, form submissions will be sent to that URL instead of Form.io. This is helpful if you need to pre-process data before sending it to Form.io.</dd>
    <dt><code>form</code></dt>
    <dd>An Object definition of the form to display. This can be used as an alternative to loading form definitions from the <code>src</code> attribute.</dd>
    <dt><code>submission</code></dt>
    <dd>An Object containing submission data to display. This is useful if you have already loaded submission data you wish to display on this form.</dd>
    <dt><code>readOnly</code></dt>
    <dd>Makes form fields read only, which can be useful for <strong>Viewing</strong> submission results.</dd>
</dl>
