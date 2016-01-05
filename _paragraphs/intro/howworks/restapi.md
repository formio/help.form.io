---
title: Automatic Rest APIs
book: intro
weight: 203
chapter: howworks
slug: restapi
---
As each form is built out, a Rest API is automatically built out for it as well and is connected to the form so that all submissions and data access are through that Rest API.

Form.io provides a Swagger UI to browse the API endpoints. You can view and interact with the form data using this UI.

![](/assets/img/intro/intro-howworks-api.png)

The Rest API will repeat all validations from the front end as well as run the unique validation and any custom and hidden validations specified in the field configuration. This ensures that data is checked both on the front end to give a good user experience, and on the backend to ensure data is correct. 