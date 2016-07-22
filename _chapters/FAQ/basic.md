---
title: Basic Questions
book: faq
section: 
weight: 1
chapter: basic
---
####_How are Passwords stored?_
Password data is stored as a hash once submitted, which is a one way cryptographic function for security purposes. Once it's hashed, there is no way to know what the original data was. 

####_Do you offer encryption?_
Yes, we do have comprehensive encryption capabilities that can be configured to your specific needs.  As a starting point, user passwords are automatically encrypted using BCrypt, which is  the standard algorithm process for password encryption.
 
On a related note, we also utilize JSON Web Tokens (JWT) for our user authentication processes.

####_Does Form.io support controllable authorization_
Yes, Form.io utilizes a robust Roles and Permissions systems that leverages JWT for authentication. 

####_Are there any restrictions on the distributions of IPs_
No.  Our platform software is very liberally licensed in order for you to be able to build and integrate our forms and APIs into your business applications without significant restriction from Form.io. You can read more about our [Privacy Policy](http://blog.form.io/form.io-privacy-policy), [Terms of Use](http://blog.form.io/form-terms-of-use), [Software Agreement](http://blog.form.io/form.io-software-licensing-agreement), and [Open Source License](http://blog.form.io/form.io-open-source-license-agreement) by following the links.

####_Can data within the forms be easily reported off of?_
Yes, we provide the ability to access and report on all of the submission data for the Resources, and Forms, and components that you build into your applications.  We also report on API traffic and similar application submission activity data. 
 
Additionally, we have robust and flexible capabilities to send your data to integrated legacy, or 3rd-party systems for any additional data analysis and reporting as you wish.  Our platform is as much about facilitating and enabling complex data management workflows as it is about building complex forms themselves.  This is what makes us very different from many form platform providers. 
 
Entire projects/applications can also be exported and cloned as desired which can save significant time when building multiple similar apps from a single customized templates that you can build yourself or use ours. 

####_By Default, when do tokens expire?_
Tokens will expire after 1 week. However, every request you make to Form.io returns a new token for the user so as long as a request is made within 1 week, there is no need to re-authenticate.

####_Can I change when a token expires?_
You can configure the token expire time as an environment variable.

####_How to edit password data?_
To edit a user submission with a password field, you would need to know the original password of the user to perform the edit.   

####_How do I retrieve the JSON Schema to my Form_
When you build a form,  click on the Embed code page, then copy the URL as you [see here](https://monosnap.com/file/0CLLWbpxP7jiGSBu1qk8R8XdEP9zir).

You can then copy and paste that URL in the browser where you will see the JSON schema for the form.

####_How do I log in to the “Preview” of my project?_
In order to login in to the preview section, you must first create an Admin or User record. See the question below on how to do so.

####_How do I create an Admin/User for my project?_
To create an admin/user account for your application click on the Forms section in your Form.io project, then click on Admin/User form, then create an administrator record. You can then log into your app using that record.

####_Can I create my forms from a JSON Schema?_
Yes, you can create a form from a JSON Schema. All of our platform is based on REST APIs so all you need to do is POST to the proper endpoint. For example, creating a form is
POST https://{projectname}.form.io/form

Updating an existing form is 
PUT https://{projectname}.form.io/{formname}

You can also use the long form for each of those with the ids. for example:
POST https://api.form.io/project/{projectId}/form
PUT https://api.form.io/project/{projectId}/form/{formId}

You can use the network tab in your browser's developer tools to watch exactly what commands are being issues on our developer portal. You'll need to use an x-jwt-token header as well as set the content-type.

####_What are “Existing Resource Fields”?_
Existing Resource Fields are just shallow copies of components within a Resource that can be reused to avoid redundancy. They do not link forms or resources in any way.

####_Can the Form.io platform be embedded into my application?_
Yes, one of the huge benefits of using our product is that you can embed our form building, form rendering, form management, and data management capabilities right in with your own application. The following [codepen link](http://codepen.io/travist/full/xVyMjo/) illustrates our form builder within an easy embedded environment so I hope this gives you reassurance that we are well suited to do this.

####_Can a report be created based on Form submission data?_
Reporting within your application is also something we provide. Here is the Data Grid component which you can embed within your own application that links directly with your Form.io project.
https://github.com/formio/ngFormioGrid

####_Can I upload files to your forms?_
Our file upload component works really well with all types of files including images or videos and allows you to capture images, upload them directly to Amazon S3, and then display then within your application. Additionally, when using a tablet or mobile device, users have the ability to upload files from pictures/videos taken on their device in real time.  Here is an example application that actually does this using Form.io.
https://github.com/travist/groupselfie

####_Can I search/filter submission data?_
With our datagrid (seen above) you can provide a search box for every column allowing you to search records that match certain or filtered criteria. Reports can be exported into CSV or Json files.

####_Do you offer bulk file uploads?_
Uploads are currently not "bulk" but we do allow for "multiple" uploads. We have an item in our roadmap that will allow you to drag and drop many files and that will upload to the platform. We can work with you and your project to help provide this capability as you require.

####_What are the premium actions?_
Premium actions include all of our "Integration" actions which include Dropbox, Google Spreadsheets, OAuth, Office 365, etc.

####_Can I use an external Authentication system?_
We have working examples of successfully using other authentication systems including Drupal. This usually requires additional development on the application, but it is achievable. Please reach out to our support team to better identify your needs and how this would be implemented.

####_Do you offer ReCaptcha?_
Currently we do not offer this capability within the platform but this is on our roadmap. Take a look at our Open Source renderer which can be found here https://github.com/formio/ngFormio. Basically what needs to happen is this renderer needs to add the Recaptcha into the form when there is no token provided (anonymous submission).
