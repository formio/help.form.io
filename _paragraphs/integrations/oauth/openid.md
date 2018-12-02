---
title: OpenID
book: integrations
chapter: oauth
slug: openid
weight: 50
---
OpenID Connect is a single sign on (SSO) framework for OAuth 2. In order to use OpenID Connect you must have a auth provider that supports OpenID Connect and set up an APP within that provider. Then use the settings from your provider to configure the connection here. See [OpenID Connect](http://openid.net/connect/) for detailed information.

Fill in the application details. The Authorization (or login redirect) callback URL MUST be set to the domain name of your application (ex: https://mydomain.com).

Popular OpenID Connect services include [Auth0](https://auth0.com/) and [Okta](https://www.okta.com/).

OpenID must use Authorization code flow.

![](/assets/img/integrations/oauth/openid.png){: .img-fluid .img-thumbnail }
