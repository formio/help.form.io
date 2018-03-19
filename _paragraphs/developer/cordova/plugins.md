---
title: Plugins
book: developer
chapter: cordova
slug: cordova-plugins
weight: 30
---
Cordova uses plugins to connect some device capabilities to your web application. In order to take advantage of these capabilities, you'll need to install the corresponding plugins.

If you have any file fields inside your application, you'll want to allow the app to access files, media and the camera so files can be uploaded to it. Use these plugins

```bash
cordova plugin add cordova-plugin-file --save
cordova plugin add cordova-plugin-media --save
cordova plugin add cordova-plugin-camera --save
cordova plugin add cordova-plugin-file-transfer --save
```

If your application uses gps to track the current location, you'll want this plugin.

```bash
cordova plugin add cordova-plugin-geolocation --save
```

If your application is using the offline mode plugin, you'll want to add support for indexedDB to iOS and older devices with this plugin.

```bash
cordova plugin add cordova-plugin-indexeddb-async --save
```

There are many more plugins available at [Cordova Plugins](https://cordova.apache.org/plugins/).
