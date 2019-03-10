---
title: Create Application
book: integrations
chapter: saml
slug: app
weight: 14
---
We can create a new application by clicking on **Apps** and then **Add Apps**

![](/assets/img/integrations/saml/onelogin-addapps.png){: .img-fluid .img-thumbnail }

On the next page, type **saml test** in the find bar and press Enter to search. Once the results show up, select the one that says **SAML Test Connector (ldP)**

![](/assets/img/integrations/saml/onelogin-find.png){: .img-fluid .img-thumbnail }

On the next page, press **Save**.

![](/assets/img/integrations/saml/onelogin-saveapp.png){: .img-fluid .img-thumbnail }

Next we will configure the ACS URL by clicking on **Configuration** and then providing the following url to the ACS url.

    https://YOURPROJECT.form.io/saml/acs

where you will replace **YOURPROJECT** with the subdomain of your project on Form.io. If you have deployed the API server, then this will simply be the URL to your project followed with ```saml/acs```

Next for the **ACS URL Validator** we will just copy the string above, and just put a backslash in front of all the ```/``` as follows.

    https:\/\/YOURPROJECT.form.io\/saml\/acs

You will now need to configure the **RelayState** for your project to point to the URL of your hosted application. This may look like the following.

    https://app.yoursite.com

The configuration will look like the following.

![](/assets/img/integrations/saml/onelogin-config.png){: .img-fluid .img-thumbnail }

We will now add all **Employee** roles to have access to this application, we do this by clicking on **Access** and then click on the **Employee** role under the Role-Based Policy section.

![](/assets/img/integrations/saml/onelogin-appaccess.png){: .img-fluid .img-thumbnail }

Make sure you **Save** the application after making this change.

We can now verify that our user is part of this application by going to the **Users** section where we will see our user.

![](/assets/img/integrations/saml/onelogin-appusers.png){: .img-fluid .img-thumbnail }

Next, we will need to ensure that our **roles** field is included within the **Parameters** of our application. We can do this by clicking on the **Parameters** link and then clicking on **Add Parameter**

![](/assets/img/integrations/saml/onelogin-params.png){: .img-fluid .img-thumbnail }

For the name of the field, we will just call it **roles**

![](/assets/img/integrations/saml/onelogin-rolesfield.png){: .img-fluid .img-thumbnail }

Once you click **Save**, we will now want to ensure that the value of this field points to the user **User Roles** property. You will also want to make sure you click the **Include in SAML assertion** checkbox. Now press **Save**

![](/assets/img/integrations/saml/onelogin-userroles.png){: .img-fluid .img-thumbnail }

Next, we will make sure the **id** field is provided.

![](/assets/img/integrations/saml/onelogin-idfield.png){: .img-fluid .img-thumbnail }

For OneLogin, we can just use the OneLogin ID as the value for this field.

![](/assets/img/integrations/saml/onelogin-addid.png){: .img-fluid .img-thumbnail }

Next we will want to make sure we save our application by clicking on **Save** button.

After this is done, we can now download our **SAML Metadata** to be used when we configure this within our Form.io project. To do this, we will click on the **More Actions** button and then select **SAML Metadata**.

![](/assets/img/integrations/saml/onelogin-saml.png){: .img-fluid .img-thumbnail }

We will need to save this file for our project configuration, which is what we will setup next.

We are now done with our work within **OneLogin**. It is now important to **Logout** of our account since it will cause problems when performing the SSO later in this tutorial.

After you are done logging out, we will now move over to Form.io to configure our project.
