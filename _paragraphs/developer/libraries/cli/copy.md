---
title: Form Copy
book: developer
section: libraries
chapter: cli
weight: 0
slug: copy
---
```
formio copy form [src] [dest]
```

This command will copy the components of a form into another form. This will overwrite all components within the destination form if that form exists. You can also chain together multiple source forms which will aggregate the components of those forms into the destination form.

#### Examples
```
// Copy a form from one project to another.
formio copy form https://myapp.form.io/myform https://myotherapp.form.io/myform

// Aggregate multiple forms into the same form.
formio copy form https://myapp.form.io/form1,https://myapp.form.io/form2 https://myapp.form.io/allforms
```