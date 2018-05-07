---
title: Password Reset - App
book: tutorials
section: walkthroughs
chapter: authentication
slug: portal-password-reset
weight: 120
---
We already configure the states during the Email Token generation in our app -> app.module.ts which means we
can head over to the app -> reset-password -> reset-password.component.html and paste the following:

```
<formio [src]="passwordEmbedURL" (submit)="onSubmit($event)"></formio>
```

Now comes the heavy lifting, this is where we handle the `Token` passed along though the URL to authenticate the user and authorize a
password reset. The following code does resolves said functionality.

```
import { Component, OnInit } from '@angular/core';
import { FormioAuthService } from 'angular-formio/auth';
import { AuthConfig, AppConfig } from '../../../config';
import { Router } from '@angular/router';
import { Formio } from 'formiojs';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  query = {};
  passwordEmbedURL =  AppConfig.appUrl + '/resetpassword';
  constructor( public auth: FormioAuthService, private router: Router ) {
    location.search.substr(1).split("&").forEach((item) => {
      this.query[item.split("=")[0]] = item.split("=")[1] && decodeURIComponent(item.split("=")[1]);
    });
    const hasToken = localStorage.getItem('formioToken');
    if (this.query['token'] && !hasToken) {
      Formio.setToken(this.query['token']);
      localStorage.removeItem('formioAppUser');
      localStorage.removeItem('formioUser');
    }
  }
  onSubmit(submission) {
    Formio.currentUser().then((user: any) => {
      Formio.setUser(user);
      user.data.password = submission.data.password;
      const userFormio = new Formio(AppConfig.appUrl + '/user/submission/' + user._id);
      userFormio.saveSubmission(user).then((sub: any) => {
        this.router.navigateByUrl('/dashboard');
      });
    });
  }

  ngOnInit() {
  }
}
```
