---
title: Docker Deployment
book: tutorials
section: deployment
chapter: bluemix
slug: bluemix-docker
weight: 20
---
By default, your application will be running with all API traffic directed toward the [https://form.io](https://form.io) domain. In many cases, you may want to have your application submit the forms and data to your own backend with your own database. It is this reason we provide a robust On-premise/Private Cloud deployment using a very well known technology called [Docker](https://www.docker.com/). This technology allows you to spin up the Form.io infrastructure within your own backend and point all the forms and data to that deployment. IBM BlueMix offers a great solution for Docker deployments, which is what we will cover in this next section.

### DNS Configuration
Before you begin, you will need to dedicate a few sub-domains to the Form.io platform. You will need to point these sub-domains to BlueMix. To do this, you will need to create two separate A records which are as follows.

<table class="table table-striped">
<thead>
  <tr>
    <th>Hostname</th>
    <th>Description</th>
    <th>Type</th>
    <th>Value</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>api</td>
    <td>The API subdomain</td>
    <td>A</td>
    <td>75.126.81.68</td>
  </tr>
  <tr>
    <td>formio</td>
    <td>The core Form.io project</td>
    <td>A</td>
    <td>75.126.81.68</td>
  </tr>
  <tr>
    <td>&lt;project subdomain&gt;</td>
    <td>Replace &lt;project subdomain&gt; with the subdomain name of your project within Form.io</td>
    <td>A</td>
    <td>75.126.81.68</td>
  </tr>
</tbody>
</table>

Once you have your domain name established, you will now need to add that domain to your BlueMix account. You can do this within the **Account** >> **Manage Organizations** >> **Domains** section of BlueMix. Once you add the domain, you are now ready to register the Docker container.

### Docker Container Registration

The first thing you will do to get started is to log into your BlueMix account and click on ***Start Container*** within your dashboard, and then on the next page click ***Add your own***

<img src="/assets/img/developer/deployments/bluemix/bluemix-startcontainer.png" style="width:600px" />

<img src="/assets/img/developer/deployments/bluemix/bluemix-addown.png" style="width:400px" />

Next, you will provide a name for your docker image within the BlueMix environement.

<img src="/assets/img/developer/deployments/bluemix/bluemix-dockername.png" style="width:400px" />

To get started, you will need to download both [Docker](https://docker.com) as well as the [Cloud Foundry CLI](https://github.com/cloudfoundry/cli/releases). The best way to get everything setup is to walk through the instructions provided @ [https://console.ng.bluemix.net/docs/containers/container_cli_cfic.html](https://console.ng.bluemix.net/docs/containers/container_cli_cfic.html)

```
cf login
cf ic init
```

Next you will pull in the Form.io Docker Image (***NOTE: You must have a Commercial License to pull in the Form.io Docker image***), then tag it, and then push it to your Private BlueHost account.

```
docker pull formio/formio-enterprise
docker tag formio/formio-enterprise registry.ng.bluemix.net/[YOUR NAMESPACE]/formio-enterprise
docker push registry.ng.bluemix.net/[YOUR NAMESPACE]/formio-enterprise
```

Your docker image is ready to deploy, but we will now need to setup the ***MongoDB*** database first.

### Adding MongoDB

In order to get started, we will first need to create the databases within IBM BlueMix which we will use to store all of the form data. IBM has a service called [Compose](https://app.compose.io) which they use as their means for deploying these databases.

 - [Create an account with IBM Compose](https://app.compose.io)

Once you have an account, you will first want to create a new ***MongoDB*** Instance. Once you are done with that, you will need to create a new database.

<img src="/assets/img/developer/deployments/bluemix/compose-mongo.png" style="width:600px" />

You will then provide a name for your new database, then press ***Run***.

<img src="/assets/img/developer/deployments/bluemix/compose-mongocreate.png" style="width:400px" />

Next, you will want to add some new users for this database.

<img src="/assets/img/developer/deployments/bluemix/compose-mongouser.png" style="width:400px" />

<img src="/assets/img/developer/deployments/bluemix/compose-adduser.png" style="width:400px" />

You are now ready to deploy your container within BlueMix.

### Deploying Docker Container in BlueMix
After you have pushed your Docker image to BlueMix and setup your databases, you will now want to create a single container to startup the Form.io Server. **IMPORTANT NOTE:** If this is the first deployment you are making, then you will need to make sure you only spin up a single container to start. This is because the database for Form.io is created on the initialization process of the container. If you tried to spin up multiple containers, like you would if you did a Container Group, then that could cause database locking issues.

Within your BlueMix account, click on **Start Containers**

<img src="/assets/img/developer/deployments/bluemix/bluemix-containerstart.png" style="width:600px" />

You should now see your docker container available to launch within BlueMix.

<img src="/assets/img/developer/deployments/bluemix/bluemix-addcontainer.png" style="width:600px" />

Within the **Single Container** section, you will now provide the following information.

<img src="/assets/img/developer/deployments/bluemix/bluemix-containerinfo1.png" style="width:600px" />

Now you will click on ***Advanced Settings*** and provide the following ENVIRONMENT VARIABLES.

<img src="/assets/img/developer/deployments/bluemix/bluemix-containerinfo2.png" style="width:600px" />

Now, press the ***CREATE*** button to create your deployment.

### Ensure your container is working
In order to make sure that your container is working well, you can use the IBM Container CLI to get some insight into how it is running. You can use the following command to see a list of options.

```
cf ic --help
```

This command is actually a proxy to the Docker CLI so many of the commands that are available within the Docker CLI are also available within the ```cf ic``` command. For example, to see a list of running containers, you can use the following command.

```
cf ic ps
```

Which will output something like the following.

<img src="/assets/img/developer/deployments/bluemix/bluemix-running-container.png" />

Using the **Container ID** provided, you can then view the output from that container to ensure that it booted successfully.

```
cf ic logs b4ce91c6-f7a
```

If everything is running smoothly, it should look like the following.

<img src="/assets/img/developer/deployments/bluemix/bluemix-containerlogs.png" style="width:600px" />

You now have a running Docker image! The next step is to delete this container (we just created it to initialize the database), and now create a **Container Group** which will allow us to map some Routes from our DNS into the container group. They will also provide some auto scaling capabilities which we would like to take advantage of.

### Creating an autoscaling Container Group

BlueMix also has the ability to create an auto scaling container group, which will scale up your servers as the requests to the server increases. It does this through the use of a **Container Group**. After you have successfully initialized a single container, you can now spin up a Container Group by clicking on Containers as you did in the previous example, but instead of clicking on Single Container, you will click on **Scalable Group** and provide the following information.

<img src="/assets/img/developer/deployments/bluemix/bluemix-sg1.png" style="width:600px" />

You will then provide the same Environment variables you did in the previous single container deployment.

<img src="/assets/img/developer/deployments/bluemix/bluemix-containerinfo2.png" style="width:600px" />

After this, you will now need to add multiple domains that will redirect to this container. After you launch the first container group, the existing hostname is **api**. We can assign a new one by using the following command.

```
cf ic route map -n formio -d <domain> formio-server
```

After you do that, you will now need to navigate to your Container group within BlueMix. You should now see an edit button.

<img src="/assets/img/developer/deployments/bluemix/bluemix-addroute.png" style="width:600px" />

You can now assign the domain name of the project you are going to create by adding it to the list of routes and pressing save.

<img src="/assets/img/developer/deployments/bluemix/bluemix-projectroute.png" style="width:600px" />

You should now be able to use the Environment Switcher within Form.io to manage your project!


