---
title: Project User
book: developer
section: api
chapter: authenticating
slug: project-user
weight: 20
---
In order to authenticate as a project user, you will need to set up a User Resource within your application and create Register and Login Forms with the appropriate Authentication Actions.

Once you have the User Resource and Forms set up, you can authenticate client users within your application. In order to do this, perform a POST request to `https://{appname}.form.io/{loginform}/submission` with the email and password passed in a data object.

Doing client user authentication is much more dependent on how you built out your application so replace `{variables}` with the specifics from your application.

<script src="https://gist.github.com/rahatarmanahmed/a04cf6166ba8347ff629.js"></script>
