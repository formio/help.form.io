---
title: Configuration
book: tutorials
section: walkthroughs
chapter: servicetracker
slug: configuration
weight: 11
---
The next step is to create the configuration for the Service Tracker application. This contains the definition to all your forms, resources, roles, and anything else you need to configure within the application. This file looks like the following.

***/src/config.js***

```
  var APP_URL = 'https://myproject.form.io';
  var API_URL = 'https://api.form.io';

  // Parse query string
  var query = {};
  location.search.substr(1).split("&").forEach(function(item) {
    query[item.split("=")[0]] = item.split("=")[1] && decodeURIComponent(item.split("=")[1]);
  });

  var appUrl = query.appUrl || APP_URL;
  var apiUrl = query.apiUrl || API_URL;
  angular.module('servicetracker').constant('AppConfig', {
    appUrl: appUrl,
    apiUrl: apiUrl,
    company: query.company || 'Service Tracker',
    icon: query.icon || 'assets/images/logo.png',
    forms: {
      userForm: appUrl + '/user',
      userLoginForm: appUrl + '/user/login',
      appointmentForm: appUrl + '/appointment'
    },
    roles: [
      'Contractor',
      'Dealer'
    ],
    resources: {
      dealer: {
        form: appUrl + '/dealer',
        resource: 'DealerResource'
      },
      customer: {
        form: appUrl + '/customer',
        resource: 'CustomerResource'
      },
      contractor: {
        form: appUrl + '/contractor',
        resource: 'ContractorResource'
      },
      appointment: {
        form: appUrl + '/appointment',
        resource: 'AppointmentResource'
      },
      timeclock: {
        form: appUrl + '/timeclock',
        resource: 'TimeClockResource'
      },
      equipment: {
        form: appUrl + '/equipment',
        resource: 'EquipmentResource'
      },
      service: {
        form: appUrl + '/service',
        resource: 'ServiceResource'
      }
    }
  });
```
You will need to make sure that you replace the "myproject" in the APP_URL with the url of your project within Form.io

You will also need to add this file manually to the **index.html** so that it will include it during the page load.

***/src/index.html***

```
    <!-- build:js(src) scripts/vendor.js -->
    <!-- bower:js -->
    <!-- run `gulp inject` to automatically populate bower script dependencies -->
    <!-- endbower -->
    <!-- endbuild -->

    <!-- build:js({.tmp/serve,.tmp/partials,src}) scripts/app.js -->
    <!-- inject:js -->
    <!-- js files will be automatically insert here -->
    <!-- endinject -->

    <!-- inject:partials -->
    <!-- angular templates will be automatically converted in js and inserted here -->
    <!-- endinject -->
    <!-- endbuild -->

    <!-- Add the configuration -->
    <script src="config.js"></script>
```

As well as include a new build routine which will include it along with the distribution build.

***/gulp/build.js***

```
  gulp.task('config', function() {
    return gulp.src([
      path.join(conf.paths.src, '/config.js')
    ]).pipe(gulp.dest(path.join(conf.paths.dist, '/')));
  });

  gulp.task('build', ['html', 'fonts', 'ui-grid-fonts', 'config', 'other', 'views']);
```