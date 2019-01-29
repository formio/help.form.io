---
title: Azure Blob
book: tutorials
section: deployment
chapter: azure
slug: blob
weight: 4
---
In order to get PDF File uploads working, you will now need to create an **Azure Blob** to store all of the pdf files that are uploaded.

To setup this, please perform the following.

 - Click on **Storage Accounts** in the left navigation bar, then click **+ Add**
 - Give your storage a **Name**, and then select **Blob Storage** under **Account Kind**
 - Select your preferred replication method
 - Make sure you select **Enabled** on **Secure transfer required**
 - Select you existing **Resource Group**
 - Click **Create**
 - This will now create a new **Blob Storage** for your Azure Account
 - Once it is created, click on the created instance, and then click on **Access Keys**
 - Make sure you save the first key in your Text editor.
 
   ![](/assets/img/integrations/azure/blob-keys.png){: .img-fluid .img-thumbnail }
   
   
**NOTE:** You can also use the following above to provide settings for the File Upload component. The documentation for this is provided in our 

[Azure File Upload Documentation](/integrations/filestorage/#azure){: .btn .btn-primary }

 You are now ready to setup your hosted Virtual Machine.
