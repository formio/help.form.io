---
title: Developer Portal SSO
book: userguide
chapter: portalsso
slug: developer-portal
weight: 10
---
To get started, you will first need to become familiar with how the **SAML** integration works with Form.io. You can read this documentation within the [SAML Single Sign On]({{ site.baseUrl }}/integrations/saml/) section. Once you are familiar with this, you will want to setup SAML integration within the **Portal Base** project which is created when you deploy a new portal with the PRIMARY=true environment variable. You will see this project when you log into the deployed portal when you authenticate using the ADMIN_EMAIL and ADMIN_PASS that you used when creating the deployed portal. This will looke like the following.

![](/assets/img/userguide/portalsso/portalbase.png){: .img-fluid .img-thumbnail }

When you click on this project, you will then want to configure the **SAML** configuration with the settings that you setup by walking through the SAML documentation above.

![](/assets/img/userguide/portalsso/portalsaml.png){: .img-fluid .img-thumbnail }

Now that you have setup your main portal project with the SAML configuration, you will now need to provide a single Environment variable to your deployment to enable the SSO portal. This environment is as follows.

    PORTAL_SSO=saml
    
For now, the only supported type is "saml" which should be the value of this environment variable. Once you have set this variable, then logout, you will then notice that the portal authenticates with the SAML SSO authentication.

The next item that can be configured for **SSO** is the Form Manager application.
