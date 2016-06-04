---
title: formioSubmissions Directive
book: developer
section: info
chapter: angular
slug: formio-submissions
weight: 30
---
In addition to forms that create submissions, the `formioSubmissions` directive can embed lists of previous submissions within your application. This is useful for creating lists of items to display within your applications.

```html
<formio-submissions src="'https://yourproject.form.io/yourform'"></formio-submissions>
```

#### Attributes

<dl class="dl-horizontal">
    <dt><code>src</code></dt>
    <dd>The URL of the form to display the submissions of.</dd>

    <dt><code>form</code></dt>
    <dd>An Object definition of the form to display. This is helpful if you have already loaded the form that corresponds to the submission data.</dd>

    <dt><code>submissions</code></dt>
    <dd>An Array of submission data Objects to display. This is helpful if you have already loaded submissions you wish to display.</dd>

    <dt><code>per-page</code></dt>
    <dd>The number of submissions to list per page.</dd>
</dl>
