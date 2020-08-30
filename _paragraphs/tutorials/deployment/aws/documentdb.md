---
title: DocumentDB
book: tutorials
section: deployment
chapter: aws
slug: aws-db
weight: 8
---
Before we start our deployment, we will first need to create a Database to store all of our Forms and Submissions within our Form.io deployment. We will use the fantastic [DocumentDB](https://aws.amazon.com/documentdb/) to serve as our central database.

To get this setup, please follow the following instructions.

 - Within your AWS Console, type **DocumentDB** and click on the link that says **Amazon DocumentDB**

    ![](/assets/img/integrations/aws/eb/dbsearch.png){: .img-fluid .img-thumbnail }

 - Now that you are within the Amazon DocumentDB **Clusters** section, click on the link that says **Create**

    ![](/assets/img/integrations/aws/eb/newcluster.png){: .img-fluid .img-thumbnail }

 - In the next section, provide a **Master username** and a secure password, then press **Create Cluster**

    ![](/assets/img/integrations/aws/eb/createcluster.png){: .img-fluid .img-thumbnail }

 - Now that our DocumentDB cluster is created, we will now click on the cluster link, and then copy the application connection string. It should look like the following.

    ```
    mongodb://formio:<insertYourPassword>@docdb-2019-02-05-03-07-17.cluster-otsyrtio9xoe.us-east-1.docdb.amazonaws.com:27017/?ssl_ca_certs=rds-combined-ca-bundle.pem&replicaSet=rs0
    ```

 - Next, we will want to change this connection string to be a standard connection string. We will do this by first removing everything after the ":27017/", and then adding our database name to the end of ```:27017/```. We can pick any name here, but for this example, lets use **formio**

    ```
    mongodb://formio:<insertYourPassword>@docdb-2019-02-05-03-07-17.cluster-otsyrtio9xoe.us-east-1.docdb.amazonaws.com:27017/formio
    ```

 - Now, we will want to replace ```<insertYourPassword>``` with the password you chose above when you created the cluster.

    ```
    mongodb://formio:badpassword@docdb-2019-02-05-03-07-17.cluster-otsyrtio9xoe.us-east-1.docdb.amazonaws.com:27017/formio
    ```

 - Finally, we will want to add ```ssl=true``` to the end of the url to indicate that we have a database connection over SSL.

    ```
    mongodb://formio:badpassword@docdb-2019-02-05-03-07-17.cluster-otsyrtio9xoe.us-east-1.docdb.amazonaws.com:27017/formio?ssl=true
    ```

 - Make sure to copy this connection string for use later.
