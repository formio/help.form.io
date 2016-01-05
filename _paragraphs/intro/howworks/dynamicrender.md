---
title: Dynamic Form Rendering
book: intro
weight: 202
chapter: howworks
slug: dynamicrender
---
Once a form is embedded within an application or website, it is dynamically rendered by angular.js or react.js each time the page is viewed. Forms are not generated into html and then inserted into the page, nor are they embedded with iframes. They will query the src url for the current form definition and render accordingly.

For the form at ```https://todo.form.io/todo``` here is definition.

```
{
   "_id":"55673ecf4f0405dd28205bba",
   "modified":"2015-09-04T17:32:22.473Z",
   "title":"Todo",
   "type":"resource",
   "name":"todo",
   "path":"todo",
   "project":"55673df34f0405dd28205bb8",
   "created":"2015-05-28T16:14:07.911Z",
   "components":[
      {
         "tableView":true,
         "type":"textfield",
         "validate":{
            "customPrivate":false,
            "custom":"",
            "pattern":"",
            "maxLength":"",
            "minLength":"",
            "required":true
         },
         "persistent":true,
         "unique":false,
         "protected":false,
         "defaultValue":"",
         "multiple":false,
         "suffix":"",
         "prefix":"",
         "placeholder":"enter the todo",
         "key":"title",
         "label":"Title",
         "inputMask":"",
         "inputType":"text",
         "input":true
      },
      {
         "type":"textfield",
         "validate":{
            "customPrivate":false,
            "custom":"",
            "pattern":"",
            "maxLength":"",
            "minLength":"",
            "required":false
         },
         "persistent":true,
         "unique":false,
         "protected":false,
         "defaultValue":"",
         "multiple":false,
         "suffix":"",
         "prefix":"",
         "placeholder":"enter a description",
         "key":"description",
         "label":"Description",
         "inputMask":"",
         "inputType":"text",
         "tableView":true,
         "input":true
      },
      {
         "tableView":false,
         "type":"button",
         "input":true,
         "label":"Submit",
         "key":"submit",
         "size":"md",
         "leftIcon":"",
         "rightIcon":"",
         "block":false,
         "action":"submit",
         "disableOnInvalid":true,
         "theme":"primary"
      }
   ]
}
```

What this allows is for developers to create the structure of an application and embed forms within and have admins that may or may not know how to program or deploy an application but are now able to update a form and have those changes immediately reflected in the application or website. 

This is also true for iOS, Android and other mobile applications using WebView to build an app. You can use form.io to generate the form definitions and automatically update your applications without the need to recompile and deploy the apps through an app store.