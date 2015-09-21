---
title: Textfield
book: userguide
chapter: form-components
slug: textfield
weight: 10
---
A textfield can be used for short and general text input. There are options to define input masks and validations, allowing users to mold information into desired formats.

![](/assets/img/textfield-display.png)

#### Label

The name or title for this component.

#### Placeholder

The placeholder text that will appear when this field is empty.

#### Input Mask

An input mask helps the user with input by ensuring a predefined format. For a phone number field, the input mask defaults to (999) 999-9999.

 - 9: numeric
 - a: alphabetical
 - *: alphanumeric

Example telephone mask: (999) 999-9999

See the [jquery.inputmask](https://github.com/RobinHerbots/jquery.inputmask) documentation for more information.

#### Prefix

The text to show before a field. An example is '$' for money

#### Suffix

The text to show after a field. An example would be 'lbs' for weight.

#### Multiple Values

If checked, multiple values can be added in this field. The values will appear as an array in the API and an "Add Another" button will be visible on the field allowing the creation of additional fields for this component. 

#### Unique

If checked, this field will be enforced as unique for this form. Submissions will be checked to see if an existing value matches. This validation is currently server side only.

#### Protected

If checked, this field is for input only. When being queried by the API it will not appear in the properties. You can still see the value on **&lt;<span class="text-primary">form</span>.<span class="text-secondary">io</span>&gt;** by viewing the form submissions.

#### Persistent

If checked, the field will be stored in the database. If you want a field to not save, uncheck this box. This is useful for fields like password validation that shouldn't save.

#### Table View

If checked, this value will show up in the table view of the submissions list.

![](/assets/img/textfield-validation.png)

#### Required

If checked, the field will be required to have a value upon submission.

#### Minimum length

The minimum number of characters required to be entered for this field.

#### Regular Expression Pattern

The regular expression pattern test that the field value must pass before the form can be submitted. See [regex101.com](https://regex101.com) for help with writing regex expressions.

#### Custom Validation

You can use javascript to perform validation on a field. The way to respond is by setting the `valid` variable. If it is set to `true` then the validation passes. If you set it to a string, the validation fails and the validation message is set to whatever the `valid` variable is set to.


In addition, `input` variable is set to the value that has been entered in the field. The `component` variable is set to the definition of the field.


You can also reference other resources and properties for validation. For example, if there is a user resource with a password field, you can use its value with `user.password`

