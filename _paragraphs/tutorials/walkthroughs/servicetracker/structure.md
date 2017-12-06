---
title: Application Structure
book: tutorials
section: walkthroughs
chapter: servicetracker
slug: structure
weight: 4
---
Before we dive into the project, it is important to note how this application is structured. This can be done by identifying all of the resources within the application, which are simply the data objects that are used to establish the application structure. We can figure out these Resources by listing our requirements and then highlighting all of the *object* based constructs within those requirements. The requirements are as follows with all the **Resources** in bold.

 - Every **Dealer** should have their own login to the system.
 - Each **Dealer** should be able to create and manage their own **Customer**s.
 - Each **Dealer** should be able to create and manage their own **Contractors**.
 - **Customers** should be assigned to the **Equipment** they purchase and can have multiple equipment.
 - **Dealers** can create **Appointments** for those **Customers** and assign **Contractors** to them.
 - **Contractors** should see the **Appointments** assigned to them and create **Time Clock** and **Service** records against them.

From this, we can create the following Structure.

 - Dealer
   - Contractor
     - Appointment
       - Service
       - Time Clock
   - Customer
     - Appointment
       - Service
       - Time Clock
     - Equipment

From this structure, we can now establish all of the resource relationships necessary to create the application structure. Let's walk through the Form.io resources to better understand how they are structured.