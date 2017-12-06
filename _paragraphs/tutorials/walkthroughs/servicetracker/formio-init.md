---
title: Form.io Initialization
book: tutorials
section: walkthroughs
chapter: servicetracker
slug: formio-init
weight: 12
---
Now that we have our configuration in place, our next task is to initialize Form.io within the **index.config.js** as well as the **index.run.js** files.

***/src/app/index.config.js***

```
  /** @ngInject */
  function config(
    toastrConfig,
    FormioProvider,
    AppConfig
  ) {
    // Set the base url for formio.
    FormioProvider.setBaseUrl(AppConfig.apiUrl);
    FormioProvider.setAppUrl(AppConfig.appUrl);

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;
  }
```

And then finally we need to register all the forms to the **$rootScope** of the application by registering them from the config.js file.

***/src/app/index.run.js***

```
  /** @ngInject */
  function runBlock(
    $log,
    $rootScope,
    AppConfig
  ) {
    // Allow the app to have access to configurations.
    $rootScope.config = AppConfig;

    // Add the forms to the root scope.
    angular.forEach(AppConfig.forms, function(url, form) {
      $rootScope[form] = url;
    });

    $log.debug('runBlock end');
  }
```