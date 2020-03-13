---
title: CosmosDB
book: tutorials
section: deployment
chapter: azure
slug: cosmos
weight: 2
---
Form.io requires a **MongoDB** compatible database to run its platform. While you could setup a stand alone MongoDB or even use [MongoDB Atlas](https://cloud.mongodb.com), for Azure, it is also perfectly reasonable to use **CosmosDB** for the database. Follow these instructions to setup a new database.

 - In the left hand column, click on the menu item that says **Azure Cosmos DB**
 - Click on the **+ Add** button
 - Create a new **ID**, then select **MongoDB** under the API selection, and then finally ensure that you select the **Existing Resource Group** and then select the resource group we just created, then click **Create** button.

   ![](/assets/img/integrations/azure/cosmos-create.png){: .img-fluid .img-thumbnail }

 - You will then wait a few minutes for your database to create.
 - After the database is done creating, you will now need to enable the **MongoDB Aggregation Framework** for this CosmosDB. Since this is a "Preview" feature, you can enable it by clicking on your created database, and then clicking **Preview Features**
 - Once you are there, you will then click on the **Enable** button next to the **MongoDB Aggregation Framework**

   ![](/assets/img/integrations/azure/cosmos-aggregation.png){: .img-fluid .img-thumbnail }

 - After this is complete, you will then **Connection String**.
 - You will now make a copy of the connection string, and then place it in a Text editor. Form.io does require that you use a standard connection string, so you will need to make a small change to what Azure provides you by adding your database name to the connection string. This is placed right after the ***formio.documents.azure.com:10255/*** and before the text ***?ssl=true***. It should look like the following.

   ```mongodb://formio:[PASSWORD]@formio.documents.azure.com:10255/formio?ssl=true&replicaSet=globaldb```

 - You will also need to add the variable **retrywrites=false** to your connection string as well as follows.

    ```mongodb://formio:[PASSWORD]@formio.documents.azure.com:10255/formio?ssl=true&replicaSet=globaldb&retrywrites=false```

 - Make sure you save this modified connection string in a Text editor for later usage.
 - Now that we have a Database ready to go, we will now create a new **Redis** deployment, which is needed for **PDF Server** deployments and analytics.
