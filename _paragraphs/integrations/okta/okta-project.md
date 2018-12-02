---
title: Form.io Project Configurations
book: integrations
chapter: okta
slug: okta-formio
weight: 20
---
Now that you have created your Okta application, you can now configure your Form.io Project settings to allow for integration between
Okta and Form.io. We will use the OpenID Connect settings within your Project to make this configuration.

Within your Form.io project, click on **Project Settings** > **Authentication** > **OAuth** > **OpenID** and then provide credentials as follows.

You only need to fill out the following fields to get the SSO working.

{: .table .table-bordered .table-striped}
| Setting | Description | Example |
|---------|---------|
| Client ID | Client ID provided by Okta within your App Settings | 023ds0d2dslkef3sa0b9 |
| User Info (claims) URI | The Url to fetch the user information from Okta | https://{{ ORGANIZATION_NAME }}.okta.com/oauth2/v1/userinfo |
| Roles (Claim) | This is where you will provide your role mappings based on the Okta Group ID's created within the previous section. | Please see the image below for an example. |

When you are done filling out this information, this should look like the following.

![](/assets/img/integrations/okta/formio-project-openid.png){: .img-fluid .img-thumbnail }

Make sure you press the **Save Project** button to save your project settings.
