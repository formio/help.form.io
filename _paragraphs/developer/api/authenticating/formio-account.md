---
title: Form.io Account
book: developer
section: api
chapter: authenticating
slug: formio-account
weight: 10
---
If you are developing an admin application or integration with a service that does not require user accounts, you can authenticate as your **&lt;<span class="text-primary">form</span>.<span class="text-secondary">io</span>&gt;** account.

In order to get the JWT Token, make a **POST** request to `https://formio.form.io/user/login/submission`. Be sure to send the `user.email` and `user.password` wrapped in a `data` object, as shown below:

<script src="https://gist.github.com/rahatarmanahmed/54ca5dcac557e82fdf2b.js"></script>
