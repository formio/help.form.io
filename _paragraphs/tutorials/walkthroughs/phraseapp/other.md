---
title: Other Dependencies 
book: tutorials
section: walkthroughs
chapter: phraseapp
slug: other
weight: 50
---
While The following libraries are *optional*, we will be including them in this application as they add both
styling and structure to the application.

If you'd like to include [bootstrap styling](https://getbootstrap.com/docs/4.0/getting-started/introduction/) run the following command:

```
npm install --save bootstrap@^4.0.0
```

If you'd like to include [bootswatch templates](https://bootswatch.com/) run the following command: 

```
npm install --save bootswatch@^4.0.0
```

Once installed, you will need to include bootstrap and bootswatch libraries in the application by inserting the following
code in the `src/styles.scss` file:

```
@import "~bootswatch/dist/pulse/_variables.scss";
@import "~bootstrap/scss/bootstrap.scss";
@import "~bootswatch/dist/pulse/_bootswatch.scss";
```

Bootstrap requests [jquery](https://fontawesome.com/) so if you are planning on using the above dependency add:

```
npm install --save jquery@^3.3.0
```

If you would like to include [font-awesome](https://fontawesome.com/) to the project, please run the following command: 

```
npm install --save font-awesome@^4.7.0
```

Once installed, include font-awesome in the the ```angular-cli.json``` file at the root level.
 
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

With all of the dependencies installed, feel free to relaunch launch the application by running `ng serve`. 
You can leave the development server active while we start working inside the `src` directory as the project
will now automatically update as we make changes to the application.


