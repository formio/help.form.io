---
title: Form Manager SSO
book: userguide
chapter: portalsso
slug: manager
weight: 10
---
To enable the [Form Manager](/userguide/manager) with SAML SSO authentication, you will need to first navigate to your project, and just like you did for the Portal Base project above, configure this project with some SAML configuration. **Important:** Make sure that you configure a separate SSO application within your SAML provider to use the correct project urls instead of using the same SAML configuration provided in the previous step.

![](/assets/img/userguide/portalsso/managersaml.png){: .img-fluid .img-thumbnail }

After you do that, you will now need to provide the SSO configuration within your projects **Public Configuration** section.

![](/assets/img/userguide/portalsso/managerconfig.png){: .img-fluid .img-thumbnail }

Once this is done, you can now go to the following URL to see the Form Manager application.

    https://yourproject.yourdomain.com/manager
    
Or, if you are using subdirectory project path method, it may look like the following.

    https://yoursite.com/yourproject/manager
    
Once you do this, you will see that it will trigger the SAML SSO for the form manager application.
