---
title: formioDelete Directive
book: userguide
chapter: angular
slug: formio-delete
weight: 40
---
This directive will show a delete confirmation dialogue and will, on confirmation, delete a form or submission. This directive triggers the `cancel` or a `delete` events depending on user input.

```html
<formio-delete src="'https://yourproject.form.io/yourform/submission/[submission_id]'"></formio-delete>
```

#### Attributes

<dl class="dl-horizontal">
    <dt><code>src</code></dt>
    <dd>The URL of the form or submission to delete.</dd>

    <dt><code>form</code></dt>
    <dd>Alternatively, you can pass in the form definition as an attribute on the formio directive.</dd>

    <dt><code>submission</code></dt>
    <dd>If a submission has already been loaded, it can be passed in as an attribute.</dd>

    <dt><code>form-action</code></dt>
    <dd>The URL of the custom form action to handle delete requests. If this attribute is provided, HTTP DELETE requests will be sent to that URL instead of Form.io. This is helpful if you need to pre-process data before deleting it from Form.io.</dd>

    <dt><code>resource-name</code></dt>
    <dd>The resource name used in the delete dialogue for confirmation. If not provided, it will default to "form" or "submission", depending on the <code>src</code> attribute passed in.</dd>
</dl>
