---
title: SQL Query Action
book: userguide
chapter: actions
slug: action-sql
weight: 50
---
The email action allows sending an email when an event occurs on a form.

![](/assets/img/action-sql.png)

![](/assets/img/action-sql2.png)

#### Handler

The handler determines when the query will be sent. Currently there are two options. Before and After are the two options. If you select both, it will run twice, once before and once after the methods selected.

#### Method

When to run this action. Select which system events will trigger this action.

#### SQL Server Type

Select the type of server the query will be sent to. Currently two types are supported. MySQL and Microsoft SQL Server. Each type will only be available for selection if you have configured the database credentials in your Project Settings. If you need another type, please contact us.

These are the credentials you may configure in Project Settings:

##### Server Host

The URL of the server host. This must be publically accessible.

##### Server Port

The port the server is listening on. This must be open to any firewalls.

##### Database Name

The name of the database the Query will be run on.

##### User

The database user name.

##### Password

The database user password.

##### Secure Connection (Azure)

If you are using Microsoft Azure and are using a secure connection, check this box.

#### Query

Enter the SQL query to run. You can use substitutes from the form submission using `{{ data.fieldname }}`

#### External ID Field

Many times external databases will generate and return an id when an item is inserted. If you'd like to store this in form.io to associate the two databases together, enter the field name here to store the external id in.

