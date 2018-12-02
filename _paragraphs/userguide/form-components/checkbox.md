---
title: Check Box
book: userguide
chapter: form-components
slug: checkbox
weight: 120
---

A check box is a boolean value input field. It will either be on or off.

![18 checkbox](https://cloud.githubusercontent.com/assets/13321142/13097256/307b6b92-d4e5-11e5-91ec-2c92e185e315.png){: .img-fluid .img-thumbnail }

#### Label

The label for this field that will appear next to it.

#### Custom CSS Class

A custom CSS class to add to this component. You may add multiple class names separated by a space.

#### Tab Index

Sets the `tabindex` attribute of this component to override the tab order of the form. See the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex\) on `tabindex` for more information on how it works.

#### Protected

If checked, this field is for input only. When being queried by the API it will not appear in the properties. You can still see the value on form.io by going to the submissions for a form.

#### Persistent

If checked, the field will be stored in the database. If you want a field to not save, uncheck this box. This is useful for fields like password validation that shouldn't save.

#### Table View

If checked, this value will show up in the table view of the submissions list.

![19 checkbox validation](https://cloud.githubusercontent.com/assets/13321142/13097255/3078b636-d4e5-11e5-8784-8bc737fc146c.png){: .img-fluid .img-thumbnail }

#### Required

If checked, the field will be required to be checked. If it is required, you may not need to persist the value as it can be assumed to be checked when a form was submitted or it will not submit.

