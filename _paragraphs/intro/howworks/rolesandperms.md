---
title: Roles and Permissions
book: intro
weight: 115
chapter: howworks
slug: permissions
---
Every project within Form.io can provide custom **Roles** which users can be assigned when they authenticate into the platform. These roles can be used to categorize users based on what access they should have within the Data management functions of the API platform. Essentially, Form.io provides a way to create dynamic **Roles**, assign those Roles to **Users**, and then designate what **Permissions** each role should be allowed to do within the platform.

The **Permissions** a role has is configured on a per-form basis, which allow access control on who can perform certain functions on that form or submissions within that form. These permissions are based on *CRUDI* operations (Create, Read, Update, Delete, and Index), and are able to be associated to both Forms as well as Submissions. In addition, each permission is configured based whether a user is trying to perform those actions on their OWN records or other peoples records (ALL). In aggregate, this provides a total of 20 different permissions that can be configured on a per-form basis, the most important of these are as follows.

![](/assets/img/userguide/access-settings.png)