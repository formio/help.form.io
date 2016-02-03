---
title: Submission Resource Permissions
book: userguide
chapter: roles-and-permissions
slug: submissionpermissions
weight: 45
---
Submission Resource Permissions allow specific **Resources** (e.g. users), to access specific **Submissions**. A Resource with Resource Permissions may access a Submission without having Roles and Permissions configured for the Form, which the submission is a child of. Submission Resource Permissions are useful in a scenerio where access is needed, but for few members, which makes a new role less applicable.

There are three permission types for Submission Resource Permissions:

 - Read: The Resource(s) defined with access, may read all the contents of the given submission.
 - Write: The Resource(s) defined with access, may read all the contents of the given submission, and edit any information, with the exception of the Submission Resource Permissions and the owner property.
 - Admin: The Resource(s) defined with access, may read and edit all of the contents of the given submission.


#### Permission Assignment
---
Submission Resource Permissions can be configured on any Form with a resource select component. In the Form permission editor, Submission Resource Access will be available for configuration. For each permission, you will see a unique list of each resource select component within the current Form. Selecting any resource for one of the permissions, will grant any selected resources on a new submission, that specific access to the submission.

In the following example, the `users` resource select component is being assigned to the `Read` permission. On any following form submission, all of the selected `users` resources will be granted read access to that individual submission, regardless of the forms existing roles and permissions. The Submission Resource Permissions settings are configured on a per form basis, but the individual access is contained within each form submission.
![](/assets/img/submissionpermissions.png)
