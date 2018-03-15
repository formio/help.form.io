---
title: Integrations
subtitle: OAuth Authentication
book: integrations
weight: 4
chapter: oauth
layout: chapter
---

OAuth allows you to authenticate with **&lt;<span class="text-primary">form</span>.<span class="text-secondary">io</span>&gt;** using a 3rd party OAuth provider. This is very convenient because users may register new accounts and log in without having to manually enter a new username and password.

When configuring OAuth to work with form.io, there are two different methods to do so. One uses the Remote Authentication OAuth action and the other uses the Resource OAuth actions.

### Remote Authentication
When using external authentication, user accounts only exist in the 3rd party service. An account is not created in Form.io. Users are still assigned a form.io role (or roles) and may have ownership over forms and submissions.

### Resource Authentication
When using Resource authentication, when a user registers with OAuth a User Resource is created in form.io. Subsequent Logins are made using OAuth to that User Resource. Since the users exist in Form.io, they can be queried and viewed.

The OAuth actions associated with Resource Authentication are:

* Login Existing Resource
* Register New Resource
* Link Current User