---
title: Create an Application
book: intro
weight: 400
chapter: guide
layout: chapter
slug: createeventapp
---
To get started quickly in [Angular](https://angular.io), we recommend using the [Angular CLI](https://cli.angular.io/) tool to create our application. We can do this by typing the following within your terminal.

```
npm install -g @angular/cli
ng new eventmanager --style=scss
```

For the options, we will select the following

 - Would you like to add Angular routing? **Yes**

This will now create a new application within the folder **eventmananger**, we can navigate into that folder by typing the following in the terminal.

```
cd eventmanager
```


We will now bring in all of our dependencies into the application by typing the following within the application folder.

```
npm install --save @angular/elements bootstrap bootswatch font-awesome angular-formio
```

We can now setup the styles for our application by editing the following file.

***src/styles.scss***
```scss
@import "~bootswatch/dist/cosmo/_variables.scss";
@import "~bootstrap/scss/bootstrap.scss";
@import "~bootswatch/dist/cosmo/_bootswatch.scss";
$fa-font-path: '../node_modules/font-awesome/fonts';
@import '~font-awesome/scss/font-awesome';
```

We will now start our application by typing the following in the terminal.

```
ng serve
```

You should now be able to go to **http://localhost:4200** in your browser to see the default Angular page.

We can now create a home page, by typing the following in the terminal.

```
ng g component home
```

And then provide the following code in the following file.

***src/app/home/home.component.html***
```html
<div class="jumbotron">
  <h3>Event Registration Application</h3>
  <p>This is an example home page for the Event Registration Application</p>
</div>
```

And then add the following to the routes.

***src/app/app-routing.module.ts***
```ts
...
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];

...
```
