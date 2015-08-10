---
title: Authentication Action
book: userguide
chapter: actions
slug: action-authentication
weight: 20
---
<p>The authentication action allows you to do user authentication within your application against a User Resource. When a user authenticates, they will be issues a javascript web token (jwt) which will authorize access to parts of the system.</p>
<img src="/assets/img/action-authentication.png">
<h4>Resource Association</h4>
<p>The resource association will determine how the authentication is handled with the submission. Use <strong>New Resource</strong> for forms like Registration forms. This will create a new submission and perform the authentication against the new resource. This will both create the user account and log them in. Use <strong>Existing Resource</strong> for forms like Login forms where users should be checked against existing submissions.</p>
<h4>Username Field</h4>
<p>This is the field on the form that contains the username. If there are embedded resources within the form, you can authenticate against that embedded resource instead of the current form.</p>
<h4>Password Field</h4>
<p>This is the field on the form that contains the password.</p>
