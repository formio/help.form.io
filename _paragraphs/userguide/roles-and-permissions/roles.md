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

**&lt;<span class="text-primary">form</span>.<span class="text-secondary">io</span>&gt;** allows developers the ability to easily define Roles to control how a group of users access submissions within their Project. A site owner can manage the user access to such tasks as creating, updating or deleting submissions by assigning a user to a specific Role. These Roles have full access to the forms within the project, but are easily edited if needed in the future. This process will be discussed with more detail in the [Permissions](#permissions) section of this User Guide.

#### Default Roles

When a new Project is created, three (3) Roles are created by default:

 - Administrator
 - Authenticated
 - Anonymous

The Anonymous Role is a special Role that defines access within an Application for a User that is not authenticated. For example, a user that visits your application that has not yet registered or is not logged in. **The Anonymous Role can be renamed, but not removed.**

#### Creating and Configuring Roles

To create and configure a Role, navigate to the **Access** tab located within a Project anchored navigation bar on the left. You can Select the **+New Role** button to add a new Role, delete a Role by selecting the **Trash Icon**, or edit a Role name and description by selecting the **Edit** button.

<p class="note">When naming Roles, they are organized alphabetically and capital letters will be listed before lowercase letters. Staying consistent when naming your Roles will keep the Role list organized.</p>

![3 roles](/assets/img/userguide/userguide-roles-access-area.png){: .img-fluid .img-thumbnail }

Additional Roles can be defined and added to a project at any time. In the next section, we will discuss Permissions associated with Roles to define access to the submissions within your application.

<div class="note" markdown="1">
When a Resource is accessed by a User, and the User has a Role assigned to them with permissions to complete an operation they are attempting, the operation will be granted. If no Roles are defined to permissions on a given Resource, only the owner of the Resource or the Application itself will have access to that Resource.

By default, the creator of a Project will have access to every Resource associated within the Application. To receive ownership of a Resource, that Resource must be created with the “Create Own” Permission, which will assign the User initiating the request to become its owner. Additionally, a user can be defined as the owner of a Resource if they are specified as such during a Create All operation.
</div>

