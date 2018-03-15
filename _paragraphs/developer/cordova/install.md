---
title: Cordova Install
book: developer
chapter: cordova
slug: cordova-install
weight: 20
---
The next step is to ensure that Cordova is installed on your computer so that you can create the cordova project and begin compiling to apps.

You can follow the more detailed instructions of how to install Cordova at [Create your first Cordova app](https://cordova.apache.org/docs/en/latest/guide/cli/index.html){:target:"_blank"}

Here are the basic steps. Run them from the root of your form.io project

```bash
# Install cordova's command line
npm install -g cordova
# Create the cordova project in the cordova directory
cordova create cordova
# Change to the cordova directory to make further changes
cd cordova
# Add iOS and Android platforms
cordova platform add ios --save
cordova platform add android --save
```

Next you'll want to install all the pre-requisites for building the applications. To check which pre-requisites are needed and their current status, run:

```bash
cordova requirements
```

Install the pre-requisites and rerun the command until all pre-requisites are met.

For information on installing the pre-requisites, see Cordova's documentation at

 * [Android](https://cordova.apache.org/docs/en/latest/guide/platforms/android/index.html){:target:"_blank"}
 * [iOS](https://cordova.apache.org/docs/en/latest/guide/platforms/ios/index.html){:target:"_blank"}
 * [Windows](https://cordova.apache.org/docs/en/latest/guide/platforms/win8/index.html){:target:"_blank"}
 * [Others](https://cordova.apache.org/docs/en/latest/index.html#develop-for-platforms){:target:"_blank"}
 
Cordova should now be ready to build applications.
