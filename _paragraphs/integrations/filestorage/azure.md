---
title: Azure Blob
book: integrations
chapter: filestorage
slug: azure
weight: 100
---
The Azure Blob file upload system allows you to upload files from your hosted forms directly to an Azure Blob storage account. Here are the steps to setup this feature functionality.

#### Azure Portal
Before we begin, you must create or have an existing account within [Microsoft Azure](https://portal.azure.com)

#### Create new File Service

 - Once we are in the Azure portal interface, we will want to go click on **Storage Accounts** and add a new storage account.
    ![](/assets/img/integrations/azure/storage/create-storage.png){: .img-fluid .img-thumbnail }
 - Next click on the **Create** button to create the new storage account.
 - After this operation has been completed, we will now need to click on that storage account, then then click on **Blobs** under the **Blob Service** section, then click **+ Container**.
    ![](/assets/img/integrations/azure/storage/blob-storage.png){: .img-fluid .img-thumbnail }
 - Next, create a new Container by clicking on **+Container** and then provide a name for your container.
    ![](/assets/img/integrations/azure/storage/blob-container.png){: .img-fluid .img-thumbnail }
 - Next, we will need to ensure that we can upload files from the domain of our application, to do this, we will configure the **CORS** section with the domain where we are hosting our application as well as Form.io portal. To do this, we will click on the CORS section, and configure the Blob Storage cors as follows.
    ![](/assets/img/integrations/azure/storage/blob-cors.png){: .img-fluid .img-thumbnail }
 - Now, we will click on **Access Keys** and copy the following credentials for use later.
    ![](/assets/img/integrations/azure/storage/blob-access-keys.png){: .img-fluid .img-thumbnail }

#### Enter Azure Project Settings

 - On form.io go to your Project Settings page and Click on **Integrations &#10072; File Storage &#10072; Azure Blob**
 - Enter the information that you copied in the previous configurations as follows.
   ![](/assets/img/integrations/azure/storage/formio-settings.png){: .img-fluid .img-thumbnail }

 - Now make sure to **Save** the project settings.
 - Now for every **File** component that you add to a form, you will need to select the **Azure File Services** Storage dropdown as follows.
   ![](/assets/img/integrations/azure/storage/file-component.png){: .img-fluid .img-thumbnail }
   
