---
title: File
book: userguide
chapter: form-components
slug: file
weight: 45
---
A file field allows users to upload and download files to a form. In order to use a file field, file storage must be set up. This can be done from the project settings. See [File Storage](/integrations/#filestorage) for the types of providers supported.

Form.io does not host any files itself. Files are stored on the storage provider which allows uploading and downloading files to and from it. Form.io only stores a reference to the files which allows seamless integration into your app.

![](/assets/img/file.png)

#### Label

The label for this field that will appear next to it.

#### Storage

This is the storage provider where the file will be stored and accessed from. Select the appropriate provider. All providers besides Url require additional configuration in project settings. 

#### Upload Url

If **Url** is selected in Storage, enter the Url of the service. It must be compatible with the ng-file-upload service and return an object that includes the url to access the file. 

#### Directory

This field will append all files with the string so that they are in a directory on the storage provider. Must end in "/".

#### Multiple Values

If unchecked, only one file per field is allowed. If checked, multiple are allowed.

#### Protected

If checked, this field is for input only. When being queried by the API it will not appear in the properties. You can still see the value on form.io by going to the submissions for a form.

#### Persistent

If checked, the field will be stored in the database. If you want a field to not save, uncheck this box. This is useful for fields like password validation that shouldn't save.

#### Table View

If checked, this value will show up in the table view of the submissions list.
