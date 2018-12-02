---
title: Set up LDAP Settings
book: integrations
chapter: ldap
slug: ldap-settings
weight: 10
---
To being using LDAP Authentication, get the Bind DN and Password for your LDAP service. These are used to find the user account's DN in LDAP. Enter your Server URL, Bind DN, Bind Password, Search Base and Search Filter into the LDAP settings.

![](/assets/img/integrations/ldap/settings.png){: .img-fluid .img-thumbnail }
By default Form.io uses email addresses to login in users so using the email attribute in the search filter is recommended unless you change the User Login form to match the search filter. For example ```(mail={{username}})```
