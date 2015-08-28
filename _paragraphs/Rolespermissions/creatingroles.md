---
title: Creating and Configuring ROLES
book: rolesandpermissions
chapter: roles
slug: creating-roles
weight: 30
---
To create and configure a ROLE, navigate to the <b>Settings</b> tab located within a PROJECT at the top right corner of the page and then click the <b>ROLES</b> button on the left side. Select the <b>+New ROLE</b> button to add a new ROLE, delete a ROLE by selecting the <b>Trash Icon</b>, and edit a ROLE name and description by selecting the <b>Edit</b> button.
<h4>Note:</h4> When naming Roles, capital letters will be listed before lowercase letters. Staying consistent when naming your Roles will keep the Role list organized. 
<img src="https://cloud.githubusercontent.com/assets/13321142/9473021/2e75b59c-4b1e-11e5-8d89-201e63c562a2.png">
<p>Additional ROLES can be defined and added to a project at any time.  Next, we will set up Permissions associated with that role to define access to the submissions within your application.</p>
<p>NOTE:  When a RESOURCE is accessed by a USER, and the USER has a ROLE assigned to them with PERMISSIONS to complete an operation they are attempting, the operation will be granted. If no ROLES are defined to have permissions on an RESOURCE, only the owner of the RESOURCE or the APPLICATION itself will have access to the RESOURCE.</p>
<p>By default, the creator of a PROJECT  will have access to every RESOURCE associated with the APPLICATION. To get ownership of a RESOURCE, the RESOURCE must be created with the “CREATE OWN” PERMISSION, which will assign the USER initiating the request to be its owner, or a user can be defined as the owner of a RESOURCE if they are specified as such during a CREATE ALL  operation. </p>
