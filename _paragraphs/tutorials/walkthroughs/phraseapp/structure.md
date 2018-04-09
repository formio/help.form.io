---
title: Site Structure
book: tutorials
section: walkthroughs
chapter: phraseapp
slug: structure
weight: 60
---
To structure the application, we are going to create all the components and modules we need upfront. 
Since we're using the Angular's CLI tool, we can generate the necessary components via command line. 

We shall start by creating the home and navigation component. We will use the navigation to change between an edit and view mode for the in context editor. 
Should you decide to add authentication to the project, you can lock down the edit mode such that only admins have the ability to add or
alter translations.

```
ng g component home
ng g component navigation
```

Next, create a module that will be responsible for handling the PhraseApp editor logic.
 
```
ng g module phraseapp
```

Finally, create two components that will handle the view and edit modes. 
 
```
ng g component phraseapp/phraseapp-view
ng g component phraseapp/phraseapp-edit
```

Once done the `src/app` structure should look like this, excluding css and spec.ts files:

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
  
If you inspect the `app.module.ts`, you can see that our components have been automatically added to the project. 
Additionally, in our assets folder, create the following two files inside a i18n directory.  

  * assets ▼
    * i18n ▼
      * en.json
      * es.json

Inside the en.json file, place the following JSON object:

```
{
  "activeLang": "English",
  "title": "Translations"
}
```

Inside the es.json file, place the following JSON object:

```
{
  "activeLang": "Español",
  "title": "Traducción"
}
```

While these files are not strictly necessary, we can use them with PhraseApp to localize the translation exports for inclusion during the compile process.
This can be useful when building an application that may need to work in an offline configuration. Feel welcome to localize the data
instead of retrieving the files from the API as shown later in this walk-through.