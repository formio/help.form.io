---
title: Form Translation
book: developer
section: info
chapter: angular
slug: form-translation
weight: 80
---

You can translate your **&lt;<span class="text-primary">form</span>.<span class="text-secondary">io</span>&gt;** forms by wrapping [Angular-Translate](https://github.com/angular-translate/angular-translate) in your application.

There are a two ways of achieving this.

1. You can call

```
$translateProvider.translation('en', {
  'Original String': 'Translated String'
});
```

This will register a new language to the translation provider. The Original String is the string within the form that you want to translate. It could be the field label, placeholder or dropdown value. You can include multiple strings in the language definition.

2. You can include the translations in external files with https://www.npmjs.com/package/angular-translate-loader-static-files or other loaders.

From then on, use angular-translates language switching capability and the form will translate itself.
