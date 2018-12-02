---
title: Event View
book: intro
weight: 700
chapter: guide
layout: chapter
slug: eventview
---
To change the view of the Event, we can use the same method we did for the Resource component, but this time we will create one for the event view.

```
ng g component event/view
```

We can now modify the following template with the following.

***src/app/event/view/view.component.html***
```html
<div class="row">
  <div class="col col-sm-6">
    <div class="card">
      <div class="card-header bg-primary text-white">
        <h3 class="card-title">Event Information</h3>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item"><strong>Title:</strong> {{ service.resource.data.title }}</li>
        <li class="list-group-item"><strong>Description:</strong> {{ service.resource.data.description }}</li>
        <li class="list-group-item"><strong>Date:</strong> {{ service.resource.data.date }}</li>
      </ul>
    </div>
  </div>
  <div class="col col-sm-6">
    <div class="card">
      <div class="card-header bg-success text-white">
        <h3 class="card-title">Event Registration</h3>
      </div>
      <div class="card-body">
        <a routerLink="../registrations/new" class="btn btn-primary">Register for this Event</a>
      </div>
    </div>
  </div>
</div>
```

Next, we need to extend the **FormioResourceView** as follows.

***src/app/event/view/view.component.ts***
```ts
import { Component } from '@angular/core';
import { FormioResourceViewComponent } from 'angular-formio/resource';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent extends FormioResourceViewComponent {}
```

And finally, we will register this with the **FormioResourceRoutes** as follows.

***src/app/event/event.module.ts***
```ts
const eventRoutes: Routes = FormioResourceRoutes({
  resource: ResourceComponent,
  view: ViewComponent
});
```

This produces the following result...

![](/assets/img/userguide/eventview.png){: .img-fluid .img-thumbnail }

We now have a full working Event Management system, which even allows for other users to create an account and Register for this event. We hope that this walkthrough guide provides you a solid footing on building your next Serverless application on Form.io!

If you would like to download the code behind this application, then go to <a class="btn btn-primary" href="https://github.com/formio/eventmanager" target="_blank">Event Manager Github Page</a>.


