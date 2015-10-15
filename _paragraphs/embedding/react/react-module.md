---
title: Adding the React Module
book: userguide
chapter: react
slug: react-module
weight: 10
---
### npm

`React Formio` can be used on the server, or bundled for the client using an
npm-compatible packaging system such as [Browserify](http://browserify.org/) or
[webpack](http://webpack.github.io/).

```
npm install react-formio --save
```

### Browser bundle

The browser bundle exposes a global `Formio` variable and expects to find
a global `React` variable to work with.

You can find it in the [/dist directory](https://github.com/formio/react-formio/tree/master/dist/build).
