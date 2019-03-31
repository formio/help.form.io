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

#### Form Manager Configurations
You can also use the **Public Configuration** to provide any of the following configurations, which will customize how the Form manager behaves.

{: .table .table-bordered .table-striped}
| Setting | Description | Example |
|---------|-------------|---------|
| title | The title you would like to give to the Form Manager Application | Form Manager |
| logo | The url for the logo to present within the Form Manager | https://manager.form.io/assets/logo.png |
| logoHeight | The height of the logo within the Form Manager | 40px |
| logout | The Logout URL which will redirect when the user clicks logout. | https://yourapplication.com/logout |
| js | The URL to a custom JavaScript file that allows for custom components and logic. | https://yoursite.com/js/custom.js |
| css | The URL to a custom CSS file for custom styling. This can also be used to change the Bootswatch theme as follows. | assets/lib/bootswatch/dist/cosmo/bootstrap.min.css |
| navbar | The class to apply to the Navbar to allow for inverted, etc. | navbar-dark bg-primary |
| sso | The type of Single Sign On to perform. Currently only supports "saml". | saml |
| ssoProject | The project that will be used as the Authentication project for the Form Manager application. | https://yourdomain.com/formio |
| environments | A JSON string list of environments that you would like for the Form Manager to control | [{"name":"Staging","url":"http://localhost:3000/humanresources"},{"name":"Public","url":"http://localhost:3000/stage-humanresources"},{"name":"Internal","url":"http://localhost:3000/test-humanresources"}] |
| userIndicator | An HTML indicator that you would like to have for the user indicator within the navbar of the application | <i class="fa fa-user"></i> {{ user.data.email }} |

Once this is done, you can now go to the following URL to see the Form Manager application.

    https://yourproject.yourdomain.com/manager
    
Or, if you are using subdirectory project path method, it may look like the following.

    https://yoursite.com/yourproject/manager
    
Once you do this, you will see that it will trigger the SAML SSO for the form manager application.

#### Multi-Tenant Configuration
Using the Form Manager in combination with the Portal SSO can be utilized within a Multi-tenant setup where each tenant has access to their Projects within the deployed portal, and then within each project they have access to the Form Manager application within each project. To enable this configuration, you must do the following.

 - First, configure your Portal to allow for ```PORTAL_SSO``` as described in the section above.
 - Next create a new project for the Tenant, and then create a new ***Team***, enable ***SSO Team*** configuration, and then assign that team to the project as ***Project Admin***.
 - Now, within each project, you can setup multiple "stages" that you wish the form builders to be able to "save to". Make sure you remember the API domains for each of the stages within each tenant project.
 - Next, you will navigate to the ***Public Project Configurations*** section and provide the following configs.
 
 {: .table .table-bordered .table-striped}
 | Setting | Value |
 |---------|-------------|
 | sso | saml |
 | ssoProject | https://yourdomain.com/formio |
 | environments | [{"name":"Staging","url":"https://yourdomain.com/stage-yourproject"},{"name":"Public","url":"https://yourdomain.com/yourproject"},{"name":"Internal","url":"https://yourdomain.com/test-yourproject"}] |

This will make it so that every tenant user will still authenticate with the main SAML configuration to then gain access to their main project as well as each stage when managing the forms using the ***Form Manager*** application.
