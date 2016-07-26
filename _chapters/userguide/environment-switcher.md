---
title: Environment Switcher
book: userguide
weight: 120
chapter: env
---
Environment Switcher allows connecting the formio portal to an on premise serve backend such as those using Docker. The Portal app will be the same but the user accounts, projects, forms and submissions will all be stored on the on premise server. This makes managing on premise servers much simpler.

To use the Environment Switcher, go to https://portal.form.io and in the header select Environments->Add Environment. Enter a name and url for your on premise server.

The URL must include the protocol (http or https) as well as the domain name. The domain name must only include two parts such as example.com or test.me.

Please use **http://lvh.me** instead of **localhost**.

**Correct URLS**

 * http://lvh.me:3000
 * https://example.com
 * https://test.me
 
 **Incorrect URLS**
 
  * lvh.me
  * http://test.co.uk
  * http://localhost
  
Once an environment is set up, simply select it to switch to the Server. You will be logged out of the old server before being switched to the new server since the new server contains different user accounts.

Environments must be set up on each browser used to log in to the server. They may be added and removed at any time.

##### Question: Does my server need to be publicly available to use Environment Switcher?

**Answer:**
No. The server only needs to be accessible from the browser accessing the on premise server. This is because the Portal application is downloaded from our servers and run in the browser. The app within the browser itself is the only thing connecting to your on premise server so the server does NOT need to be accessible on the internet.

##### Question: Does Environment Switcher work with the open source formio server?

**Answer:**
No. The Environment Switcher will only work with Servers running our Commercial servers.