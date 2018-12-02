---
title: Email Token - App
book: tutorials
section: walkthroughs
chapter: authentication
slug: app-email-reset
weight: 100
---
With portal configured to send a password reset link, we need to incorporate the new form into our application.
But before we do that we need to make sure that the unauthenticated users can interact with out form. Go to the `Access` tab
on the `Reset Mailer Form` and add `Anonymous` to the create own submissions field.

![Mailer Interface](/assets/img/tutorials/walkthroughs/authentication/mailer-interface-00.png){: .img-fluid .img-thumbnail }

Starting in our app -> auth -> auth.module.ts we need to configure our modules routes to accommodate the reset password
forms we'll be adding.

```
import ...

const authRoutes = FormioAuthRoutes({
    login: LoginComponent,
    register: RegisterComponent
  });

authRoutes[0].children.push({
  path: 'mailer',
  component: ResetMailerComponent
});

authRoutes[0].children.push({
  path: 'reset',
  component: ResetPasswordComponent
});

@NgModule({
  imports: [
    ...
    RouterModule.forChild(authRoutes)
  ],
...
export class AuthModule { }
```

With that taken care of let's start by adding a `Reset Password` option at the bottom of our login form.
go to auth -> login -> login.component.html and paste the following. Included in this snippet is the logic to
alert the user if they somehow find themselves on the login page and they are already authenticated.

```
<div *ngIf="!auth.authenticated">
  <formio [src]="service.loginForm" (submit)="service.onLoginSubmit($event); onSubmit($event)"></formio>
  <p><a routerLink="/auth/mailer">Reset Password</a></p>
</div>

<div *ngIf="auth.authenticated">
  <p>You are already Logged in - go to <a routerLink="/dashboard">dashboard</a> </p>
</div>
```

In the auth -> login -> login.component.ts include the following. This portion of code comes with added benefit of handling
the redirect to the users dashboard once they've logged in.

```
import { Component, OnInit } from '@angular/core';
import { FormioAuthService, FormioAuthLoginComponent } from 'angular-formio/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends FormioAuthLoginComponent implements OnInit {

  constructor(public auth: FormioAuthService, private router: Router) {
    super(auth);
  }

  onSubmit(event) {
    this.router.navigate(['/dashboard']);
  }
  ngOnInit() {
  }
}
```

![Mailer Interface](/assets/img/tutorials/walkthroughs/authentication/mailer-interface-01.png){: .img-fluid .img-thumbnail }


We'll do the same thing for the auth -> register -> register.component.html page as well.

```
<div *ngIf="!auth.authenticated">
  <formio [src]="service.registerForm" (submit)="service.onRegisterSubmit($event); onSubmit($event)"></formio>
</div>

<div *ngIf="auth.authenticated">
  <p>You are already Logged in - go to <a routerLink="/dashboard">dashboard</a> </p>
</div>

```

And again for auth -> register -> register.component.ts

```
import { Component, OnInit } from '@angular/core';
import { FormioAuthService, FormioAuthRegisterComponent } from 'angular-formio/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent extends FormioAuthRegisterComponent implements OnInit {

  constructor(public auth: FormioAuthService, private router: Router) {
    super(auth);
  }

  onSubmit(event) {
    this.router.navigate(['/dashboard']);
  }

  ngOnInit() {
  }
}
```

Moving right along let's address the app -> mailer-reset -> mailer-reset.component.html

```
<div *ngIf="!reset">
  <formio [src]="mailerEmbedURL" (submit)="onSubmit($event)"></formio>
</div>

<div *ngIf="reset">
  <div class="alert">
    <h4> A reset email has been sent to: {{ localEmail }}</h4>
  </div>
</div>
```

And to control the logic behind this interface add the following to app -> mailer-reset -> mailer-reset.component.ts.
This code will dynamically fetch the form url from our AppConfig file and append the url with the proper embed code.

```
import { Component, OnInit } from '@angular/core';
import { AuthConfig, AppConfig } from '../../../config';

@Component({
  selector: 'app-reset-mailer',
  templateUrl: './reset-mailer.component.html',
  styleUrls: ['./reset-mailer.component.scss']
})
export class ResetMailerComponent implements OnInit {
  reset = false;
  localEmail: string;
  mailerEmbedURL =  AppConfig.appUrl + '/resetmailer';
  constructor() {}

  onSubmit(submission) {
    this.reset = true;
    this.localEmail = submission.data['email'];
  }

  ngOnInit() {
  }
}
```

![Mailer Interface](/assets/img/tutorials/walkthroughs/authentication/mailer-interface-02.png){: .img-fluid .img-thumbnail }

Additionally, there is some good UX involved where after submission, a notification informs the user that an email has
been sent to the entered email address.

![Mailer Interface](/assets/img/tutorials/walkthroughs/authentication/mailer-interface-03.png){: .img-fluid .img-thumbnail }
