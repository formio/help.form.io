---
title: Project Settings
book: userguide
chapter: projects
slug: settings-project
weight: 30
---
Users can configure the settings for their Projects by clicking the **Settings** tab within the Project at the top right of the page. The Project settings are used to configure [Actions](#actions). Project settings currently include:

- General Settings
    - Here you can change the Title, Domain Name, and Description of the Project
    - **Note:** *Be careful when changing the subdomain, as it will change the base path of all APIs for your project. Only do this if you really know what you are doing.*
- Email Settings
    - Here you have the flexibility to use your existing email provider to manage your communications. Enter the email credentials for the email provider of your choice and click Save Settings when done. See the [Email Action](http://help.form.io/userguide/#action-email) on how to use these email providers.
- Roles (see the [Roles & Permissions](http://help.form.io/userguide/#roles-and-permissions) chapter separately)
- CORS
    - Here you can control which domains have access to make requests to your API. This setting will be sent with all API requests in the <code>Access-Control-Allow-Origin</code> header.
- Databases
    - Here you can provide credentials to your Microsoft SQL Server or MySQL databases to be used with [SQL Actions](http://help.form.io/userguide/#action-sql).
- Office 365 (Settings to integrate with Outlook and other 365 applications, see [Office 365 Integration Guide](http://help.form.io/integrations/#office365))

<img src="/assets/img/settings-project.png">
