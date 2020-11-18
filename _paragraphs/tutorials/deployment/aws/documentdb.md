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

 - In the next section, select **3.6.0** for the **Engine Version**.  4.0.0 support is coming soon.

    ![](/assets/img/integrations/aws/eb/dbversion.png){: .img-fluid .img-thumbnail }

 - In the next section, provide a **Master username** and a secure password, then press **Create Cluster**

    ![](/assets/img/integrations/aws/eb/createcluster.png){: .img-fluid .img-thumbnail }

 - Now that our DocumentDB cluster is created, we will now click on the cluster link, and then copy the application connection string. It should look like the following.

        mongodb://formio:<insertYourPassword>@docdb-2019-02-05-03-07-17.cluster-otsyrtio9xoe.us-east-1.docdb.amazonaws.com:27017/?ssl=true&ssl_ca_certs=rds-combined-ca-bundle.pem&replicaSet=rs0&readPreference=secondaryPreferred&retryWrites=false

 - Next, we will want to add our database name to the connection string. We can pick any name here, but for this example, lets use **formio**, and we will place it right before the "?".

        mongodb://formio:<insertYourPassword>@docdb-2019-02-05-03-07-17.cluster-otsyrtio9xoe.us-east-1.docdb.amazonaws.com:27017/formio?ssl=true&ssl_ca_certs=rds-combined-ca-bundle.pem&replicaSet=rs0&readPreference=secondaryPreferred&retryWrites=false

 - Next, we will want to turn on ```retryWrites``` by setting this to ```true```

        mongodb://formio:<insertYourPassword>@docdb-2019-02-05-03-07-17.cluster-otsyrtio9xoe.us-east-1.docdb.amazonaws.com:27017/formio?ssl=true&ssl_ca_certs=rds-combined-ca-bundle.pem&replicaSet=rs0&readPreference=secondaryPreferred&retryWrites=true

 - Finally, we will want to replace ```<insertYourPassword>``` with the password you chose above when you created the cluster.

        mongodb://formio:badpassword@docdb-2019-02-05-03-07-17.cluster-otsyrtio9xoe.us-east-1.docdb.amazonaws.com:27017/formio?ssl=true&ssl_ca_certs=rds-combined-ca-bundle.pem&replicaSet=rs0&readPreference=secondaryPreferred&retryWrites=false

 - Make sure to copy this connection string for use later.
