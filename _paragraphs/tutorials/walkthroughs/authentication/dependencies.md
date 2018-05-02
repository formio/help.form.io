---
title: Angular-Formio
book: tutorials
section: walkthroughs
chapter: phraseapp
slug: angular-formio
weight: 40
---
To get started we will be adding some additional dependencies to the application. If your project is live, please terminate your local server
by hitting `Ctrl + C` or `Command + C` depending on your setup. Then run the following npm commands in directory of your project.

 - [angular-formio](https://github.com/formio/angular-formio) which will includes and instance of [formio.js](https://github.com/formio/formio.js)

```
npm install --save angular-formio@^2.0.0-alpha.1
```
 - [ngx-translate/core](https://github.com/ngx-translate/core) which allows for the localization of the translations
 
```
npm install --save @ngx-translate/core@^9.1.1
```

 - [ngx-translate/http-loader](https://github.com/ngx-translate/http-loader) which extends angular's default http-loader
 
```
npm install --save @ngx-translate/http-loader@^2.0.1
```
 
 - [ngx-translate-phraseapp](https://github.com/phrase/ngx-translate-phraseapp) which extends [ngx-translate/core](https://github.com/ngx-translate/core)
 
```
npm install --save ngx-translate-phraseapp@^0.1.5
```

As a point of reference, the above installation commands have explicitly included the version property for each module
in case some incompatibility is introduced in the future.


