---
title: Deploy Projects
book: developer
section: libraries
chapter: cli
weight: 2
slug: deploy
---
```
formio deploy [src] [dst]
```

You can deploy a project on a paid plan on form.io to a hosted server with this command. Specify the source and destination servers and the project will be created or updated on the destination server.

#### Examples

```
// A project without a server is implied from https://form.io
formio deploy myproject http://myproject.localhost:3000

// Projects can be specified with a subdomain.
formio deploy https://myproject.form.io http://myproject.localhost:3000

// Projects can also be referred to with their project id which will need to be looked up.
formio deploy https://form.io/project/{projectId} http://localhost:3000/project/{projectId}
```

Each server will require authentication so you will be asked twice, once for the source and once for the destination. These can also be specified with --src-username, --src-password, --dst-username, --dst-password.

