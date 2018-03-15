---
title: Offline Plugin API
book: developer
chapter: offline
slug: offlineapi
weight: 10
---
The offline mode plugin uses the form.io renderer plugin system to hook into each request using the following registration process.

```javascript
var plugin = new FormioOfflineProject('https://myproject.form.io', 'path/to/project.json');
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
