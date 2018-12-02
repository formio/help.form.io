---
title: DNS Setup
book: userguide
chapter: environments
slug: environments-dns
weight: 60
---
In order to run a docker version of the form.io server, a domain name needs to be set up for it. There are now two options for configuring DNS for your docker server. You can run it using subdomains for multiple projects or run on a single domain and have projects as subdirectories of that domain.

#### Subdirectories
When using Subdirectories to refer to projects, simply set up a single domain and point it to the server. All projects will become subdirectories of that domain instead of subdomains. Be sure to select "Subdirectory" from the Project Path Type in the environment switcher.

For example: **https://myformio.mydomain.com**

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

For the following scenarios, assume the following project was created on the docker instance.

```json
{
    "title": "My Project",
    "name": "myproject",
    "_id": "55882653b213f00a2641585d"
}
```

##### Localhost
For local testing, localhost would seem like a logical solution, however, since formio server relies on subdomains to manage projects and localhost does NOT support subdomains, it becomes a lot of work to constantly add additional lines to the /etc/hosts file each time a project is created.

Instead, we recommend using a domain name with wildcard subdomain support already set up that points to 127.0.0.1. This will allow using a real domain name but will point at your localhost.

**http://lvh.me** is the domain we recommend. If you run the server and use this domain to point to it, the server with subdomains will work correctly.

To access a project, use the project name and lvh.me

```bash
GET http://lvh.me:3000/project/55882653b213f00a2641585d
GET http://myproject.lvh.me:3000/
```

If you do not want to use lvh.me or a similar domain, you may use the /etc/hosts file (or the Microsoft Windows equivalent).

To use localhost, add the following items and any other project subdomains created on the server.

```bash
127.0.0.1   localhost
127.0.0.1   formio.localhost
127.0.0.1   api.localhost
127.0.0.1   myproject.localhost
```

Then, to access the project, use one of the following methods

```bash
GET http://localhost:3000/project/55882653b213f00a2641585d
GET http://myproject.localhost:3000
```

Each time a new project is added to the server for testing, be sure to add another entry to /etc/hosts.

##### Public Domains
For publically available servers such as testing and production, set up a wildcard subdomain to point to the server. This will allow subdomains to route correctly to your server. For example, you should have something like this in your DNS settings:

```bash
*.example.com.   3600 IN  MX 10 host1.example.com.
```

See [https://en.wikipedia.org/wiki/Wildcard_DNS_record](https://en.wikipedia.org/wiki/Wildcard_DNS_record) for more information on setting up a wildcard DNS entry.

Then, to access the project, use one of the following methods

```bash
GET https://example.com/project/55882653b213f00a2641585d
GET https://myproject.example.com
```

For all domains other than localhost it is best practice to set up SSL Certificates and run the server over https. This both keeps communication secure and also some browsers are starting to require https for certain cross browser requests.
