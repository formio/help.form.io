---
title: Container
book: userguide
chapter: data-components
slug: container
weight: 20
---
A container is a wrapper around a set of fields similar to a fieldset. The major way they are different is the way that the data is stored. For most layout components field values are stored directly in the ```data``` of the submission.

For example, a fieldset with the following fields

firstName = First Name field
lastName = Last Name field
Would submit as

```
{
  data: {
    firstName: “Joe”,
    lastName: “Smith”
  }
}
```

However, with a container, the fields are put into an object with the container key. This is useful for creating more complex objects within your form.

For example, a container with the key ```user``` and the same fields above would submit as

```javascript
{
 data: {
    user {  
      firstName: “Joe”,
      lastName: “Smith”
    }
  }
}
```

![](/assets/img/container.png){: .img-fluid .img-thumbnail }

![](/assets/img/container-display.png){: .img-fluid .img-thumbnail }

#### Label

The name or title for this component. Here label is only display at the time of creating or editing a form to represent container while adding form elements to it. It will later disappear in live.

#### Custom CSS Class

A custom CSS class to add to this component. You may add multiple class names separated by a space.

#### Protected

If checked, this field is for input only. When being queried by the API it will not appear in the properties and also should not appear in exported data. You won't be able to see the value on form.io, but it will be stored in database under the hood.

#### Persistent

If checked, the field will be stored in the database. If you want a field to not save, uncheck this box. This is useful for fields like password validation that shouldn't save.

#### Table View

If checked, this value will show up in the table view of the submissions list.
