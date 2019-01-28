---
title: Component Validation
book: userguide
chapter: form-validation
slug: component-validation
weight: 203
---

The Validation tab allows you to set and configure client side and server side validation on your field.

#### Required
If checked, the field will be required to have a value upon submission.

#### Unique
If checked, this field will be enforced as unique for this form. Submissions will be checked to see if an existing value matches. This validation is currently server side only.

#### Minimum/Maximum Length
The Minimum/Maximum number of characters required to be entered for this field. The Min/Max length for a Number component will validate against the value, not the character length.

#### Regular Expression Pattern
The regular expression pattern test that the field value must pass before the form can be submitted. In this example, validation will trigger if the field value is not 4-8 characters long and have at least 1 numeric digit. 

#### Custom Error Message
Custom error message that will display if any error occurs for this field.

#### Custom Validation
Add your own custom validation using JavaScript or JSON logic.









