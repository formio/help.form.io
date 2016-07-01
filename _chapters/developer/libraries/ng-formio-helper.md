---
title: ngFormioHelper
book: developer
section: libraries
chapter: ng-formio-helper
weight: 3
---
The ngFormioHelper file is a tool that provides you with many different pieces of informmation that can be used to help you intereact with the Form.io platform. It can be broken down into eight different parts.

#### Filters #### 



#### Fileread Directive ####



#### FormioResourceProvider ####

The bulk of ths provider is the register() method. This method takes three arguments as shown:

    FormioResourceProvider.register(name, resource.form, $injector.get(resource.resource + 'Provider'));

* name: the machine name for the resource. This is a combination of the base name (if defined) in the [resource provider](https://help.form.io/tutorials/walkthroughs/#app-resources) and the resource name. 
* url: the URL of the resource form as defined in the [configuration file](https://help.form.io/tutorials/walkthroughs/#configuration).
* options: the value of $get for the resource provider.

##### UI Router States #####

The following ui-router states are generated for each resource:

| State | URL | Default Template
| ------|-----|-----------------
| baseName+‘Index' | url + name + queryParams |/resource/index.html |
| baseName+‘Create' | /create/ + name + queryParams | /resource/create.html |
| baseName | / + name + /: + queryId | /resource/resource.html |
| baseName.’view' | / | /resource/view.html |
| baseName.’edit | /edit | /resource/edit.html |
| baseName.’delete' | /delete | /resource/delete.html |

The default template can be overridden by copying the one listed abouve, placing it 

#### formioForms Directive ####



#### FormioFormsProvider ####

The following ui-router states are generated for each resource form defined in the config file:

| State | URL | Default Template |
| ------| ----|----------------- 
| basePath.’formIndex' | /forms |/form/index.html |
| basePath + ‘form' | /form/:formID | /form/form.html |
| basePath+’form.view' | / |/form/view.html |
| basePath+’form.submissions' | /submissions | /submission/index.html |
| basePath+’form.submissions' | /submission/:submissionId | /submission/submission.html |
| basePath+’form.submission.edit | /edit | /submission/edit.html |
| basePath+’form.submission.delete | /delete | /submission/delete.html |

#### FormioAuthProvider ####

The bulk of this provider is the register() method, which takes the following three arguments:

* name: 
* resource:
* path:

The following ui-router state is generated for each user resource:

| State | URL | Default Template |
| ------|-----|----------------- |
| ‘auth.’ + name | / + path |/views/user/ + name +  ‘.html' |

However, it also provides some other utility functions that can be used in your app.

##### setForceAuth() #####
forceAuth is a boolean that is used to tell the app whether or not a user must be authenticated to access any resources. When it is true, unauthenticated users can only access the login or register states.

It can be set by passing true to the constructor:

    FormioAuthProvider.setForceAuth(true);

##### setStates() #####
This is used to set the default ui-router states for anonymous and authenticated users. The user is redirected to the anonymous state when 

* logging out, 
* when attempting to access a resource with no access permissions set for anonymous users, and setForceAuth has been set to true.

##### setAppUrl #####
This is used to set the base URL for your project (displayed on the API page in yor project). It is used throughout the Form.io code to access your project resources.

It is usually defined snd set as a constant in config.js:

    var APP_URL = 'https://abcdefghijklmno.form.io';
    var API_URL = 'https://api.form.io';

    ...

    APP_URL = query.appUrl || APP_URL;
    API_URL = query.apiUrl || API_URL;

    angular.module('formioAppBasic').constant('AppConfig', {
      appUrl: APP_URL,
      apiUrl: API_URL,
      
      ...

and then set in app.js

    FormioProvider.setAppUrl(AppConfig.appUrl);

#### FormioAlerts Factory ####



#### .run block ####