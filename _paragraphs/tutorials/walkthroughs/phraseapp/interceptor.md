---
title: Creating our interceptor
book: tutorials
section: walkthroughs
chapter: phraseapp
slug: building
weight: 100
---
Before we configure the view mode we, need to create an interceptor to handle the `Access Token`.
This is to lock down the edit access to only people who have PhraseApp login credentials with respect current the project. 

under `phraseapp` → `phraseapp-view` create a fifth file called `phraseapp-interceptor.ts` and add the following code:

```
import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/observable';

@Injectable()
export class PhraseAppInterceptor implements HttpInterceptor {
  intercept (request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const accessRequest = request.clone({
      headers: request.headers.set('Authorization', 'token <AccessTokenGoesHere>')
    });
    return next.handle(accessRequest);
  }
}
```

with this in place we need to revisit the `app.module.ts` file and append the providers.

```
...
import { PhraseAppInterceptor } from './phraseapp/phraseapp-view/phraseapp-interceptor';
...
@NgModule({
  ...
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: PhraseAppInterceptor,
    multi: true,
  }],
  ...
```