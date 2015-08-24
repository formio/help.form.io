---
title: ROLES
book: userguide
chapter: roles-and-permissions
slug: roles
weight: 31
---
<p> A ROLE is a group of USERS that have a shared set of defined PERMISSIONS with respect to submission data within an APPLICATION. </p>
<p>Some common example names of ROLES used in enterprise applications include Administrator, Sales Agent, Registered User, Authenticated User, Anonymous User, and many, many more.</p>
<ul>
  <li>A PROJECT may have an unlimited number of ROLES defined within it.</li>
  <li>A PROJECT may have an unlimited number of ROLES defined within it.</li>
  <li>USERS within a ROLE all have the same PERMISSIONS.</li>
  <li>USERS within a ROLE inherit the PERMISSIONS associated with that ROLE. </li>
  <li>A USER may be assigned to more than one ROLE.</li>
</ul>
<p> <b>&lt;form.io&gt;</b> allows developers the ability to easily define  ROLES to control how a group of USERS access SUBMISSIONS within their PROJECT.   A site owner can manage the user access to such tasks as creating, updating or deleting submissions by assigning a user to a specific Role.These ROLE have full access to the forms within the project, but are easily edited.  This process will be discussed in more detail in the Permissions section of this User Guide. </p>
<h4>Default Roles</h4>
<p>When a new PROJECT is created, three (3)  ROLES are created by default: </p>
<ul>
  <li>Administrator</li>
  <li>Authenticated</li>
  <li>Anonymous</li>
</ul>
<p>The Anonymous ROLE is a special ROLE that defines access within an Application for a USER that is not authenticated. For example, a user that visits your application that has not yet registered or is not logged in.  <b>The Anonymous ROLE can be renamed, but not removed.</b></p>
<h4>Creating and Configuring ROLES</h4>
To create and configure a ROLE, navigate to the <b>Settings</b> tab located within a PROJECT at the top right corner of the page and then click the <b>ROLES</b> button on the left side. Select the <b>+New ROLE</b> button to add a new ROLE, delete a ROLE by selecting the <b>Trash Icon</b>, and edit a ROLE name and description by selecting the <b>Edit</b> button.

<h4>Note:</h4>When naming Roles, capital letters will be listed before lowercase letters. Staying consistent when naming your Roles will keep the Role list organized. 
<img src="https://cloud.githubusercontent.com/assets/13321142/9176933/12134950-3f5c-11e5-8f0e-04604bb82281.png">
<p>Additional ROLES can be defined and added to a project at any time.  Next, we will set up Permissions associated with that role to define access to the submissions within your application.</p>
<p>NOTE:  When a RESOURCE is accessed by a USER, and the USER has a ROLE assigned to them with PERMISSIONS to complete an operation they are attempting, the operation will be granted. If no ROLES are defined to have permissions on an RESOURCE, only the owner of the RESOURCE or the APPLICATION itself will have access to the RESOURCE.</p>
<p>By default, the creator of a PROJECT  will have access to every RESOURCE associated with the APPLICATION. To get ownership of a RESOURCE, the RESOURCE must be created with the “CREATE OWN” PERMISSION, which will assign the USER initiating the request to be its owner, or a user can be defined as the owner of a RESOURCE if they are specified as such during a CREATE ALL  operation. </p>
