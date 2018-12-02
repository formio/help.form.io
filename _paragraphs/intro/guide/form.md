---
title: Event Registration Form
book: intro
weight: 300
chapter: guide
layout: chapter
slug: createeventform
---
Now that we have an Event resource, we need a way for people to register to attend the Event. This is a great use case for a **Form** which provides "unstructured" data that references Resources.

Let's create a new form by clicking on the **Forms** section and pressing **New Form**, and then selecting ***API Web Form***. 

![](/assets/img/userguide/apiwebform.png){: .img-fluid .img-thumbnail }

Here we will build an **Registration** form. The first field we will add to this form is a **Resource** field like so...

![](/assets/img/userguide/addresourcefield.png){: .img-fluid .img-thumbnail }

Once we add this, field, we will then configure it as follows to point to the Event resource.

![](/assets/img/userguide/eventresourcefield.png){: .img-fluid .img-thumbnail }

Now that we have an **Event** resource field, we can add other fields to the registration form like so...

![](/assets/img/userguide/eventregister.png){: .img-fluid .img-thumbnail }

We will now press the **Create Form** button to save our form.

### Access Permissions
We also need to ensure that **Authenticated** users can submit the Registration Form, so we will go to the **Access** section and configure the following.

![](/assets/img/userguide/formaccess.png){: .img-fluid .img-thumbnail }

The permissions should automatically save when you set them.

We are now done setting up our Form.io Resources + Forms for our application, now lets build an app!
