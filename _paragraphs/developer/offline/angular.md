---
title: AngularJS Offline
book: developer
chapter: offline
slug: angular
weight: 20
---
#### Example Application
To help with the implementation of Offline Mode, we have contributed an Open Source application that incorportes our offline mode capabilities. This application is called the [GPS Tracker](https://github.com/formio/formio-app-gpstracker). To quickly bootstrap this project to test locally you can run the following {{ site.formio }} CLI command.

```bash
npm install -g formio-cli
formio bootstrap formio/formio-app-gpstracker
```

The following documentation serves to show you how to add this capability into your own project.

#### Adding Offline Mode to your Project

To add offline mode to your project, you must first upgrade your project to **Enterprise**. Once you do this, you will then be added to our Offline Mode Github project which will allow you to include it within your application. To do that you will use bower and type the following.

```bash
bower install --save git@github.com:formio/formio-plugin-offline.git
```

You will also need to include the following project dependencies which will be needed to build the offline manifest as well as include the offline mode in your project.

```bash
npm install --save-dev gulp-manifest
bower install --save ng-formio-helper
```

Once you do this, you can then include the Offline mode into your application by including the [ngFormioHelper](https://github.com/formio/ngFormioHelper) library.

***/src/app/index.module.js***

```javascript
(function() {
  'use strict';
  angular
    .module('myApp', [
      'ngFormioHelper'
    ]);
  })();
```

#### Create the application manifest
Now that the Offline mode has been added to your project, you will now need to create the applicatoin manifest for the application cache capability. We can use Gulp to help out with this, by including the following Gulp tasks within our build routines.

***/gulp/build.js***

```javascript
gulp.task('offline', ['html', 'config', 'fonts', 'other'], function() {
  return gulp.src([path.join(conf.paths.dist, '/**/*')], { base: './dist/' })
    .pipe($.manifest({
      hash: true,
      preferOnline: true,
      network: ['*'],
      filename: 'app.manifest',
      exclude: ['app.manifest', 'maps/**']
    }))
    .pipe(gulp.dest(conf.paths.dist));
});
```

and then register it to the build task.

```javascript
gulp.task('build', ['html', 'fonts', 'other', 'views', 'config', 'offline']);
```

We now need to add the manifest to our **index.html** file.

***/src/index.html***

```html
<html manifest="app.manifest" ng-app="myApp">
```

#### Register Offline Mode within your application.
To get offline mode working in your application, we will use the Formio helper library to register our application with offline mode support. We start this within the ***config*** method of our Angular.js app which defines our routes.

***/src/app/index.route.js***

```javascript
/** @ngInject */
function routeConfig(
  FormioOfflineProvider,
) {

  FormioOfflineProvider.register({
    errorUrl: '/error',
    homeState: 'home'
  });
```

We now need to initialize this within the application using the following.

***/src/app/index.run.js***

```javascript
angular
  .module('myApp')
  .run([
    'FormioOffline',
    function(
      FormioOffline
    ) {
      // Initialize offline mode for your application.
      FormioOffline.init();
```

#### Add the offline button to the header
The next thing you need to do is add the Offline mode button to your header of your application. This will allow you to syncronize the submissions that have been captured within offline mode. You can do that with the following ```<offline-button>``` directive code in your applications navbar.

```html
<div id="navbar" class="navbar-collapse collapse">
  <ul class="nav navbar-nav navbar-right">
    <li><offline-button></offline-button></li>
  </ul>
</div>
```

Once you do that you should now have offline capabilities within your application!
![](/assets/img/userguide/formio-offline.png){: .img-fluid .img-thumbnail }
