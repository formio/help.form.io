---
title: Hidden
book: userguide
chapter: data-components
slug: hidden
weight: 10
---
A hidden field can be added to a form to create a resource property that can be custom set in the form. You can use javascript to set the value on the client side and when the form is submitted the value will be set on the resource. There is no front end widget for hidden fields.

![13 hidden](https://cloud.githubusercontent.com/assets/13321142/13097260/308a3622-d4e5-11e5-914d-446d4e567898.png){: .img-fluid .img-thumbnail }

#### Name

The name for a hidden field is not displayed on the client side and is used for administration purposes only. The name is used to generate the automatic property name but this can be changed on the API tab on the component settings modal.

#### Custom CSS Class

A custom CSS class to add to this component. You may add multiple class names separated by a space.

#### Unique

If checked, this field will be enforced as unique for this form. Submissions will be checked to see if an existing value matches. This validation is currently server side only.

#### Protected

If checked, this field is for input only. When being queried by the API it will not appear in the properties and also should not appear in exported data. You won't be able to see the value on form.io, but it will be stored in database under the hood.

#### Persistent

If checked, the field will be stored in the database. If you want a field to not save, uncheck this box. This is useful for fields like password validation that shouldn't save.

#### Table View

If checked, this value will show up in the table view of the submissions list.
