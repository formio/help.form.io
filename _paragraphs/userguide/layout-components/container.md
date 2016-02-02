---
title: Container
book: userguide
chapter: layout-components
slug: container
weight: 35
---

A container is a set of the different type of fields. Container are used to wrap groups of fields with a title. This form component is saved to the api.

Normally fields submit like this:
firstName = First Name field
lastName = Last Name field
Would submit as
```{
  data: {
    firstName: “Joe”,
    lastName: “Smith”
  }
}```

With a container with the key “user" it would look like:
```{
 data: {
    user {  
      firstName: “Joe”,
      lastName: “Smith”
    }
  }
}```


![](/assets/img/container.png)

![](/assets/img/container-display.png)

#### Label

The name or title for this component. Here label is only display at the time of creating or editing a form to represent container while adding form elements to it. It will later disappear in live.

#### Custom CSS Class

A custom CSS class to add to this component. You may add multiple class names separated by a space.

#### Protected

If checked, this field is for input only. When being queried by the API it will not appear in the properties. You can still see the value on form.io by going to the submissions for a form.

#### Persistent

If checked, the field will be stored in the database. If you want a field to not save, uncheck this box. This is useful for fields like password validation that shouldn't save.

#### Table View

If checked, this value will show up in the table view of the submissions list.

