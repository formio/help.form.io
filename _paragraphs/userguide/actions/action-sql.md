---
title: SQL Query Action
book: userguide
chapter: actions
slug: action-sql
weight: 50
---
<p>The email action allows sending an email when an event occurs on a form.</p>
<img src="/assets/img/action-sql.png">
<img src="/assets/img/action-sql2.png">
<h4>Handler</h4>
<p>The handler determines when the query will be sent. Currently there are two options. Before and After are the two options. If you select both, it will run twice, once before and once after the methods selected.</p>
<h4>Method</h4>
<p>When to run this action. Select which system events will trigger this action.</p>
<h4>SQL Server Type</h4>
<p>Select the type of server the query will be sent to. Currently two types are supported. MySQL and Microsoft SQL Server. If you need another type, please contact us.</p>
<h4>Server Host</h4>
<p>The URL of the server host. This must be publically accessible.</p>
<h4>Server Port</h4>
<p>The port the server is listening on. This must be open to any firewalls.</p>
<h4>Database Name</h4>
<p>The name of the database the Query will be run on.</p>
<h4>User</h4>
<p>The database user name.</p>
<h4>Password</h4>
<p>The database user password.</p>
<h4>Secure Connection (Azure)</h4>
<p>If you are using Microsoft Azure and are using a secure connection, check this box.</p>
<h4>Query</h4>
<p>Enter the SQL query to run. You can use substitutes from the form submission using <strong>{{ data.fieldname }}</strong></p>
<h4>External ID Field</h4>
<p>Many times external databases will generate and return an id when an item is inserted. If you'd like to store this in form.io to associate the two databases together, enter the field name here to store the external id in.</p>
