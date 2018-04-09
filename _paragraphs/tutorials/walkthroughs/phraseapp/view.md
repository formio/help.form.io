---
title: Configuring View Mode
book: tutorials
section: walkthroughs
chapter: phraseapp
slug: edit
weight: 110
---
With the interceptor built, we can now configure the view mode. Add the following code to `phraseapp-view.component.html`
```
<h4>PhraseApp View Mode: {{ 'activeLang' | translate }}</h4>

<div class="row">
  <div class="col-sm-4 offset-2">
    <button class="btn btn-primary btn-md btn-block " (click)="switchLanguage('en')">en</button>
  </div>
  <div class="col-sm-4">
    <button class="btn btn-primary btn-md btn-block" (click)="switchLanguage('es')">es</button>
  </div>
</div>

<hr>

<div class="card" style="padding: 10px">
  <div class="card-block">
    <div id="PhraseView"></div>
  </div>
</div>
```  

Then, in the corresponding component controller `phraseapp-view.component.ts` include:

```
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { createForm } from 'formiojs';

@Component({
  selector: 'app-phraseapp-view',
  templateUrl: './phraseapp-view.component.html',
  styleUrls: ['./phraseapp-view.component.scss']
})

export class PhraseappViewComponent implements OnInit {
  PhraseId: string;
  PhraseBase: string;
  formRemote: string;

  constructor(private translate: TranslateService, private http: HttpClient) {
    this.PhraseId = '<youPhraseAppIdGoesHere>';
    this.PhraseBase = 'https://api.phraseapp.com/api/v2/projects/' + this.PhraseId + '/locales/';
    this.formRemote = 'https://examples.form.io/phraseapp';
  }
  switchLanguage(language: string) {
    (<any>window).setLanguage(language);
    this.translate.use(language);
  }

  getLanguages():Promise<any> {
    return this.http.get(this.PhraseBase).toPromise();
  }

  getTranslations(data) {
    let promises:any = [];
    for (let i = 0; i < data.length; i++) {
      promises.push(this.http.get(this.PhraseBase + data[i]['id'] + '/translations').toPromise());
    }
    return promises
  }

  createConversions(phrases) {
    return new Promise((resolve) => {
      let toMergeBase = {};
      let toMergePhrase = {};
      let newLanguage = {};
      for (let i = 0; i < phrases.length; i++) {
        for (let propt in phrases[i]) {
          let injectLang = phrases[i][propt]['locale']['code'];
          let injectKeyBase = phrases[i][propt]['key']['name'];
          let injectKeyPhrase = '[[__phrase_' + phrases[i][propt]['key']['name'] + '__]]';
          let injectValue = phrases[i][propt]['content'] ;

          toMergeBase = { [injectKeyBase] : injectValue} ;
          toMergePhrase = { [injectKeyPhrase] : injectValue} ;

          let prevValue = newLanguage[injectLang] || {};
          newLanguage[injectLang] = Object.assign(prevValue, toMergePhrase, toMergeBase);
        }

        resolve(newLanguage);
      }
    });
  }

  ngOnInit() {
    this.getLanguages().then((languages: any[])  => {
      Promise.all(this.getTranslations(languages)).then((phrases: any[]) => {
        this.createConversions(phrases).then((i18n: any[]) => {
          createForm(document.getElementById('PhraseView'), this.formRemote, {
            readOnly: false, i18n : i18n
          }).then(form => {
            (<any>window).setLanguage = function (lang) {
              form.language = lang;
            };
          });
        });
      });
    });
  }
}
```  

To summarize whats happening here, because this is where bulk of the code is handled, 
we start by getting the locales from then PhraseApp API. This makes the configuration work whether there is 1 or 60
languages in your PhraseApp portal. Once the list of locales is returned we then fetch the remote object that contains
all translations as provided by PhraseApp. Finally we need to convert and pass the return into the form's construction.
for a simple versions of whats happening you reference our [Form.io Translations](https://help.form.io/tutorials/walkthroughs/translations/) example.

Finally, there is one more hitch we have to account for in this demo. If you visit the `Edit Mode` and the visit other pages,
the PhraseApp interface persists. This is because once the app is initialized via the `initializePhraseAppEditor()` function,
it affects the entire state. To fix this we need to add router properties to our `app.component.ts` file.

```
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router, NavigationStart } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  previousUrl: string;
  currentUrl: string;

  constructor(public translate: TranslateService, public router: Router) {
    translate.setDefaultLang('en');
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.currentUrl = event.url;
        if(this.currentUrl === '/phraseapp/edit' && this.previousUrl !== '/phraseapp/edit' && this.previousUrl) {
          this.previousUrl = this.currentUrl;
          window.location.reload(true);
        }
        if(this.previousUrl === '/phraseapp/edit' && this.currentUrl !== '/phraseapp/edit') {
          window.location.reload(true);
        }
        this.previousUrl = this.currentUrl;
      }
    });
  }
}

```





