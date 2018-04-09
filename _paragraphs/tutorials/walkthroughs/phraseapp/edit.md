---
title: Configuring Edit Mode
book: tutorials
section: walkthroughs
chapter: phraseapp
slug: edit
weight: 100
---
With our form built, make sure the form `access` is configured for your intended use case. In this example, permissions 
are set to `anonymous`. Starting with out `phraseapp-edit.component.ts` import the following HTML:

```
<h4>PhraseApp Edit Mode</h4>
<hr>

<div class="card" style="padding: 10px">
  <div class="card-block">
    <div id="PhraseEdit"></div>
  </div>
</div><hr>

<h5>Error Messages</h5>
<div class="card" style="margin-bottom: 120px; padding: 10px" >
  <div class="row">
    <div class="col-3">
      <div class="card p-2 px-3">
        Required
      </div>
    </div>

    <div class="col-5">
      <div class="card p-2 px-3">
        [[__phrase_required__]]
      </div>
    </div>
  </div>

  <div class="row">
    <div class="col-3">
      <div class="card p-2 px-3">
        Error
      </div>
    </div>

    <div class="col-5">
      <div class="card p-2 px-3">
        [[__phrase_error__]]
      </div>
    </div>
  </div>

  <div class="row">
    <div class="col-3">
      <div class="card p-2 px-3">
        Invalid Email
      </div>
    </div>

    <div class="col-5">
      <div class="card p-2 px-3">
        [[__phrase_invalid_email__]]
      </div>
    </div>
  </div>
</div>
```  

Then, in the corresponding component controller `phraseapp-edit.component.ts` include:

```
import { Component, OnInit } from '@angular/core';
import { PhraseAppCompiler } from 'ngx-translate-phraseapp';
import { initializePhraseAppEditor } from 'ngx-translate-phraseapp';
import { createForm } from 'formiojs';

@Component({
  selector: 'app-phraseapp-edit',
  templateUrl: './phraseapp-edit.component.html',
  styleUrls: ['./phraseapp-edit.component.scss']
})

export class PhraseAppEditComponent implements OnInit {
  formRemote: string;
  phraseConfig: object;

  constructor() {
    this.formRemote = '<formURLGoesHere>';

    this.phraseConfig = {
      projectId: '<projectIdGoesHere>',
      phraseEnabled: true,
      prefix: '[[__',
      suffix: '__]]',
    };

    initializePhraseAppEditor(this.phraseConfig);
  }

  ngOnInit() {
    createForm(document.getElementById('PhraseEdit'), this.formRemote, {
      readOnly: false,
    });
  }
}
```  

Here we're doing a couple of things. First, we're creating the Form on our HTML's target `#PhraseEdit`. 
Second, were initialize the PhraseApp Editor and we're passing in the aforementioned configurations. If you've been
coding along make sure you update the `formRemote` and `projectId` that we just created from [phraseapp.com](https://phraseapp.com/account/login).