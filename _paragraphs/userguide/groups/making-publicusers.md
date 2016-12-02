---
title: Making PublicUsers
book: userguide
chapter: groups
slug: making-publicusers
weight: 10
---

The PublicUsers resource is important, because it allows you to proxy non-sensitive data from the User Resource into a separate Resource which is publicly available to your users.

PublicUsers can be created programmatically or by each user, with benefits for each. If you choose to do it within your app, then you can make all users available for group access. If you choose to make each users enable it, then it can be a premium feature, or you can allow users to turn their group access off.

Without the PublicUser resource, then groups are dependent on Administrative users for configuration or you need to make your user table available to Authenticated users with `read_all`, which you don't generally want to do!
