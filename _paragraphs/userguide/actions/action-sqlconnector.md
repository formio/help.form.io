---
title: SQL Connector
book: userguide
chapter: actions
slug: action-sqlconnector
weight: 110
---

The SQL Connector Action allows you to integrate form submissions with your own SQL based database and requires your
project to be on the Team Pro plan or Above; The SQL Connector Action currently supports Microsoft SQL, MySQL, and
PostgreSQL. When a submission is created, it will be created in your database for your consumption via
[formio-sql](https://github.com/formio/formio-sql). To get started with the SQL Connector, the SQL Connector
[Data Connection](#settings-project) is required in the corresponding projects settings. Once the settings are
configured, you can map your Form.io form to your Table Columns.

![](/assets/img/action-sql-connector.png){: .img-fluid .img-thumbnail }

Additionally the [formio-sql](https://github.com/formio/formio-sql) server must have access to your database and be
configured with your settings, see [formio-sql](https://github.com/formio/formio-sql) for more information.
When you start the formio-sql server, it will authenticate to Form.io and grab the dynamically generated routes with
SQL query strings
