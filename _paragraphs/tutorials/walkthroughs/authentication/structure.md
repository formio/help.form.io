---
title: Site Structure
book: tutorials
section: walkthroughs
chapter: authentication
slug: structure
weight: 50
---
To structure the application, we are going to create all the components and modules we need upfront. 
Since we're using the Angular's CLI tool, we can generate the necessary components via command line. 

We shall start by creating the home and navigation component. We will use the navigation to handle to send users to
our login, registration, password reset, and authenticated dashboard page.

```
ng g component home
ng g component navigation
```

Next, create a module that will be handle routing within the authentication system and another for the authenticated platform.
 
```
ng g module auth
ng g module platform
```

Finally, create the components that will handle auth forms.
 
```
ng g component auth/login
ng g component auth/register
ng g component auth/reset-mailer
ng g component auth/reset-password
```

Once done, the `src/app` structure should look like this, excluding css and spec.ts files:

  * home ▼
    * home.component.html
    * home.component.ts
  * navigation ▼
    * navigation.component.html
    * navigation.component.ts
  * auth ▼
    * login ▼
      * login.component.html
      * login.component.ts
    * register ▼
      * register.component.html
      * register.component.ts
    * reset-mailer ▼
      * reset-mailer.component.html
      * reset-mailer.component.ts
    * reset-password ▼
      * reset-password.component.html
      * reset-password.component.ts
    * auth.module.ts
  * app.component.html
  * app.component.ts
  * app.module.ts

Lastly, create a config.ts file in the src directory. This file serves as a references for the app and auth configuration.
If you have not already, create a new project inside your form.io account on [portal](https://portal.form.io). For the
purpose





