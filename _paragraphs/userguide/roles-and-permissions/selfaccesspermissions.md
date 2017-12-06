---
title: Self Access Permissions
book: userguide
chapter: roles-and-permissions
slug: selfaccesspermissions
weight: 40
---
The **Self Access Permission** checkbox provides a way for "submissions" to access their own records regardless of their role or other permissions assigned to the form. This is useful when you have User submissions created on behalf of the user, and then at a later time, they are onboarded in the system and need to have access to their own record. In this specific case, they are logged in as that submission, but are not the "owner" of the submission (since they didn't create their record). This checkbox allows them to have access to their record since the ```_id``` of the record is the same as the ```_id``` they provide in the Authenticaiton token as the User ID.
