---
title: Select Boxes
book: userguide
chapter: form-components
slug: selectboxes
weight: 35
---

The Check Boxes form component works like the [Radio](#radio) component, but allows the user to check multiple values.

![20 select box](https://cloud.githubusercontent.com/assets/13321142/13097254/3076b7d2-d4e5-11e5-976f-4dbf1863b8ef.png){: .img-fluid .img-thumbnail }

#### Label

The label for this field that will appear next to it.

#### Values

These are the values that will be selected on this field. The Value column is what will be stored in the database and the Label is what is shown to the users.

#### Custom CSS Class

A custom CSS class to add to this component. You may add multiple class names separated by a space.

#### Tab Index

Sets the `tabindex` attribute of this component to override the tab order of the form. See the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex\) on `tabindex` for more information on how it works.

#### Inline Layout

If checked, this field will layout the checkboxes horizontally instead of vertically.

#### Protected

If checked, this field is for input only. When being queried by the API it will not appear in the properties and also should not appear in exported data. You won't be able to see the value on form.io, but it will be stored in database under the hood.

#### Persistent

If checked, the field will be stored in the database. If you want a field to not save, uncheck this box. This is useful for fields like password validation that shouldn't save.

#### Table View

If checked, this value will show up in the table view of the submissions list.

![21 select box vali](https://cloud.githubusercontent.com/assets/13321142/13097252/3071f706-d4e5-11e5-9079-c1946d56c45c.png){: .img-fluid .img-thumbnail }

#### Required

If checked, the field will be required to have at least one box checked. If it is required, you may not need to persist the value as it can be assumed to be checked when a form was submitted or it will not submit.

#### Custom Validation

You can use javascript to perform validation on a field. The way to respond is by setting the `valid` variable. If it is set to `true` then the validation passes. If you set it to a string, the validation fails and the validation message is set to whatever the `valid` variable is set to.


In addition, `input` variable is set to the value that has been entered in the field. The `component` variable is set to the definition of the field.


You can also reference other resources and properties for validation. For example, if there is a user resource with a password field, you can use its value with `user.password`

