---
title: App Routing
book: tutorials
section: walkthroughs
chapter: phraseapp
slug: routing
weight: 70
---
Starting with the `app.module.ts` let's importing the routing module and configure our navigation stack. While we're here 
we'll also include all the translation modules. For full explanations of why certain modules were added and
how there being used please refer to the official repositories at the top of the guide. 

```
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PhraseAppViewComponent } from './phraseapp/phraseapp-view/phraseapp-view.component';
import { PhraseAppModule } from './phraseapp/phraseapp.module';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

const navStack: Routes = [
  { path: '', component: HomeComponent},
  { path: 'phraseapp/view', component: PhraseAppViewComponent },
  { path: '**', pathMatch: 'full', redirectTo: ''}
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PhraseAppViewComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    PhraseAppModule,
    RouterModule.forRoot(navStack, {useHash: true}),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

at this point `HTTP_INTERCEPTORS` and `TranslateCompiler` arn't configured but we'll come back to those later. 
as for the rest of the code, we've add angular's router which will interact with our navigation component.
The translation provider that we've included will allow us to access those json files which you'll see utilized
in the navigation component. and finally, we've added the PhraseAppModule which will handle the edit view and out HTTP
module that will be responsible for handling out asynchronous request to the PhraseApp APIs.  

for the `home.component.html` feel free to change it to whatever you'd like. we'll be setting it to:

```
<p>This is demo application for PhraseApp Translations</p>
```

In the `apps.component.ts` lets add the TranslateService service like so, and set a default language. 

```
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(translate: TranslateService) {
    translate.setDefaultLang('en');
  }
}
```

in the `apps.component.html` give the `router-outlet` a place to injection our components

```
<div class="container">
  <div class="row" style="padding: 10px 0">
    <div class="col-md-12">
      <app-navigation></app-navigation>
    </div>
  </div>
PhraseApp
  <div class="row">
    <div class="col-md-12">
      <router-outlet></router-outlet>
    </div>
  </div>
</div>
```

In the `navigation.component.html` let's bootstrap navbar class and configure our links.

```
<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <a class="navbar-brand" routerLink="/"><i class="fa fa-home"></i> {{ 'title' | translate }}</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">
        <a class="nav-link" routerLink="/">Home</a>
      </li>

      <li class="nav-item dropdown" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">
        <a class="nav-link dropdown-toggle" id="navbarDropdown1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
          PhraseApp
        </a>

        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" routerLink="/phraseapp/edit">Edit Mode</a>
          <a class="dropdown-item" routerLink="/phraseapp/view">View Mode</a>
        </div>
      </li>
    </ul>
  </div>
</nav>
```

Finally, we have to configure the `phraseapp.module.ts` with the following:

```
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader, TranslateCompiler } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { PhraseAppCompiler } from 'ngx-translate-phraseapp';

import { PhraseappEditComponent } from './phraseapp-edit/phraseapp-edit.component';

const navStack: Routes = [
  { path: 'phraseapp',
    children: [
      { path: 'edit', component: PhraseAppEditComponent },
    ]
  }
];

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(navStack),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      compiler: {
        provide: TranslateCompiler,
        useClass: PhraseAppCompiler
      }
    }),
  ],
  declarations: [PhraseAppEditComponent]
})
export class PhraseAppModule { }
```

With the core configuration in place, feel free to  test everything using `ng serve`. While on the surface not a lot has changed,
you'll notice that the title in the navbar pulls from the en.json file, the routing allows you to traverse the site
as the routes correctly apply an active class. Lastly going to a bad URL redirects you back to the home page.



