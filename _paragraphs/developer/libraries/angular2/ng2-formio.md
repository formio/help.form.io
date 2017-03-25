---
title: ng2-formio
book: developer
section: libraries
chapter: angular2
weight: 100
slug: ng2formio
---
This is the Form Renderer for Angular 2 and the Documentation can be found @ [https://github.com/formio/ng2-formio](https://github.com/formio/ng2-formio)

### Installation
To install this library, you will do the following within your Angular application.

```
npm install --save ng2-formio
```

### Example
Here is an example of how to implement Angular within your application.

```js
import { FormioModule, FormioAppConfig } from 'ng2-formio';

@NgModule({
  imports: [
    BrowserModule,
    FormioModule,
    RouterModule.forRoot(routes)
  ],
  ...,
  ...,
  providers: [
    {provide: FormioAppConfig, useValue: {
      appUrl: 'https://examples.form.io',
      apiUrl: 'https://api.form.io'
    }}
  ]
})
export class AppModule {}
```

You can then include the following within your application

```html
<formio src='https://examples.form.io/example'></formio>
```

### Full Documentation
For full documenation over Form.io Angular support, go to the [Form.io Angular Wiki Page](https://github.com/formio/ng2-formio/wiki)
