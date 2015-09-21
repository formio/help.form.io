---
title: Roles
book: userguide
chapter: roles-and-permissions
slug: roles
weight: 31
---
A **Role** is a group of users that have a shared set of defined permissions with respect to submission data within an Application.

Some common example names of Roles used in enterprise applications include Administrator, Sales Agent, Registered User, Authenticated User, Anonymous User, and many, many more.

 - A Project may have an unlimited number of Roles defined within it.
 - Users within a Role share the same permissions.
 - Users within a Role inherit the permissions associated with that Role.
 - A User may be assigned to more than one Role.

**&lt;<span class="text-primary">form</span>.<span class="text-secondary">io</span>&gt;** allows developers the ability to easily define Roles to control how a group of users access submissions within their Project. A site owner can manage the user access to such tasks as creating, updating or deleting submissions by assigning a user to a specific Role. These Roles have full access to the forms within the project, but are easily edited if needed in the future. This process will be discussed with more detail in the [Permissions](http://help.form.io/userguide/#permissions) section of this User Guide.

#### Default Roles

When a new Project is created, three (3) Roles are created by default:

 - Administrator
 - Authenticated
 - Anonymous

The Anonymous Role is a special Role that defines access within an Application for a User that is not authenticated. For example, a user that visits your application that has not yet registered or is not logged in. **The Anonymous Role can be renamed, but not removed.**

#### Creating and Configuring Roles

To create and configure a Role, navigate to the **Settings** tab located within a Project at the top right corner of the page and then click the **Roles** button on the left side. Select the **+New Role** button to add a new Role, delete a Role by selecting the **Trash Icon**, and edit a Role name and description by selecting the **Edit** button.

<p class="note">When naming Roles, capital letters will be listed before lowercase letters. Staying consistent when naming your Roles will keep the Role list organized.</p>

![](https://cloud.githubusercontent.com/assets/13321142/9473021/2e75b59c-4b1e-11e5-8d89-201e63c562a2.png)

Additional Roles can be defined and added to a project at any time. Next, we will set up Permissions associated with that Role to define access to the submissions within your application.

<div class="note" markdown="1">
When a Resource is accessed by a User, and the User has a Role assigned to them with permissions to complete an operation they are attempting, the operation will be granted. If no Roles are defined to have permissions on an Resource, only the owner of the Resource or the Application itself will have access to the Resource.

By default, the creator of a Project will have access to every Resource associated with the Application. To get ownership of a Resource, the Resource must be created with the “Create Own” Permission, which will assign the User initiating the request to be its owner, or a user can be defined as the owner of a Resource if they are specified as such during a Create All operation.
</div>

