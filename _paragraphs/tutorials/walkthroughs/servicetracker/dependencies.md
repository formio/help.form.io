---
title: Install Dependencies
book: tutorials
section: walkthroughs
chapter: servicetracker
slug: dependencies
weight: 9
---

**Upgrade Angular.js**
First we will upgrade **Angular.js** to the latest 1.5 version. Make sure that when it asks you questions on which version you want that you select the one that resolves to the latest version.

```
  bower install --save angular
  bower install --save angular-sanitize
  bower install --save angular-aria
  bower install --save angular-bootstrap
```

**Install Bootswatch, Font Awesome, Google Maps, and Form.io Dependencies**

```
  bower install --save bootswatch
  bower install --save font-awesome
  bower install --save ngmap
  bower install --save ng-formio
  bower install --save ng-formio-helper
```

Once we have the dependencies installed, we now need to open the following file within the application, and add the following dependencies to the ```angular.module``` declaration.

***/src/app/index.module.js***

```
    angular
      .module('servicetracker', [
        'ngSanitize',
        'ngAria',
        'ui.router',
        'ui.bootstrap',
        'toastr',
        'ngMap',
        'formio',
        'ngFormioHelper'
      ]);
```