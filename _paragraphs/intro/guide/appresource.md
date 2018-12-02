---
title: Application Resources
book: intro
weight: 500
chapter: guide
layout: chapter
slug: eventresource
---
Now that you have a running application with authentication, we can now add the **Event** resource using the **FormioResource** module.

[Angular Resource Documentation](https://github.com/formio/angular-formio/wiki/Resource-Management){:target="_blank" .btn .btn-primary}

```
ng g module event
```

We will then add the following to the following module file.

***src/app/event/event.module.ts***
```ts
...
import { RouterModule } from '@angular/router';
import {
  FormioResource,
  FormioResourceRoutes,
  FormioResourceConfig,
  FormioResourceService
} from 'angular-formio/resource';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormioResource,
    RouterModule.forChild(FormioResourceRoutes())
  ],
  providers: [
    FormioResourceService,
    {provide: FormioResourceConfig, useValue: {
      name: 'event',
      form: 'event'
    }}
  ]
})
export class EventModule { }
```

The next thing we will need to do is to register this event within the router.

***src/app/app-routing.module.ts***
```ts
const routes: Routes = [
  ...
  ...
  {
    path: 'event',
    loadChildren: './event/event.module#EventModule'
  }
];
```

You now have a complete Event management system!

![](/assets/img/userguide/eventindex.png){: .img-fluid .img-thumbnail }

Let's add our Registration form!
