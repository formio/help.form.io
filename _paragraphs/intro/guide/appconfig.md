---
title: Application Configuration
book: intro
weight: 410
chapter: guide
layout: chapter
slug: appconfig
---
Now that we have an application running, we will need create a configuration file so that we can tell the application which Form.io project we are pointed to.

To do this, we will create a new **config.ts** file as follows.

***src/app/config.ts***
```ts
export const AppConfig = {
  appUrl: 'https://yourproject.form.io',
  apiUrl: 'https://api.form.io'
};
```

You will need to make sure that you replace "yourproject" with the name of your Project URL which you can find at the following location within your Project page.

![](/assets/img/userguide/projecturl.png){: .img-fluid .img-thumbnail }
