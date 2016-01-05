---
title: Rest API Authenticating
book: api
weight: 40
chapter: authenticating
---
In order to interact with the API, a [JWT Token](http://jwt.io) is required. This is the authentication token that identifies who the user is in the system. The JWT Token must be sent with each authenticated request in the `x-jwt-token` header.
