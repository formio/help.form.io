---
title: File
book: userguide
chapter: form-components
slug: file
weight: 180
---
A file field allows users to upload and download files to a form. In order to use a file field, file storage must be set up. This can be done from the project settings. See [File Storage](/developer/integrations/filestorage/) for the types of providers supported.

Form.io does not host any files itself. Files are stored on the storage provider which allows uploading and downloading files to and from it. Form.io only stores a reference to the files which allows seamless integration into your app.

![12 s3](https://cloud.githubusercontent.com/assets/13321142/13097262/3091c464-d4e5-11e5-976e-7449834b82fc.png){: .img-fluid .img-thumbnail }

#### Label

The label for this field that will appear next to it.

#### Storage

This is the storage provider where the file will be stored and accessed from. Select the appropriate provider. All providers besides Url require additional configuration in project settings.

#### Upload Url

If **Url** is selected in Storage, enter the Url of the service. It must be compatible with the ng-file-upload service and return an object that includes the url to access the file.

#### Directory

This field will append all files with the string so that they are in a directory on the storage provider. Must end in "/".

#### Custom CSS Class

A custom CSS class to add to this component. You may add multiple class names separated by a space.

#### Tab Index

Sets the `tabindex` attribute of this component to override the tab order of the form. See the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex\) on `tabindex` for more information on how it works.

#### Multiple Values

If unchecked, only one file per field is allowed. If checked, multiple are allowed.

#### Protected

If checked, this field is for input only. When being queried by the API it will not appear in the properties and also should not appear in exported data. You won't be able to see the value on form.io, but it will be stored in database under the hood.

#### Persistent

If checked, the field will be stored in the database. If you want a field to not save, uncheck this box. This is useful for fields like password validation that shouldn't save.

#### Table View

If checked, this value will show up in the table view of the submissions list.

#### Webcam Feature
We have additional File component settings that are currently on our Beta site. This includes a Webcam feature which allows the user to utilize the webcam on their local machine to take a picture and upload to the component. 

To apply this feature, navigate to https://beta.form.io/. Ensure you have correct file storage configuration within the stage settings. Set your file component to the correct storage type and click the 'Enable Web Cam' setting. 

When using the form, you will see a 'Camera' button on the component. Clicking the camera button will activate your webcam enabled on your local machine with the ability to take and upload photos.

