---
title: User Authentication
book: intro
weight: 411
chapter: guide
layout: chapter
slug: userauth
---
Now that we have the configuration file in place, we can setup User Authentication. 

[Angular Auth Documentation](https://github.com/formio/angular-formio/wiki/User-Authentication){:target="_blank" .btn .btn-primary}

We accomplish this by first creating an Angular module that will contain the authentication routes.

```
ng g module auth
```

This will create a new folder within our application within the **src/app** folder, which we can then use to include all the necessary modules to bring in Authentication.

***src/app/auth/auth.module.ts***
```ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormioAuth, FormioAuthRoutes } from 'angular-formio/auth';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormioAuth,
    RouterModule.forChild(FormioAuthRoutes())
  ]
})
export class AuthModule { }
```

We must now register the Authentication module by lazy loading the module within the "auth" route. We can accomplish this within the following file.

***src/app/app-routing.module.ts***
```ts
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'auth',
    loadChildren: './auth/auth.module#AuthModule'
  }
];
```

Next, we just need to register the service providers with configurations within the **app.module.ts** file.

***src/app/app.module.ts***
```ts
...
...
import { AppConfig } from './config';
import { FormioAppConfig } from 'angular-formio';
import { FormioResources } from 'angular-formio/resource';
import { FormioAuthService, FormioAuthConfig } from 'angular-formio/auth';

@NgModule({
  ...
  ...
  providers: [
    FormioResources,
    FormioAuthService,
    {provide: FormioAppConfig, useValue: AppConfig},
    {provide: FormioAuthConfig, useValue: {
      login: {
        form: 'user/login'
      },
      register: {
        form: 'user/register'
      }
    }}
  ]
})
export class AppModule { }
``` 

We should now add a header to our application so that we can login, and see our login state.

We can now add a header to our application by editing the following file.

***src/app/app.component.html***
```html
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container">
    <a class="navbar-brand" href="#"><img style="height: 2em;" src="https://portal.form.io/images/formio-logo.png" /></a>
    <ul class="nav navbar-nav mr-auto">
      <li class="nav-item" routerLinkActive="active">
        <a class="nav-link" routerLink="/"><i class="fa fa-home"></i></a>
      </li>
      <li class="nav-item" routerLinkActive="event" *ngIf="auth.authenticated">
        <a class="nav-link" routerLink="event"><i class="fa fa-calendar"></i> Events</a>
      </li>
    </ul>
    <ul class="nav navbar-nav ml-auto">
      <li class="nav-item" routerLinkActive="active" *ngIf="!auth.authenticated">
        <a class="nav-link" routerLink="auth">Login | Register</a>
      </li>
      <li class="nav-item" *ngIf="auth.authenticated">
        <a class="nav-link" routerLink="/" (click)="auth.logout()"><span class="glyphicon glyphicon-off"></span> Logout</a>
      </li>
    </ul>
  </div>
</nav>
<div class="container pt-3">
  <router-outlet></router-outlet>
</div>
```

***src/app/app.component.ts***
```ts
...
...
import { Router } from '@angular/router';
import { FormioResources } from 'angular-formio/resource';
import { FormioAuthService } from 'angular-formio/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  ...
  ...
  constructor(
    public auth: FormioAuthService,
    private router: Router,
    public resources: FormioResources
  ) {
    this.auth.onLogin.subscribe(() => {
      this.router.navigate(['/']);
    });

    this.auth.onLogout.subscribe(() => {
      this.router.navigate(['/auth/login']);
    });

    this.auth.onRegister.subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
```

We should now see the following within our application with a working authentication and registration system.

![](/assets/img/userguide/authapp.png){: .img-fluid .img-thumbnail }
