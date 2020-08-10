---
title: Multiple Environments
book: developer
chapter: onpremise
slug: portal
weight: 50
---
When deploying the form.io platform, it is possible to enable the portal application as well. This includes form manager, formview pro and tenant manager if applicable. This application is the primary interface into your environments in your on premise servers. It is important to understand how to set this up correctly.

You should pick only one of your environments to be the Portal environment. This is typically the "Dev" environment since it will be the place all your developers will use to log in and manage the forms and data. Typically the Pre-prod and Prod environments are partitioned off and only available to certain employees responsible for deployments. 

There are a few differences between a Portal environment and a Remote environment.

#### Portal Environment
1. The environment variable ```PORTAL_ENABLED=true``` has been set.
2. The Portal application is served from the root of the environment.
3. A Portal Base project is automatically created within the database. This project is NOT counted against your license. It is where all of the users and teams will be stored for the Portal application. You should not add additional forms or resources in this project.
4. An admin user is created in the Portal Base project. You can set the email and password for this in the environment variables of ```ADMIN_EMAIL``` and ```ADMIN_PASSWORD```. This can only be set the first time the server is started with ```PORTAL_ENABLED``` set. Once it has been run, the environment variables can be removed and any subsequent changes to the admin user can be done by going to the Portal Base project and the User resource.

#### Remote Environment
1. The environement variable PORTAL_SECRET has been set to a random secure secret.
2. There is NO application served from the root of the environment. By default it will respond with ```[]```.
3. You will connect a project or stage to this environment by using the "On Premise Environment" option in the project settings. You will need to know the ```PORTAL_SECRET``` for the remote environment when setting it up.
4. You can set up multiple remote environments and use the portal environment to connect projects and stages to different remote environments.

#### Moving stages to remote environments
Once you have your Portal and Remote environments set up, create a project in Portal environment and create stages within the project that will go on the remote environments. Then go to a stage, go to settings and "On Premise Environmnent". Enter the URL for remote environment and the portal secret from the remote environment. Leave Project Path Type as "Subdirectories" and click "Continue". This should connect to the remote environment. Select "New Stage" and then press "Connect Stage". You can repeat this with other stages and other remote environments.  
