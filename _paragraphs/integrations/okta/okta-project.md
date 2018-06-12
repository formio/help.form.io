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

{: .table .table-bordered .table-striped}
| Setting | Description | Example |
|---------|---------|
| Authorize URI | The OpenID Authorization URL | https://{{ ORGANIZATION_NAME }}.okta.com/oauth2/default/v1/authorize |
| Token URI | The OpenID Token URI | https://{{ ORGANIZATION_NAME }}.okta.com/oauth2/default/v1/token |
| Client ID | Client ID provided by Okta within your App Settings | 023ds0d2dslkef3sa0b9 |
| Client Secret | Client Secret provided by Okta within your App Settings | GS2trXkLozkCp5YlesOBUioAb4HomAOWD4k3oids |
| User Info (claims) URI | The Url to fetch the user information from Okta | https://{{ ORGANIZATION_NAME }}.okta.com/oauth2/default/v1/userinfo |
| Scope | A space-separated list of elements to fetch from the User Info URI | openid email phone address groups info |
| Roles (Claim) | This is where you will provide your role mappings based on the Okta Group ID's created within the previous section. | Please see the image below for an example. |

When you are done filling out this information, this should look like the following.

![](/assets/img/integrations/okta/formio-project-openid.png)