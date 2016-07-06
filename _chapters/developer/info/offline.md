---
title: Offline Mode
book: developer
section: info
weight: 30
chapter: offline
---
We provide a plugin to users with Team Pro or Enterprise projects that enables their applications to request and submit forms offline.

The plugin provides offline mode support for a single project. Offline requests will automatically kick in when a request fails due to a network error and serve data cached offline, if available. You may also create/edit/delete submissions while offline, and the requests will be queued to be sent when the app goes back online.

### Example Application
To help with the implementation of Offline Mode, we have contributed an Open Source application that incorportes our offline mode capabilities. This application is called the [GPS Tracker](https://github.com/formio/formio-app-gpstracker). To quickly boostrap this project to test locally you can run the following Form.io CLI command.

```
npm install -g formio-cli
formio bootstrap formio/formio-app-gpstracker
```

The following documentation serves to show you how to add this capability into your own project.

### Adding Offline Mode to your Project

To add offline mode to your project, you must first upgrade your project to **Team Pro** or **Enterprise**. Once you do this, you will then be added to our Offline Mode Github project which will allow you to include it within your application. To do that you will use bower and type the following.

```
bower install --save git@github.com:formio/formio-plugin-offline.git
```

You will also need to include the following project dependencies which will be needed to build the offline manifest as well as include the offline mode in your project.

```
npm install --save-dev gulp-manifest
bower install --save ng-formio-helper
```

Once you do this, you can then include the Offline mode into your application by including the [ngFormioHelper](https://github.com/formio/ngFormioHelper) library.

***/src/app/index.module.js***

```
(function() {
  'use strict';
  angular
    .module('myApp', [
      'ngFormioHelper'
    ]);
  })();
```

### Create the application manifest
Now that the Offline mode has been added to your project, you will now need to create the applicatoin manifest for the application cache capability. We can use Gulp to help out with this, by including the following Gulp tasks within our build routines.

***/gulp/build.js***

```
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

```
gulp.task('build', ['html', 'fonts', 'other', 'views', 'config', 'offline']);
```

We now need to add the manifest to our **index.html** file.

***/src/index.html***

```
<html manifest="app.manifest" ng-app="myApp">
```

### Register Offline Mode within your application.
To get offline mode working in your application, we will use the Formio helper library to register our application with offline mode support. We start this within the ***config*** method of our Angular.js app which defines our routes.

***/src/app/index.route.js***

```
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

```
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

### Add the offline button to the header
The next thing you need to do is add the Offline mode button to your header of your application. This will allow you to syncronize the submissions that have been captured within offline mode. You can do that with the following ```<offline-mode>``` directive code in your applications navbar.

```
<div id="navbar" class="navbar-collapse collapse">
  <ul class="nav navbar-nav navbar-right">
    <li><offline-button></offline-button></li>
  </ul>
</div>
```

Once you do that you should now have offline capabilities within your application!
![](/assets/img/userguide/formio-offline.png)

### How it works - The API
The offline mode plugin uses the Form.io renderer plugin system to hook into each request using the following registration process.

```javascript
var plugin = new FormioOfflinePlugin('https://myproject.form.io', 'path/to/project.json');
Formio.registerPlugin(plugin, 'myproject-offline');

// You can later access the plugin with:
// var plugin = Formio.getPlugin('myproject-offline');
```

#### new FormioOfflinePlugin(projectUrl, [projectJsonPath])

The constructor accepts two arguments. The `projectUrl` should point to the project that offline mode should be enabled for. The optional `projectJsonPath` must be the path to a exported `project.json` file to use to initialize the offline forms (If your app starts while offline, the forms in the `project.json` can still be successfully requested).

### Saving forms and submissions offline

Once you register a plugin for a particular project, all load requests for forms and submissions in that project will automatically save and update in an offline browser data store.

For example, you can have all submissions for a form available offline if you call `formio.loadSubmissions()` at some point in your app while online.

### Loading forms and submissions offline

When your app goes offline, requests to load a form or submission will automatically return the data cached offline, if available.

### Submitting forms offline

Form submissions work a little bit differently when this plugin is registered. All form submissions, submission edits, and submission deletions are added to a queue. If the app is online, the queue will be emptied immediately and behave like normal. But when the app is offline, the submissions stay in the queue until the app goes back online. Until then, Formio.js will behave as if the submission was successful.

The queue will automatically start to empty when a submission is successfully made online, or you may [manually start](#plugindequeuesubmissions) it.

### Handling submission queue errors

Some queued submissions may fail when they are sent online (ex: unique validation fails on the server). In the event a queued submission fails, the queue is stopped and events are triggered to allow your app to resolve the bad submission before continuing. It's up to your app to decide how to handle these errors. Your app may decide to prompt the user to [fix the form submission](#pluginsetnextqueuedsubmissionrequest) or simply [ignore the submission](#pluginskipnextqueuedsubmission), and [restart the queue](#plugindequeuesubmissions).

### Plugin methods

#### plugin.forceOffline(offline)

Forces all requests for this plugin's project into offline mode, even when a connection is available.

#### plugin.isForcedOffline()

Returns true if this plugin is currently forced offline.

#### plugin.clearOfflineData()

Clears all offline data. This includes offline cached forms and submissions, as well as submissions waiting in the offline queue.

#### plugin.dequeueSubmissions()

Starts to process the submission queue. All requests in the offline submission queue will be sent in the order they were made. Successful requests will either resolve their original promise or trigger the [`offline.formSubmission`](#offlineformsubmission) event from `Formio.events`. A failed request will stop processing the queue and trigger the [`offline.formError`](#offlineformerror) event. The app must handle this event to resolve the failing requests and restart the queue.

#### plugin.submissionQueueLength()

Returns the number of submission requests currently in the offline queue.

#### plugin.getNextQueuedSubmission()

Returns the next request in the submission queue.

#### plugin.setNextQueuedSubmission(request)

Sets the next request in the submission queue to `request`.

You can use this to fix a failed submission and then call [`dequeueSubmissions()`](#plugindequeuesubmissions) to resubmit and continue the queue.

#### plugin.skipNextQueuedSubmission()

Discards the next request in the submission queue.

You can use this to ignore a failed submission and then call [`dequeueSubmissions()`](#plugindequeuesubmissions) to continue to the next queued request.


### Events

You can listen for these events by adding listeners to the `Formio.events` EventEmitter.

NOTE: if you are using the Angular ngFormio library, you can listen for these events in the Angular scope by adding `formio.` before each event name.

#### offline.queue

Triggered when a submission is added to the submission queue.

#### offline.dequeue

Triggered when the submission queue starts to process a submission.

#### offline.requeue

Triggered when a submission fails and is added back to the front of the submission queue. 

#### offline.formSubmission

Triggered when a queued submission is successfully submitted. This is not called if the original promise of the request can be resolved (in which case it behaves like a normal online submission).

#### offline.formError

Triggered when a queued submission returns an error. This means the app needs to either fix the submission or skip it, and restart the queue.

#### offline.queueEmpty

Triggered when the queue becomes empty after dequeuing.

### Request Options

#### skipQueue

You may set `skipQueue` to save a submission immediately, skipping the queue. This will disable offline queuing for that submission. For example:

```javascript
formio.saveSubmission(submission, {skipQueue: true});
```

If you are using the Angular ngFormio library, you can set the skipQueue option with formio-options:

```html
<formio src="userLoginForm" formio-options="{skipQueue: true}"></formio>
```
