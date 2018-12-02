---
title: Create an Okta Application
book: integrations
chapter: okta
slug: okta-app
weight: 10
---
The fastest way to get started with trying out Okta is to create a trial account by going to https://okta.com and then clicking on the "Try Okta" button.

This will walk you through a new Account creation which you can setup for your Organization.

Once you create a new Okta account, your first step will be to create a new application within the Okta interface. From
your main dashboard page, go to the **Admin** section.

![](/assets/img/integrations/okta/okta-admin-button.png){: .img-fluid .img-thumbnail }

Now then click on **Applications** menu, and then click on the **Add Application** button.

![](/assets/img/integrations/okta/add-application.png){: .img-fluid .img-thumbnail }

Now click **Create New App** within the Applications section.

![](/assets/img/integrations/okta/okta-create-new-app.png){: .img-fluid .img-thumbnail }

Within the Create Application modal, make sure to select **Single Page App (SPA)** from the Platform dropdown, and then click **Create**

![](/assets/img/integrations/okta/create-spa-app.png){: .img-fluid .img-thumbnail }

In the next page, you will want to provide a title for your application, upload a logo, and then provide the **Login redirect URIs** to the URL of your hosted application. This is typically just the URL of your hosted application. If you are developing locally, then this can be the *localhost* URL of your application.

![](/assets/img/integrations/okta/app-general-settings.png){: .img-fluid .img-thumbnail }

Now click the **Save** button and it will create your application. 

