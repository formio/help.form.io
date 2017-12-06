---
title: Group Structure
book: userguide
chapter: groups
slug: group-structure
weight: 0
---

Groups can be configured in three ways:

  - Groups and Users (Resources)
    - Add Users to groups on creation
  - Groups, Users, and GroupUsers (Resources)
    - Add Users to groups after creation
  - Groups, Users, PublicUsers, and GroupUsers (Resources)
    - Allows non-Administrative users to create and maintain groups of users.

The benefit of using a third and forth resource, PublicUsers and GroupUsers, is that they act like join tables and allow you to make groups at will. With four resources, you can safely allow non-administrative users to configure groups (selectively filtering sensitive data). Since non-administrative configuration is most commonly used, we will cover that here. Below are the following Required resources, their components, actions and any permissions, necessary for Groups to work; You may add any additional components and actions that you would like.

`Note: Making a Group Resource, with a multi-select for users wont properly propagate the permissions, you must use the GroupAssignment Action for Group based permissions.`

#### Users (Default Resource)

   Components

  - Email (Email component)
  - Password (Password component)

   Actions

  - Save Submission Action

  Submission Permissions

  - Anonymous Users
    - create_own
    - read_own
    - update_own

#### Groups (Resource)

   Components

  - Name (Text component)
  - Users (Select / Resource component -> GroupUsers)

  Actions

  - Save Submission Action

  Submission Permissions

  - Authenticated Users
    - create_own
    - read_own
    - update_own
    - delete_own

#### PublicUsers (Resource)

  Components

  - User (Select / Resource component -> Users)
    - Each user should be able to read their own submission via the read_own permission.
    - Use the select fields to only grab each `_id`, and each `email`

  Submission Permissions

  - Authenticated Users
    - create_own
    - read_all
      - Each user should be able to see all the submissions, so they can see the pool of users to add to their group.
    - update_own
    - delete_own
      - Allows a user to remove themselves from the pool of users available to assign to groups

#### GroupUsers (Resource)

   Components

  - Group (Select / Resource component -> Groups)
  - User (Select / Resource component -> PublicUsers)

   Actions

  - Save Submission Action
  - Group Assignment Action

  Submission Permissions

  - Authenticated Users
    - create_own
    - read_own
    - update_own
    - delete_own
