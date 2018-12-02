---
title: Javascript Only Offline
book: developer
chapter: offline
slug: cordova
weight: 30
---
The offline plugin integrates directly with the Formio library so it is available without any framework as well. The following is an example html page that uses unpkg files to load all dependencies except the offline plugin. It uses a simple router (navigo) to create a few pages. It is an example of how to implement some of the offline functions and events to enable offline mode.

In order to run this, you will need to install the offline plugin into the node_modules folder.

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="//unpkg.com/formiojs@latest/dist/formio.full.min.css">
  <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <title>Form.io Offline Example</title>
</head>
<body>
<nav class="navbar navbar-default">
  <div class="container">
    <ul class="nav navbar-nav">
      <li><a href="" data-navigo>Form Entry</a></li>
      <li><a href="queue" data-navigo>Offline Queue (<span id="count">0</span>)</a></li>
      <li><a href="error" data-navigo>Offline Error</a></li>
      <li><a href="thanks" data-navigo>Thanks</a></li>
    </ul>
  </div>
</nav>
<div class="page-content">
  <div id="content" class="container">
  </div>
</div>
<!--<script type="text/javascript" src="cordova.js"></script>-->
<script type="text/javascript" src="//unpkg.com/formiojs@latest/dist/formio.full.min.js"></script>
<script type="text/javascript" src="//unpkg.com/navigo@latest/lib/navigo.min.js"></script>
<script type="text/javascript" src="node_modules/formiojs-plugin-offline/dist/formiojs-plugin-offline.js"></script>
<script type="text/javascript">
  var projectUrl = 'https://offline-demo.form.io';

  // Initialize a simple router.
  var router = new Navigo();

  // Configure the offline plugin.
  var offline = new FormioOfflineProject(projectUrl, 'project.json');
  Formio.registerPlugin(offline, 'offline-demo');

  var setOfflineCount = function() {
    offline.ready.then(function() {
      document.getElementById('count').innerHTML = offline.submissionQueueLength();
    });
  }

  // Update the count when items go through queue.
  Formio.events.on('offline.queue', setOfflineCount);
  Formio.events.on('offline.dequeue', setOfflineCount);
  Formio.events.on('offline.formSubmission', setOfflineCount);

  Formio.events.on('offline.queueEmpty', function() {
    // When queue is empty, go home.
    setOfflineCount();
    router.navigate();
  });

  // Normally error information would be passed as part of the route parameters but the simple router doesn't allow it.
  var errorItem = {};
  Formio.events.on('offline.formError', function(error, request) {
    // If an offline error occurs, go to the error page and present the submission that caused the error so it can be fixed.
    errorItem = {error: error, request: request.request};
    router.navigate('error');
  });

  router
    .on({
      'queue': offline.dequeueSubmissions,
      'error': function() {
        document.getElementById('content').innerHTML = '' +
          '<h2>An error occurred submitting the offline Queue</h2>' +
          '<p>Please fix it and continue</p>' +
          '<div class="alert alert-danger" id="alert"></div>' +
          '<div id="formio" />';
        document.getElementById('alert').innerHTML = "";

        errorItem.error.details.forEach(function(detail) {
          var element = document.createElement('div');
          element.innerHTML = detail.message;
          document.getElementById('alert').appendChild(element);
        });

        Formio.createForm(document.getElementById('formio'), errorItem.request.formUrl)
          .then(function(form) {
            // We will update the item in the queue instead of attempting a new submission.
            form.nosubmit = true;
            form.submission = errorItem.request.data;

            form.on('submit', function(submission) {
              errorItem = {};
              offline.dequeueSubmissions();
            })
          });
      },
      'thanks': function() {
        document.getElementById('content').innerHTML = 'Thanks';
      },
      '*': function() {
        document.getElementById('content').innerHTML = '<div id="formio"></div>';
        Formio.createForm(document.getElementById('formio'), projectUrl + '/survey')
          .then(function(form) {
            form.on('submitDone', function() {
              setOfflineCount();
              router.navigate('/thanks');
            })
          });
      }
    });

  // Init navigate home.
  router.navigate();
  // Init the count.
  setOfflineCount();

</script>
</body>
</html>
```
