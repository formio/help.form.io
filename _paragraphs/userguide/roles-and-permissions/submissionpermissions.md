---
title: Field Based Resource Access
book: userguide
chapter: roles-and-permissions
slug: submissionpermissions
weight: 45
---
Field Based Resource Access allow specific **Resources** (e.g. users), to access specific **Submissions**. A Resource with Resource Permissions may access a Submission without having Roles and Permissions configured for the Form, which the submission is a child of. Submission Resource Permissions are useful in a scenerio where access is needed, but for few members, which makes a new role less applicable.

There are three permission levels for Field Based Resource Access:

 - Read: The Resource(s) defined with access, may read all the contents of the given submission.
 - Create: The Resource(s) defined with access, may read all the contents of the given submission, and create submissions.
 - Write: The Resource(s) defined with access, may read all the contents of the given submission, create submissions, and edit any information, with the exception of the Field Based Resource Access and the owner property.
 - Admin: The Resource(s) defined with access, may read, edit all of the contents of the given submission, create and delete submissions. 

Every resource can be selected only on one of the permission levels.

#### Permission Assignment
---
Field Based Resource Access can be configured on any Form with a resource select component. In the Form permission editor (Access tab), Field Based Resource Access will be available for configuration. For each permission level, you will see a unique list of each resource select component within the current Form. Selecting any resource for one of the permissions levels, will grant any selected resources on a new submission, that specific access to the submission.

`Note: when you change Field Based Resource Acccess setting, change only applies to new submissions you'll create after the change. Submissions created before the change would have level of acccess which was current on the time of their creation. For example: you didn't set up Filed Based Resource Access, created several submissions and then selected Group Resource on 'Read' level. Group users won't be able to see those several old submissions even if the group matches`
    
In the following example, the `users` resource select component is being assigned to the `Read` permission. On any following form submission, all of the selected `users` resources will be granted read access to that individual submission, regardless of the forms existing roles and permissions. The Field Based Resource Access settings are configured on a per form basis, but the individual access is contained within each form submission.
![](/assets/img/userguide/userguide-roles-resource.png){: .img-fluid .img-thumbnail }

For more information about how to set up Group Permissions, read [Groups section](../groups).
