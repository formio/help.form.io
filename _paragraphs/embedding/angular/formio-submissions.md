---
title: formioSubmissions Directive
book: userguide
chapter: angular
slug: formio-submissions
weight: 30
---
In addition to forms that create submissions, the `formioSubmissions` directive can embed lists of previous submissions within your application. This is useful for creating lists of items to display within your applications.

```html
<formio-submissions src="[formName]"></formio-submissions>
```

#### Attributes

<dl class="dl-horizontal">
    <dt>`src`</dt>
    <dd>The URL of the form to display the submissions of.</dd>

    <dt>`form`</dt>
    <dd>An Object definition of the form to display. This is helpful if you have already loaded the form that corresponds to the submission data.</dd>

    <dt>`submissions`</dt>
    <dd>An Array of submission data Objects to display. This is helpful if you have already loaded submissions you wish to display.</dd>

    <dt>`perPage`</dt>
    <dd>The number of submissions to list per page.</dd>
</dl>
