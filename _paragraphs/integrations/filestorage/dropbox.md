---
title: Dropbox
book: integrations
chapter: filestorage
slug: dropbox-storage
weight: 300
---
The Dropbox storage provider allows using the [Dropbox](https://www.dropbox.com){:target="_blank"}  service for storing files within your application.

Because of the way that the Dropbox service works, every user who needs to upload or download the files must authenticate with [Dropbox Oauth](#dropbox-oauth) so that they have an access token to interact with the Dropbox API. There are no other special settings in the project settings to get the Dropbox storage provider working besides setting up the Dropbox OAuth Authentication.

Files are uploaded to a User's dropbox account. In order for other users of the application to be able to access those files they must be uploaded to a shared folder among them. See [How do I share a folder with others?](https://www.dropbox.com/help/274){:target="_blank"} for how to set up a shared folder. Once the folder containing all the files is shared among members of the application, they will be able to upload, download and share the files amongst each other.