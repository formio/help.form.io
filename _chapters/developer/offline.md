---
title: Developer Info
subtitle: Offline Plugin
book: developer
weight: 30
chapter: offline
layout: chapter
---
We provide a plugin to users with Enterprise projects that enables their applications to request and submit forms offline.

The plugin provides offline mode support for a single project. Offline requests will automatically kick in when a request fails due to a network error and serve data cached offline, if available. You may also create/edit/delete submissions while offline, and the requests will be queued to be sent when the app goes back online.

### Indexeddb
The offline plugin uses [indexeddb](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API). This storage mechanism was chosen because it is supported by all browsers, is similar in functionality to mongodb and has no hard coded usage limits in any browsers. Unlike most other browser storage solutions, when the amount of data in indexeddb gets close to full it will prompt the user to allow more data usage. This allows very large amounts of data to be stored in indexeddb.

### Browser Compatibility
Indexeddb is compatible with all modern browser.


- Chrome v38+
- Safari 7.1+
- IE 10+
- Firefox 13+

The offline plugin operates in two parts. First, queueing any submissions that fail due to a network connect, and second, caching all submissions from the server so they are available when offline.

### Submission Queue

Whenever a submission is made, the submission is added to the end of the offline queue and the queue is attempted to be flushed to the server. If a network error occurs it will simply stop and leave the submission in the queue for the next try. The offline queue is a first in first out queue so the first item added will be the first sent to the server.

In the event that a submission error occurs when attempting to send the submission to the server, such as a validation failure, the "offline.formError" event will be triggered. This will then stop the queue flush and wait for the user to fix the error before proceeding.

### Submission Caching

When submissions are fetched from the server the request is first sent to the server. If a network error occurs the request is redirected to the offline submission cache and the cached results are returned instead. If the request succeeded from the server the returned submissions are added the the offline cache and the results are returned to the application.