---
title: Google Sheets Project
book: developer
section: integrations
chapter: googledrive
slug: sheets-api
weight: 5
---

To get your OAuth token, log in with you google credentials on [Google Developers Console](https://console.developers.google.com/){:target="_blank"}
 
Select your project you would like to use at the top of the page. If you do not have a project, you can usse this modal to create a new project by clicking **New Project** and fill out the required fields.

![](/assets/img/integrations/google/new-project.png){: .img-fluid .img-thumbnail }

Once you have created a new project, you will now click on **Library** and then select the **Google Sheets API** 

![](/assets/img/integrations/google/search-google-sheets.png){: .img-fluid .img-thumbnail }

Now, click **Enable** button to enable the sheets API.

![](/assets/img/integrations/google/sheets-enable.png){: .img-fluid .img-thumbnail }

Once, the API is enabled, you will now click on the **Credentials** section on the right sidebar.

![](/assets/img/integrations/google/sheets-credentials.png){: .img-fluid .img-thumbnail }

Next, you will click on the **Create Credentials** button drop-down and then select **OAuth client ID**

![](/assets/img/integrations/google/sheets-oauth-create.png){: .img-fluid .img-thumbnail }

Now, you will provide the **Web Application** information with the Redirect URL setup as **https://developers.google.com/oauthplayground** and click **Create**

![](/assets/img/integrations/google/sheets-oauth-web-client.png){: .img-fluid .img-thumbnail }

Save your **Client ID** and **Client Secret**

![](/assets/img/integrations/google/sheets-creds.png){: .img-fluid .img-thumbnail }

