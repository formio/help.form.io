---
title: Project Configuration
book: integrations
chapter: saml
slug: app
weight: 16
---
Within your Form.io project, we will now click on **Settings** then click on **Authentication** and then **SAML**

![](/assets/img/integrations/saml/formio-settings.png){: .img-fluid .img-thumbnail }

For the **Identity Provider XML** we will copy the contents of the **SAML Metadata** that we downloaded previously and paste that within this textarea.

![](/assets/img/integrations/saml/formio-metadata.png){: .img-fluid .img-thumbnail }

For the field **ID Path** we can just leave them blank since the OneLogin paths match the defaults.

The next section **SAML Role**, we will add our Employee role mapped to our **Authenticated** role within Form.io. This could be any role that is within the project including any custom roles that you create.

![](/assets/img/integrations/saml/formio-roles.png){: .img-fluid .img-thumbnail }

Next press **Save Settings**

We will now provide the code to our application that will perform a Single Sign On.
