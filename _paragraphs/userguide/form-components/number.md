---
title: Number
book: userguide
chapter: form-components
slug: number
weight: 140
---

Number fields should be used whenever a field should be limited to a type of number.

![](/assets/img/number-display.png)

#### Label

The label for this field that will appear next to it.

#### Placeholder

The placeholder text that will appear when this field is empty.

#### Increment (Step)

If set, the number field will be required to be an increment of this number. For example, if Increment is set to 5, possible values would be 0, 5, 10, 15, etc.

#### Prefix

The text to show before a field. An example is '$' for money

#### Suffix

The text to show after a field. An example would be 'lbs' for weight.

#### Custom CSS Class

A custom CSS class to add to this component. You may add multiple class names separated by a space.

#### Multiple Values

If checked, multiple values can be added in this field. The values will appear as an array in the API and an "Add Another" button will be visible on the field.

#### Table View

If checked, this value will show up in the table view of the submissions list.

![](/assets/img/number-validation.png)

#### Required

If checked, the field will be required to have a value.

#### Minumum Value

If a number is entered, then the value input on the form must be greater than or equal to this value.

#### Maximum Value

If a number is entered, then the value input on the form must be less than or equal to this value.

#### Custom Validation

You can use javascript to perform validation on a field. The way to respond is by setting the `valid` variable. If it is set to `true` then the validation passes. If you set it to a string, the validation fails and the validation message is set to whatever the `valid` variable is set to.


In addition, `input` variable is set to the value that has been entered in the field. The `component` variable is set to the definition of the field.


You can also reference other resources and properties for validation. For example, if there is a user resource with a password field, you can use its value with `user.password`

