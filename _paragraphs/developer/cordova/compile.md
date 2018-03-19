---
title: Compiling
book: developer
chapter: cordova
slug: cordova-compile
weight: 40
---
In order to compile mobile applications with your project inside of it, you will need to build the project and then copy the resulting files into the cordova's www directory. If you are using one of our templates and followed the steps above to create the cordova project in the **cordova** directory, you can do this by running the following commands from your application's root.

```bash
gulp build
rm -rf cordova/www
cp -r dist cordova/www
```

Each time you make a change to your application and want to deploy those changes you will need to re-build and re-copy the source into the cordova www directory.

Finally, run the compilation for each platform you want to support.

```bash
cordova build ios
cordova build android
```

And emulate the apps to preview them.

```bash
cordova emulate ios
```

```bash
cordova emulate android
```

For complete documentation on compiling cordova applications, see [Cordova Build](https://cordova.apache.org/docs/en/latest/reference/cordova-cli/index.html#cordova-build-command)
