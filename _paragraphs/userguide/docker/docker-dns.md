---
title: DNS
book: userguide
chapter: docker
slug: docker-dns
weight: 50
---
In order to run a docker version of the form.io server, a domain name needs to be set up for it. For testing purposes this may simply be localhost. However, one of the features of our server is that it allows having multiple projects on the same server. These can be accessed by subdomains or by the project path. To access a project by its path, use the format /project/{projectId}. You can get the project id by querying the /project endpoint after logging in to the server. (See Exploring Docker below).

For the following scenarios, assume the following project was created on the docker instance.

```
{
    "title": "My Project",
    "name": "myproject",
    "_id": "55882653b213f00a2641585d"
}
```

#### Localhost
For local testing, the simplest way to set it up is to use localhost and then in /etc/hosts on your computer (or the Microsoft Windows equivalent), set up a subdomain for formio.localhost, api.localhost and any other projects installed on it. etc/hosts should have the following:

```
127.0.0.1   localhost
127.0.0.1   formio.localhost
127.0.0.1   api.localhost
127.0.0.1   myproject.localhost
```

Then, to access the project, use one of the following methods

```
GET http://localhost:3000/project/55882653b213f00a2641585d
GET http://myproject.localhost:3000
```

Each time a new project is added to the server for testing, be sure to add another entry to /etc/hosts.

#### Public Domains
For publically available servers such as testing and production, set up a wildcard subdomain to point to the server. This will allow subdomains to route correctly to your server. For example, you should have something like this in your DNS settings:

```
*.example.com.   3600 IN  MX 10 host1.example.com.
```

See [https://en.wikipedia.org/wiki/Wildcard_DNS_record](https://en.wikipedia.org/wiki/Wildcard_DNS_record) for more information on setting up a wildcard DNS entry.

Then, to access the project, use one of the following methods

```
GET https://example.com/project/55882653b213f00a2641585d
GET https://myproject.example.com
```

For all domains other than localhost it is best practice to set up SSL Certificates and run the server over https. This both keeps communication secure and also some browsers are starting to require https for certain cross browser requests.
