---
title: Form.io Utils
book: developer
section: libraries
chapter: javascript
weight: 2
slug: utils
---
The Form.io Utils library is used for both the Browser as well as Node.js to provide a common library of used methods within Form.io. You can install this library with the following.

```
npm install --save formio-utils
```

A good example of when this library is used is for the ability to iterate through the recursive components within a Form using the following command.

```
import { FormioUtils } from 'formio-utils';
FormioUtils.eachComponent(form.components, (component) => {
  console.log(component);
});
```