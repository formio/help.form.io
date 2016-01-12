---
title: Address
book: userguide
chapter: form-components
slug: address
weight: 110
---
The address form component is a special component that does lookups for addresses entered. It can be entered in free form and will save the address as well as geolocation and other information.

![](/assets/img/address-display.png)

#### Label

The label for this field that will appear next to it.

#### Placeholder

The placeholder text that will appear when this field is empty.

#### Custom CSS Class

A custom CSS class to add to this component. You may add multiple class names separated by a space.

#### Tab Index

Sets the `tabindex` attribute of this component to override the tab order of the form. See the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex\) on `tabindex` for more information on how it works.

#### Allow Multiple Addresses

Allow multiple addresses to be entered into the field.

#### Unique

If checked, this field will be enforced as unique for this form. Submissions will be checked to see if an existing value matches. This validation is currently server side only.

#### Protected

If checked, this field is for input only. When being queried by the API it will not appear in the properties. You can still see the value on form.io by going to the submissions for a form.

#### Persistent

If checked, the field will be stored in the database. If you want a field to not save, uncheck this box. This is useful for fields like password validation that shouldn't save.

#### Table View

If checked, this value will show up in the table view of the submissions list.

![](/assets/img/address-validation.png)

#### Required

If checked, the field will be required to have a value.
