---
title: User's Guide
subtitle: Environment Switcher
book: userguide
weight: 120
chapter: environment-switcher
layout: chapter
---
Environment Switcher allows connecting the formio portal to an on premise serve backend such as those using Docker. The Portal app will be the same but the user accounts, projects, forms and submissions will all be stored on the on premise server. This makes managing on premise servers much simpler.

There are three options when setting up an on premise server for how you want to handle project urls. These are reflected in the Project Path Type selector.

#### Subdomains
Using the Subdomains project path type is similar to the legacy Environment Switcher. This will set projects up as subdomains on the root domain. For example: https://myproject.mydomain.com. In order for this functionality to work, you will need to make sure you have set up your docker deployment's DNS correctly. You must use a wildcard subdomain for the server.

***Subdomain URLs***

 * http://mydomain.com (needs to have *.mydomain.com DNS pointed to the server)
 * http://mydomain.co.uk (needs to have *.mydomain.co.uk DNS pointed to the server)
 * http://mysub.mydomain.co.uk (needs to have *.mysub.mydomain.co.uk DNS pointed to the sersver)
 
Please note, when using subdomains, the project will live below the level specified in the environment switcher. So if you enter, **http://mysub.mydomain.co.uk** then the project will be located at **http://myproject.mysub.mydomain.co.uk**.
 
#### Subdirectories
If you only want to point a single domain/subdomain at the on premise server you can do so by running projects as subdirectories of that project. By doing it this way, a single DNS entry can be used and all requests to the server will go through that entry.

For a server running at **http://mysub.mydomain.co.uk**, the project url would be **http://mysub.mydomain.co.uk/myproject**.

To use Subdirectories, you must be on server version 4.0.0 or higher.

#### Project Id
Similar to subdirectories, you can also run projects based on the actual project id and skip project name aliasing altogether.

This would make the project url **http://mysub.mydomain.co.uk/project/1234566789**.

### Using the environment switcher

To use the Environment Switcher, go to https://portal.form.io and in the header select Environments->Add Environment. Enter a name and url for your on premise server.

The URL must include the protocol (http or https) as well as the domain name. The domain name must only include two parts such as example.com or test.me. Select the Project Path Type that corresponds to your server configuration.

Please use **http://lvh.me** instead of **localhost**.

**Correct URLS**

 * http://lvh.me:3000
 * https://example.com
 * https://test.co.uk
 * http://mysub.mydomain.co.au

Once an environment is set up, simply select it to switch to the Server. You will be logged out of the old server before being switched to the new server since the new server contains different user accounts.

Environments must be set up on each browser used to log in to the server. They may be added and removed at any time.

##### Question: Does my server need to be publicly available to use Environment Switcher?

**Answer:**
No. The server only needs to be accessible from the browser accessing the on premise server. This is because the Portal application is downloaded from our servers and run in the browser. The app within the browser itself is the only thing connecting to your on premise server so the server does NOT need to be accessible on the internet.

##### Question: Does Environment Switcher work with the open source formio server?

**Answer:**
No. The Environment Switcher will only work with Servers running our Commercial servers.
