---
title: Adding the Formio Module
book: userguide
chapter: angular
slug: formio-module
weight: 10
---
In order to embed your Form.io project in your angular application, you will need to add the formio module. The formio module will create all scopes, providers and directives needed to embed Form.io components within your app.

#### Bower

To add <code>formio</code> to your bower dependencies, run <code>bower install --save formio</code>.

#### Adding the dependencies

Form.io requires some dependencies on your HTML page to work properly. All of these dependencies can be found by looking at the [**formio** bower.json](https://github.com/formio/ngFormio/blob/develop/bower.json#L25) file. The easiest way to include all of these dependencies within your webpage is to use a tool called [Wiredep](https://github.com/taptapship/wiredep).

#### Wiredep

First you need to install wiredep.

```
  npm install --save wiredep
```

Next, add the following to your HTML page:

```html
  <html>
    <head>
      <!-- bower:css -->
      <!-- endbower -->
    </head>
    <body>
      <!-- bower:js -->
      <!-- endbower -->
    </body>
  </html>
```

Next, run the following command to wire up all the dependencies.

```
  ./node_modules/.bin/wiredep -s index.html
```

This should then wire all the dependencies into your page.

#### Example Page

To see this in action, [here is an example page](https://github.com/formio/examples.form.io/blob/master/simpleform/index.html) with all the dependencies already wired up for reference.

#### Initialize Angular

The next step is to initialize **formio** within your Angular application. This requires you to add the following to your angular.js declaration.

```javascript
angular.module('myApp', ['formio']);
```

And of course, if you are not using Angular for your full application, you will need to make sure that the application name is provided on the <code>&lt;body&gt;</code> tag.

```html
<body ng-app="myApp">

</body>
```
