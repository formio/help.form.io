---
title: Application Routing
book: tutorials
section: walkthroughs
chapter: authentication
slug: routing
weight: 60
---
Before we dive into the actual user authentication we need to configure the application to handle the navigation between
the various and components and modules we just created. Starting with src -> config.ts insert the follow code. You'll
need to replace the `ProjectURL` with `Live Project Url:` found in the top right corner of whichever project on [portal.form.io](https://portal.form.io/)
you indent on adding this authentication logic to.

```
import { FormioAppConfig } from 'angular-formio';
import { FormioAuthConfig } from 'angular-formio/auth';

export const AppConfig: FormioAppConfig = {
  appUrl: 'https://[ProjectURL].form.io',
  apiUrl: 'https://api.form.io',
  icons: 'fontawesome'
};

export const AuthConfig: FormioAuthConfig = {
  login: {
    form: 'user/login'
  },
  register: {
    form: 'user/register'
  }
};
```

In the app.component.html replace the default content with the code below. This will place the navigation component at the top
of the page, while nesting the internal pages inside a general container. The `router-outlet` is how we view which page
is shown to the client.

```
<app-navigation></app-navigation>
<div class="container" style="margin-top: 10px;">
  <router-outlet></router-outlet>
</div>
```

In the home component under app -> home -> home.html, replace the internal default content with:

```
<div class="jumbotron">
  <h3>Welcome to the Form.io Authentication Demo</h3>
</div>
```

Next, open up app -> navigation -> navigation.html and add the following code. This is a generic Bootstrap 4 HTML nav template
with the addition of some Angular 4 logic to handle the `active` class on our routing links. Additionally, You'll notice
some `*ngIf` statements which  are controlling the view of certain nav elements for example: login and register
are replaced with logout when a user is authenticated.

```
<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <div class="container">
    <a class="navbar-brand" routerLink="/">Form.io Authentication</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">
          <a class="nav-link" routerLink="/"><i class="fa fa-home"></i> Home</a>
        </li>

        <li class="nav-item" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" *ngIf="auth.authenticated">
          <a class="nav-link" routerLink="/dashboard">Dashboard</a>
        </li>
      </ul>

      <ul class="nav navbar-nav ml-auto">
        <li class="nav-item dropdown" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" *ngIf="!auth.authenticated">
          <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
            Access
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" routerLink="/auth/login">Login</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" routerLink="/auth/register">Register</a>
          </div>
        </li>

        <li class="nav-item dropdown" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" *ngIf="auth.authenticated">
          <a class="nav-link dropdown-toggle" id="navbarDropdown2" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {{ userEmail }}
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" routerLink="/auth/login" (click)="auth.logout()">Logout</a>
          </div>
        </li>
      </ul>
    </div>
  </div>
</nav>
```

Open navigation -> navigation.ts and add the following. This logic will interface with the FormioAuthService to provide
the useful information such as the user's email address, account level, and if they are authenticated.

```
import { Component, OnInit } from '@angular/core';
import { FormioAuthService } from 'angular-formio/auth';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent implements OnInit {
  userEmail: string;
  constructor(public auth: FormioAuthService, public router: Router) {
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        if (auth.authenticated && auth.user.data) {
          this.userEmail = auth.user.data['email'];
        }
      }

      if (event instanceof NavigationEnd) {
        if (auth.authenticated && auth.user.data) {
          this.userEmail = auth.user.data['email'];
        }
      }
    });
  }

  ngOnInit() {
  }
}
```

We need to address the app.module.ts file to handle the actual navigation stack in addition to
adding the config.ts reference which contains our application and API URLs.

```
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormioAuthService, FormioAuthConfig } from 'angular-formio/auth';
import { RouterModule, Routes } from '@angular/router';
import { AuthConfig, AppConfig } from '../config';
import { FormioAppConfig } from 'angular-formio';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PlatformModule } from './platform/platform.module';
import { AuthModule } from './auth/auth.module';

const navStack: Routes = [
  { path: '', component: HomeComponent },
  { path: 'auth', loadChildren: () => AuthModule },
  { path: 'dashboard', loadChildren: () => PlatformModule },
  { path: '**', pathMatch: 'full', redirectTo: ''},
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(navStack)
  ],
  providers: [
    FormioAuthService,
    {provide: FormioAuthConfig, useValue: AuthConfig},
    {provide: FormioAppConfig, useValue: AppConfig}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```


Finally, open up the app -> auth -> auth.module.ts and add the following. This code handles the routing for actual login
interface and will automatically pull the corresponding user login and registration forms.


```
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormioAuth, FormioAuthRoutes } from 'angular-formio/auth';
import { FormioModule } from 'angular-formio';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetMailerComponent } from './reset-mailer/reset-mailer.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

@NgModule({
  imports: [
    FormioAuth,
    CommonModule,
    FormioModule,
    RouterModule.forChild(FormioAuthRoutes()),
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    ResetMailerComponent,
    ResetPasswordComponent,
  ]
})
export class AuthModule { }
```

At present the application looks and functions as shown below. Starting with a view of the database hosted on [portal.form.io](https://portal.form.io/)
there are no entries within the `User Resource`. Up registering within the application, the Dashboard becomes visible as defined in the
navigation controller. Additionally, the local storage for the application now contains the formioToken, formioUser, and formioAppUser key value pair
which is used by the aforementioned FormioAuthService to authenticate the user. Reloading the `User Resource` we can now see that
support@form.io is now registered in the system.

![Routing Example](/assets/video/authentication-01.gif){: .img-fluid .img-thumbnail }

While the application authenticates and routes correctly there are a few quirks that need to be addressed. First, the app
dashboard isn't configured yet. Secondly, registering or logging in won't automatically route the user to their dashboard. Third
visiting "/auth/login" when logged in will result in an "Unauthorized" error message and finally we sti;l have to add a password
reset function.



