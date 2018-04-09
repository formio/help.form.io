---
title: Helpful Tools
book: tutorials
section: walkthroughs
chapter: translations
slug: helpful
weight: 70
---

As a quick reference here is a list of some default error message properties. Notice that in above example,
the `required : "{{field}} is required"` message was able to be translated into other languages while preserving
the bracket notation.  

```
{
  "error" : "Please fix the following errors before submitting.",
  "invalid_date" :"{{field}} is not a valid date.",
  "invalid_email" : "{{field}} must be a valid email.",
  "invalid_regex" : "{{field}} does not match the pattern {{regex}}.",
  "mask" : "{{field}} does not match the mask.",
  "max" : "{{field}} cannot be greater than {{max}}.",
  "maxLength" : "{{field}} must be shorter than {{length}} characters.",
  "min" : "{{field}} cannot be less than {{min}}.",
  "minLength" : "{{field}} must be longer than {{length}} characters.",
  "next" : "Next",
  "pattern" : "{{field}} does not match the pattern {{pattern}}",
  "previous" : "Previous",
  "required" : "{{field}} is required"
}
```

For a complete list of all Form.io defaults, please reference the [i18n.json](https://github.com/formio/formio.js/blob/master/src/i18n.js)
file in the [formio.js library](https://github.com/formio/formio.js).