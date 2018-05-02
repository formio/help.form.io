---
title: General Setup
book: tutorials
section: walkthroughs
chapter: authentication
slug: code
weight: 60
---
With the site structure in place, open up the home.ts component and replace t

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
    ]
  }
}
```
