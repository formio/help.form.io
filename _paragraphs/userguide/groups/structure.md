---
title: Group Structure
book: userguide
chapter: groups
slug: group-structure
weight: 0
---

Groups can be configured in three ways:

  1. Group and User Resources
    - Add Users to groups on creation
  2. Group, User, and GroupUser Resources
    - Add Users to groups after creation
  3. Group, User, PublicUser, and GroupUser Resources
    - Allows non-Administrative users to create and maintain groups of users.

The benefit of using a third and forth resource, PublicUsers and GroupUsers, is that they act like join tables and allow you to make groups at will. With four resources, you can safely allow non-administrative users to configure groups (selectively filtering sensitive data). 

Since non-administrative configuration (#2) is most commonly used, we will cover that here. Below are the following Required resources, their components, actions and any permissions, necessary for Groups to work; You may add any additional components and actions that you would like.

`Note: Making a Group Resource, with a multi-select for users wont properly propagate the permissions, you must use the GroupAssignment Action for Group based permissions.`
