---
title: Copy a form
book: userguide
chapter: forms
slug: copy-form
weight: 40
---
There are many situations where you would like to copy an existing form into a new form within your project, or between projects. Because of the cross project nature of this operation, the best way to accomplish this is to use the [Form.io Command Line](https://github.com/formio/formio-cli) tool. First install the command line using the following command in your command prompt.

```
npm install -g formio-cli
```

Once you have the command line installed, you will then need to create the form which will serve as the destination form. You do not need to add any components to this form, but just keep it blank since the copy command will populate the destination forms components. Once you have the destination form created, you will then use the ```formio copy form``` command to copy your forms using the following syntax.

```
formio copy form <source> <destination>
```

As an example, the following command will copy a from in project.

```
formio copy form https://myapp.form.io/source https://myotherapp.form.io/destination
```
