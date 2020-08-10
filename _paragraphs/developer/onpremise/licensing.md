---
title: Licensing
book: developer
chapter: onpremise
slug: licensing
weight: 20
---
Starting with the 7.x version of formio-enterprise and the 3.x version of pdf-server, our licensing has been simplified and standardized to make it easier to configure and deploy the form.io platform. If you have previous version of the license, please contact sales@form.io and request a new license key. You can tell if you have a new license key as it is 16 characters long instead of the old one which was over 100 characters long.

Server instances must have access to https://license.form.io in order to check the license. Be sure that you have opened that domain in your private VPC.

When provided with a license, you can use this license on both the Formio server and the PDF server. On both servers, set the LICENSE_KEY variable in environment variables. This will tell the server which license to associate the server with. You can manage your license utilizations by going to https://portal.form.io and loggin in as one of the license users. These users can view the license information and enable and disable associated servers and projects. Your license will have a maximum number of utilizations for each of the licensed features and you can control which of the usages are active at any given time. To free up another usage, you can disable a currently enabled item and then create a new one. You may also contact your sales representative to add additional features and increase the numbers on your license. 

#### License Management Page
Please note that license management is only available on https://portal.form.io and your user account must be associated with the license.
![](/assets/img/developer/licenseManagement.png){: .img-fluid .img-thumbnail }
