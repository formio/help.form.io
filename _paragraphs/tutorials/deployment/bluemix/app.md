---
title: Application Deployment
book: turorials
section: deployment
chapter: bluemix
slug: bluemix-app
weight: 10
---
In order to deploy your application within BlueMix, you will be utilizing the Node.js integrations available within that platform. This tutorial also assumes that you already have an application running locally either using one of our [predefined templates](https://github.com/formio?utf8=%E2%9C%93&query=formio-app-) or an application that already has a build routine to create a serverless application.

To start, you will first need to go and create a new [IBM Bluemix](http://www.ibm.com/cloud-computing/bluemix/) account. Once you have established your account, the first thing you will do is to create a new Organization.

<img src="/assets/img/developer/deployments/bluemix/bluemix-createorg.png" style="width:400px" />

You will now name your space, for now we can just use **dev***.

<img src="/assets/img/developer/deployments/bluemix/bluemix-namespace.png" style="width:400px" />

Then read the Summary, and press **I'm Ready**.

Once you are within the main page, the first tasks is to create a new application. We can do this by first clicking on the ***Compute*** section.

<img src="/assets/img/developer/deployments/bluemix/bluemix-compute.png" style="width:600px" />

You will then create a new application.

<img src="/assets/img/developer/deployments/bluemix/bluemix-createapp.png" style="width: 600px" />

From here you will click on the **Node.js**, then click on ***Continue***

<img src="/assets/img/developer/deployments/bluemix/bluemix-nodejs.png" style="width: 600px" />

Now give your application a name and press ***Finish***

<img src="/assets/img/developer/deployments/bluemix/bluemix-appname.png" style="width: 300px" />

Once the application is done building, you will then want to click on the ***Overview*** tab, and then ***ADD GIT*** button.

<img src="/assets/img/developer/deployments/bluemix/bluemix-addgit.png" style="width: 600px" />

You will then need to give your repo an alias and then click the button that says ***Create***. Then follow the on-screen instructions until it creates a new GIT repository for your application.

BlueMix will automatically create a new repository for you, which we will add our Form.io application to. To get started you will first need to ensure you have ***GIT*** installed on your local machine. You can go to [https://git-scm.com/](https://git-scm.com/) to download and install GIT on your machine. Once you have that installed, you can clone your repo by copying the following URL within BlueMix.

<img src="/assets/img/developer/deployments/bluemix/bluemix-giturl.png" style="width: 300px" />

You can now clone this application within your local computer by typing the following, ***but replacing the URL with your own GIT url***.

```
git clone https://hub.jazz.net/git/formio/formio
```

You will be required to login to your BlueMix account to download this locally, but this is normal.

Once you have the project downloaded into your own local machine, you will now need to merge the code found within your Form.io application with the code that was provided by default from BlueMix. For example, lets suppose we wish to bootstrap the ***Todo Application*** found @ [https://github.com/formio/formio-app-todo](https://github.com/formio/formio-app-todo) into BlueMix. We can first Boostrap the project within Form.io by typing the following commands.

```
npm install -g formio-cli
formio bootstrap formio/formio-app-todo
```

This will bootstrap a new Todo application within your Form.io account. To merge the BlueMix project with this one, it will be easier to copy the BlueMix deployment pieces into this application, starting with the ***app.js*** and ***manifest.yml*** files.

<img src="/assets/img/developer/deployments/bluemix/bluemix-appjs.png" style="width: 600px" />

You will now need to copy the ***package.json*** dependencies of the BlueMix application into the Form.io application.

<img src="/assets/img/developer/deployments/bluemix/bluemix-package.png" style="width: 400px" />

The resulting package.json file will look something like this when you are done with this task...

<img src="/assets/img/developer/deployments/bluemix/bluemix-deps.png" style="width: 400px" />

Next, you will need to open up the ***app.js*** file that you copied over from the BlueMix application and change the following line to include the ***/dist*** folder instead of the ***/public*** folder.

```
// serve the files out of ./dist as our main files
app.use(express.static(__dirname + '/dist'));
```

You are now ready to build your application. Type the following within your terminal within the directory of the Form.io application.

```
npm install
bower install
gulp build
```

Just to ensure that your application will run, type the following to test it locally.

```
gulp serve
```

You will now need to add your new application on top of the BlueMix application within GIT. The easiest way to do this is to copy the ```.git``` folder within BlueMix application and place that within your Form.io application folder. Some computers will hide that folder within the finder window, so you may need to move it manually using terminal (NOTE: the directories will be different for your computer).

```
mv ~/Documents/formio/bluemix/formio/.git ./
```

Now within the Form.io application folder, you can commit the application on top of the BlueMix GIT repo by doing the following.

```
git add -A
git commit -m "Deploy Form.io Serverless App"
```

And now push that up to BlueMix.

```
git push origin master
```

Once you do that you can now go back to your BlueMix interface and restart your application.

<img src="/assets/img/developer/deployments/bluemix/bluemix-restart.png" style="width: 600px" />

Your application should now startup and will be running within BlueMix!

<img src="/assets/img/developer/deployments/bluemix/bluemix-app.png" style="width: 600px" />


