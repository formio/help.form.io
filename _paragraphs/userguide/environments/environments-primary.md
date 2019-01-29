---
title: On Premise Portal and Primary Environment
book: userguide
chapter: environments
slug: environments-primary
weight: 15
---
You can enable the portal interface (Application UI) of the server for your on premise server. This is available in v6.1.0 and above. 

#### Design
When enabling the portal it is important to think about how you want your environment architecture to work. Typically you will set up one environment as your primary environment and the rest as secondary environments. Please note that environments can have multiple servers which should share the same PRIMARY setting. 

```
            Primary
               |
        |--------------|
    Secondary       Secondary
   
```

You should only have ONE primary environment installed. Each primary environment will have a different set of users, teams and projects so installing multiple primary environments can result in multiple user accounts and confusion.

#### Difference between Primary and Secondary Environments

A primary environment has additional features and functionality that a secondary server does not.

 - **Portal Base Project** - A project is installed on the Primary Environment called "Portal Base". This project is the project that contains the user accounts, login and register forms for the environment. You can use this to manage users and access to the portal application. This project will contain the users, admins and teams of the portal.
 - **Portal Application** - The portal application will be served from the root of the server. If you have a DNS entry of forms.myserver.com pointed to the environment, http://forms.myserver.com can be used to access the portal application.
 
A secondary environment will NOT have the portal app and project available on it.
 
#### Setting an environment as Primary or Secondary

When setting up your primary environment, you will need to set an additional environment variable of ```PRIMARY=true```. When a server is started like this it will automatically install the Portal Base project and set up a "super admin" user. The username and password for the "super admin" user will be output during the install process. If you want to specify the admin and password, you can set them as environment variables before the first time the install is run. The variables are ```ADMIN_EMAIL``` and ```ADMIN_PASS```

To start a server a Secondary, don't set the ```PRIMARY``` environment variable or set it to false. Be sure to set ```PORTAL_SECRET``` on your secondary environment. This will be used to connect the Secondary Environment to your Primary Environment.

#### Connecting a Secondary Environment to a Primary Environment

To add a project to a secondary environment, first, create it on the Primary Environment using the On Premise Portal. Then, go to Settings -> Stage Settings -> On Premise Environments. Connect it to the Secondary Environment using the url and portal secret for the Secondary Environment. This will copy over all form and resource definitions to the secondary environment.

#### Migrating existing environments to on premise portal/primary environments

If you have been using our hosted portal to manage your on premise projects, you can follow the same process for setting up an on premise portal. There will be two additional steps you need to do to finish adding on premise portal.

1. Set up users and teams. Your on premise portal will start out without any users and teams. You will need to set up the users and teams instead of using the hosted users and teams. You can also connect the Portal Base / User Login Form to connect to LDAP or OAuth.
2. Set an owner on existing projects. Your existing projects will still existing in the database but the super admin user will not have access to them so they won't show up within the portal. To fix this, get the user id of the super admin and change the "owner" property of each project in the database. The method to do this is different depending on the type of access you have to the database. 
