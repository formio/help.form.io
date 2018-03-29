---
title: Site Structure
book: tutorials
section: walkthroughs
chapter: phraseapp
slug: structure
weight: 60
---
We're going to create all the components and modules we need upfront. Since we're using the cli, we can generate
the necessary components quickly

We'll start by creating home and navigation component. We'll use out navigation to change between an edit and view mode for our translations. 
This can be useful should you decide to add authentication to the project and want to give admins the ability to add or
alter translations, while letting users experience the updates on the fly. 

```
ng g component home
ng g component navigation
```

Next, we'll need to create a module that will be responsible for handling all phraseapp configuration. 
 
```
ng g module phraseapp
```

Finally, let's create the two components that will handle the view and edit modes. 
 
```
ng g component phraseapp/phraseapp-view
ng g component phraseapp/phraseapp-edit
```

Once done our `src/app` structure should look like this, excluding css and spec.ts files:

  * home ▼
    * home.component.html
    * home.component.ts
  * navigation ▼
    * navigation.component.html
    * navigation.component.ts
  * phraseapp ▼
    * phraseapp-edit ▼
      * phraseapp-edit.component.html
      * phraseapp-edit.component.ts
    * phraseapp-view ▼
      * phraseapp-view.component.html
      * phraseapp-view.component.ts
    * phraseapp.module.ts
  * app.component.html
  * app.component.ts
  * app.module.ts
  
If we inspect out `app.module.ts` file we can see that our components have been added automatically our project. 
Additionally in our assets folder lets create 2 files inside a i18n directory.  

  * assets ▼
    * i18n ▼
      * en.json
      * es.json

Inside en.json place the following JSON object

```
{
  "activeLang": "English",
  "title": "Translations"
}
```

Inside es.json place the following JSON object

```
{
  "activeLang": "Español",
  "title": "Traducción"
}
```

While these files arn't strictly necessary for phraseapp, you can use them with phraseapp if you wish to localize your
phraseapp exports. While we won't be doing this in this demo, as well be fetching our translations via the PhraseApp API,
we can leverage these file to translate items outside of the Form.io object.  