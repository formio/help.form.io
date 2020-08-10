---
title: DNS Setup
book: developer
chapter: onpremise
slug: dns
weight: 40
---
In order to access your form.io server, a domain name needs to be set up for it and pointed to the server or load balancer. This can be a subdomain of another domain, however, the ```formio``` subdomain will NOT work with our server so use any other subdomain such as ```forms```.

As an example, you can set "forms-dev" to point to the portal enabled enviromnent so you would go to https://forms-dev.mydomain.com to access the serve.

There are two options for configuring project DNS for your docker server. You can run it using subdomains or run on a single subdomain and have projects as subdirectories of that domain.
#### Subdirectories
When using Subdirectories to refer to projects, simply set up a single domain and point it to the server. All projects will become subdirectories of that domain instead of subdomains. Be sure to select "Subdirectory" from the Project Path Type in the environment switcher.

For example: **https://forms-dev.mydomain.com** would result in the following project paths:

**https://forms-dev.mydomain.com/myproject1**<br>
**https://forms-dev.mydomain.com/myproject2**

If using subdirectories, skip the Subdomains section.

#### Subdomains
When using subdomains, the server DNS must have the following three domains set up and an additional one per project OR have a wildcard subdomain entry in the DNS server.

Every deployment needs the following 3 subdomains to function.

{: .table .table-bordered .table-striped}
| HostName | Description |
|----------|-------------|
| api.yourdomain.com | This subdomain points to the core API of the Form.io platform. |
| formio.yourdomain.com | This points to the Main Form.io project which is required to login and manage your deployment. |
| [YOURPROJECT].yourdomain.com | This points to the project within the deployment, which is your applications Form.io project. |

#### PDF
If you are using a pdf server, you will also need to point a subdomain at your pdf server. For example, ```pdf-dev.myserver.com``` can point to the server or load balancer. This will make the server available so that it can serve up the converted PDFs that are the background for Web PDFs in the form.io platform. If you are NOT using Web PDFs and only want to generate PDFs of submissions you do NOT need to make the PDF server available on the internet and only need to have it available to the Form.io Server.

#### Files
Files are frequently uploaded to the Blob Storage mechanism of your hosting provider. It is not required to have a clean url like files-dev.myserver.com that points to the blob storage but you may set one up. You can use a raw blob storage url as well.
