---
title: CRUD Operations
book: api
weight: 50
chapter: crud
---
Once you have an authentication token, you can perform CRUD operations on endpoints. Unless the resource allows anonymous access you will need to include the JWT token in the `x-jwt-token` header of each request.
