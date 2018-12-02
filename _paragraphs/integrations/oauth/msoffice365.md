---
title: Microsoft Office 365
book: integrations
chapter: oauth
slug: msoffice365
weight: 850
---

[Create your Office 365 Business Account](https://products.office.com/en-us/business/compare-office-365-for-business-plans){:target="_blank"}
[Associate your Office 365 account with Azure](https://msdn.microsoft.com/office/office365/HowTo/setup-development-environment#bk_CreateAzureSubscription){:target="_blank"}
Sign into the [Azure Management Portal](https://manage.windowsazure.com/){:target="_blank"} using your Office 365 Developer Site credentials.

Click Active Directory on the left menu, then click on the directory for your Office 365 developer site.

![](/assets/img/office365/active-directory-new.png){: .img-fluid .img-thumbnail }

Create a new Active Directory "Directory".

![](/assets/img/office365/active-directory-create.png){: .img-fluid .img-thumbnail }

Fill out your application information.

![](/assets/img/office365/active-directory-app.png){: .img-fluid .img-thumbnail }

Click on "Applications", then click on "Add" to create a new application.

![](/assets/img/office365/application-add-app.png){: .img-fluid .img-thumbnail }

Click on the link that says "Add application my organization is developing".

![](/assets/img/office365/application-app-type.png){: .img-fluid .img-thumbnail }

Give your application a name.

![](/assets/img/office365/application-app-name.png){: .img-fluid .img-thumbnail }

Provide an application URL. It can be **localhost** if you are just using it for **&lt;<span class="text-primary">form</span>.<span class="text-secondary">io</span>&gt;** integration

![](/assets/img/office365/application-app-uri.png){: .img-fluid .img-thumbnail }

Click on ***Configure*** within your application

Add a new key for 2 years

![](/assets/img/oauth/office365-client-secret.png){: .img-fluid .img-thumbnail }

Set the **Reply URL** as your application's **hostname**. OAuth will not work unless you enter the same hostname as the one your application is served from. Using `localhost` for running your app locally is acceptable, but make sure the right port is provided.

![](/assets/img/oauth/office365-reply-url.png){: .img-fluid .img-thumbnail }

Then click on the ***Add application*** button.

![](/assets/img/office365/application-add-app-perms.png){: .img-fluid .img-thumbnail }

Click on ***Office 365 Exchange Online*** and ***Office 365 unified API*** permissions and then click the ***Save*** icon.

![](/assets/img/office365/application-permissions.png){: .img-fluid .img-thumbnail }

Enable the appropriate application permissions, and then press ***Save***.

![](/assets/img/office365/application-enable-perms.png){: .img-fluid .img-thumbnail }

Press ***Save***.

![](/assets/img/office365/application-perms-save.png){: .img-fluid .img-thumbnail }

Take note of the Client ID and the key you added. These are the Client ID and Client Secret, respectively, that should be entered in your Project Settings for Microsoft Office 365 Oauth.

