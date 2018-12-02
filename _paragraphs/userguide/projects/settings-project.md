---
title: Project Settings
book: userguide
chapter: projects
slug: settings-project
weight: 30
---
Users can configure the settings for their Projects by clicking the **Settings** tab within the Project at the top right of the page. The Project settings are used to configure [Actions](#actions). Project settings currently include:

- General Settings
    - Here you can change the Title, Description of the Project, and CORS options.
    - **Note:** *Be careful when changing the subdomain, as it will change the base path of all APIs for your project. Only do this if you really know what you are doing.*
    - CORS
    - **CORS Note:** Here you can control which domains have access to make requests to your API. This setting will be sent with all API requests in the <code>Access-Control-Allow-Origin</code> header.
    - You can also export and delete a project from this page. Templates can be used to [create](#project-template) a new project. See the [Project Templates](#project-templates) section for more info.
- Roles (see the [Roles & Permissions](#roles-and-permissions) chapter separately)
- OAuth
    - Here you can enter your Client ID and Client Secret for the OAuth provider of your choice. These will be used in the [OAuth Action](#action-oauth)
- Email Providers
    - Here you have the flexibility to use your existing email provider to manage your communications. Enter the email credentials for the email provider of your choice and click Save Settings when done. See the [Email Action](#action-email) on how to use these email providers.
- File Storage
    - Form.io does not store files for your applications. If your forms contain a file component, you will need to set up where those files get stored.
- Data Connections
   - The Data Connections allow you to configure various integrations and their settings.
      - Databases
          - Here you can provide credentials to your Microsoft SQL Server or MySQL databases to be used with [SQL Actions](/userguide/actions/#action-sqlconnector).
      - Office 365 (Settings to integrate with Outlook and other 365 applications, see [Office 365 Integration Guide](/developer/integrations/office365/))
      - Hubspot
          - Here you can enter your Hubspot API Key to use [Hubspot Actions](/developer/integrations/hubspot/)
      - Atlassian
          - Here you can enter your credentials for [Atlassian Jira](/userguide/actions/#action-jira)
      - SQL Connector
          - Here you can enter the credentials for your [formio-sql](https://github.com/formio/formio-sql) instance.

![](/assets/img/project-settings.png){: .img-fluid .img-thumbnail }
