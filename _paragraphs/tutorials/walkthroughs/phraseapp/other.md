---
title: Other Dependencies 
book: tutorials
section: walkthroughs
chapter: phraseapp
slug: other
weight: 50
---
While The following libraries are *optional*, we'll be including them in this application as they add some
styling to the application and structure to our application.

If you'd like to include [bootstrap styling](https://getbootstrap.com/docs/4.0/getting-started/introduction/) run the following command:

```
npm install --save bootstrap --version ^4.0.0
```

If you'd like to include [bootswatch templates](https://bootswatch.com/) run the following command: 

```
npm install --save bootswatch --version ^4.0.0
```

Once installed, you'll need to include bootstrap and bootswatch in your application by including the following
in the `src/styles.scss` directory: 

```
@import "~bootswatch/dist/pulse/_variables.scss";
@import "~bootstrap/scss/bootstrap.scss";
@import "~bootswatch/dist/pulse/_bootswatch.scss";
```

if you'd like to include [font-awesome](https://fontawesome.com/) run the following command: 

```
npm install --save font-awsome --version ^4.7.0
```

Once installed, you'll need to include font-awesome in your application by including the following in your
```angular-cli.json``` file at the root level.
 
```
{
  "apps": {
    "styles": [
      "styles.scss",
      "../node_modules/font-awesome/scss/font-awesome.scss"
    ],
    "addons": [
      "../node_modules/font-awesome/fonts/*.+(otf|eot|svg|ttf|woff|woff2)"
    ],
    "scripts": [
      "../node_modules/jquery/dist/jquery.js",
      "../node_modules/bootstrap/dist/js/bootstrap.js"
    ],
  }
}
```

With all of our dependencies installed, feel free to relaunch launch the application with `ng serve`. 
You can leave it running while we working in another terminal instance as the application will recompile 
automatically while we continue to make changes to the `src` directory. 
 
