---
title: Permissions
book: userguide
chapter: roles-and-permissions
slug: permissions
weight: 35
---

There are seven (7) Permissions that are assignable to any Roles within a Project:

 - **Read All**
 - **Update All**
 - **Delete All**
 - **Create Own**
 - **Read Own**
 - **Update Own**
 - **Delete Own**

These Permissions grant users certain functions and behaviors that can be applied to a role within a Project and corresponding Application. Each of these Permissions are defined below:

- #### Read All Permission
    - The Read All Permission will allow a user, within a given role, to view every Submission made within the Application, regardless of who owns that Submission.
- #### Update All Submission
   - The Update All Permission will allow a user, within a given role, to update information on every Submission made within the Application, regardless of who owns the Submission. Additionally this Permission allows the user to change the owner of the Submission.
- #### Delete All Submission
   - The Delete All Permission will allow a user, within a given role, to delete a Submission, regardless of who owns the Submission.
- #### Create Own Submission
   - The Create Own Permission will allow a user, within a given role, to create a Submission. The user will be assigned as the owner of the submission by default.
- #### Read Own Submission
   - The Read Own Permission will allow a user, within given role, to read a Submission. A user can only read a Submission if they are defined as its owner.
- #### Update Own Submission
   - The Update Own Permission will allow a user, within a role, to update a Submission they own. A user must own the Submission in order to update.
- #### Delete Own Submission
   - The Delete Own Permission will allow a user, within a role, to delete a Submission they own. A user must own the Submission in order to delete.

#### Configuring Roles and Permissions

Once Roles have been created, there are a few different ways to configure and manage Roles/Permissions within your Project.

1.  Select Edit next to any role on your role Settings page:

    ![4 edit role](https://cloud.githubusercontent.com/assets/13321142/13097272/30b2946e-d4e5-11e5-9104-a45a4245acc7.png)

    This will give you a list of all forms or resources that hold the selected Role, along with their Permissions, within the entire project. Simply hit edit next to the form you want to configure and apply your changes:

    ![5 edit permission](https://cloud.githubusercontent.com/assets/13321142/13097270/30b03340-d4e5-11e5-9d38-bc8e408b6447.png)

    Now you can select the Roles you want to associate with each Permission.Remember to save any changes made:

    ![6 permission](https://cloud.githubusercontent.com/assets/13321142/13097269/30af0c04-d4e5-11e5-8a2c-747b069bfcf1.png)

2.  Assign permissions by clicking the **Permissions** button located at the top right of the page within a form or resource. Each permission may be assigned a role or more than one role, by clicking in the Roles field. After assigning roles to your Permissions, click the **Save** button at the bottom. Remember, you can always add, delete, and edit a role at anytime.

<p class="note"> The Project owner will have all permissions to any Form and Resource submissions by default.</p>
