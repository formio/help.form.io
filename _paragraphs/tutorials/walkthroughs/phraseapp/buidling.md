---
title: Building The Form
book: tutorials
section: walkthroughs
chapter: phraseapp
slug: building
weight: 80
---
The form we'll be using for this example can be found at [https://examples.form.io/phraseapp](https://examples.form.io/phraseapp). 
Feel free to import the JSON into your own project or make your own.

![](/assets/img/tutorials/walkthroughs/translations/form-definition.png){: .img-fluid .img-thumbnail }

There are few things to note. First all the components are prefixed with `[[__phrase_` and sufixed with `_]]`. 
This format is how PhraseApp identifies what items in the DOM can be translated. 
You'll see where these settings are defined later in the walk through should you choose to change them. 
Also make sure the entire label is **lowercase** format. Finally, the `match_primary_text` field has a custom validation
script which will error if the text does not match the `primary_text` field. 
