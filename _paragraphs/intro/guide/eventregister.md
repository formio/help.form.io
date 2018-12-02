---
title: Event Registration
book: intro
weight: 600
chapter: guide
layout: chapter
slug: eventregister
---
We will now add the **Event Registration** form to the event. Since forms and resources are conceptually the same thing in Form.io, we can use a nested resource to attach forms to any resource within our application. We can start by adding a submodule within Angular.

```
ng g module event/register
```

We can now add the following to the created file.

***src/app/event/register/register.module.ts***
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
      name: 'registration',
      form: 'registration',
      parents: [
        'event',
        {
          field: 'user',
          resource: 'currentUser',
          filter: false
        }
      ]
    }}
  ]
})
export class RegisterModule { }
```
Notice that we added the **parents** construct to our **providers**. This tells the Form.io Angular Resource system that this is nested within the Event resource as well as should contain the currently logged in User assigned to the new records as well.

Next, we need to mount this nested resource within the Event resource. To do this, we add it to the children of the Event resource routes as follows.

***src/app/event/event.module.ts***
```ts
...
import { RouterModule, Routes } from '@angular/router';
import { RegisterModule } from './register/register.module';
...

const eventRoutes: Routes = FormioResourceRoutes();
eventRoutes[2].children.push({
  path: 'registrations',
  loadChildren: () => RegisterModule
});

@NgModule({
  declarations: [],
  imports: [
    ...
    RouterModule.forChild(eventRoutes)
  ],
  ...
})
export class EventModule { }
```
For nested resources, we do need to use the Dynamic loading method for bringing in the submodule.

```ts
loadChildren: () => RegisterModule
```

For some reason, this does not work if you use the lazy loading method such as ```loadChildren: './register/register.module#RegisterModule''```

We can now navigate to the following url to see the Forms for a specific event, as well as all the registrations within that Event.

    http://localhost:4200/event/[EVENTID]/registrations

Next, we will need to change the Event resource view so that we can add the tab to the interface.

    ng g component event/resource

We can now add the following the the event resource html.

***src/app/event/resource/resource.component.html***
```html
<ul class="nav nav-tabs" style="margin-bottom: 10px;">
  <li class="nav-item"><a class="nav-link" routerLink="../"><i class="fa fa-chevron-left"></i></a></li>
  <li class="nav-item"><a class="nav-link" routerLink="view" routerLinkActive="active">View</a></li>
  <li class="nav-item"><a class="nav-link" routerLink="registrations" routerLinkActive="active">Registrations</a></li>
  <li class="nav-item"><a class="nav-link" routerLink="edit" routerLinkActive="active">Edit</a></li>
  <li class="nav-item"><a class="nav-link" routerLink="delete" routerLinkActive="active"><span class="fa fa-trash"></span></a></li>
</ul>
<router-outlet></router-outlet>
```

Next, we will need to extend the **FormioResourceComponent**

***src/app/event/resource/resource.component.ts***
```ts
import { Component } from '@angular/core';
import { FormioResourceComponent } from 'angular-formio/resource';

@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.scss']
})
export class ResourceComponent extends FormioResourceComponent {}
```

And finally, we can register this within the routes using the following.

***src/app/event/event.module.ts***
```ts
const eventRoutes: Routes = FormioResourceRoutes({
  resource: ResourceComponent
});
```

This should create the following interface, where we can now view all of the registrations within an Event.

![](/assets/img/userguide/eventform.png){: .img-fluid .img-thumbnail }

Let's now change the Event view page to add a **Register for this Event** button!




