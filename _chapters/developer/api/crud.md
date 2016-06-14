---
title: CRUD Operations
book: developer
section: api
weight: 70
chapter: crud
---
Once you have an authentication token, you can perform CRUD operations on endpoints. Unless the resource allows anonymous access you will need to include the JWT token in the `x-jwt-token` header of each request.
