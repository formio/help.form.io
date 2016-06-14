---
title: Styling Forms
book: developer
section: info
chapter: angular
slug: styling-angular-forms
weight: 60
---
Since embedding **&lt;<span class="text-primary">form</span>.<span class="text-secondary">io</span>&gt;** forms embeds them directly in your HTML pages instead of using iframes, you can easily add CSS styles to your application to customize form appearances.

Every form component is wrapped in a `<div>` with the class name `form-field-type-{fieldType}`. Use this to style all fields of a certain type. For example, to style only checkbox fields, you may have CSS that looks like this:

```css
.form-field-type-checkbox {
    // Your styles go here...
}
```

The same `<div>` wrapping each form component also is given an id in the form `form-group-{fieldKey}`. The `fieldKey` corresponds to the unique Property Name given to each form component. You can find this in the [API tab](/userguide/#component-api) of the form component settings. Use this id to style a single specific form element. For example, to style a field with the key `fullName`, you may have CSS that looks like this:

```css
#form-group-fullName {
    // Your styles go here...
}
```

Finally, you can configure most components with a [custom CSS class](http://localhost:4000/userguide/#custom-css-class) that will be used when rendering the form. You can specify multiple class names by separating them with single spaces.
