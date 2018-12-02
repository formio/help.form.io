---
title: Create some Default users
book: tutorials
section: walkthroughs
chapter: servicetracker
slug: users
weight: 7
---
Now that your application structure is established, along with all the actions & roles, we now need to create a default user account so that we can use the application. This is a very common gotcha where people try to use their Form.io user account to login to the application. The reason this does not work is because the authentication is directed toward the Resources within that application and not the Form.io database. This means that you can have your own independent user database within your application and not have to worry about conflicting user accounts. To create a default Admin account, we simply need to go to the **Forms** section, click on **Admin** form and then fill out some information.

![](/assets/img/tutorials/walkthroughs/servicetracker/create-user.png){: .img-fluid .img-thumbnail }

![](/assets/img/tutorials/walkthroughs/servicetracker/user-create-submit.png){: .img-fluid .img-thumbnail }
