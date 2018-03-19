---
title: Developer Info
subtitle: Custom JWT Tokens
book: integrations
weight: 7
chapter: sso
layout: chapter
note: This section only applies to Docker deployed (on-premise) environments.
---
There are many cases where Form.io needs to be tightly integrated into an existing platform with authentication mechanisms already established. Examples of this may include.

 - LDAP Authentication*
 - Active Directory*
 - Custom platform authentication

\* Form.io also has LDAP integration.

For these cases, Form.io can be utilized within these environments by generating special JWT tokens that can be used as SSO into the Form.io platform. This does NOT require any user accounts within Form.io, but rather creates a way to pass along a dynamically generated JWT token claiming certain roles configured within the project.

Here is how it works.

 1. To get started, you will need to deploy your own on-premise deployment into your environment, and ensure you set the ```JWT_SECRET``` of that deployment to a secret only you know. Please see [Docker Deployments](/userguide/docker/) for more information.
 2. You will now need to create **Roles** within your Form.io project that you would like to use to control the access into certain Form.io operations. You can then assign those roles to the **Permissions** of the forms within the **Access** section of those forms. Please take note of the ID's of these roles that were created since they will be used when generating the SSO tokens.
 3. Now that you have some Roles created, you will then need to generate a special JWT token within your own backend platform, or within an authentication proxy using something like AWS Lambda. The payload for this token needs to be as follows.

```
{
  external: true,
  form: {
    _id: 'USER_RESOURCE_FORM_ID'
  },
  project: {
    _id: 'PROJECT_ID
  }
  user: {
    _id: 'external',
    data: {
      name: 'joe'
    }
    roles: [
      'ROLE_ID_1',
      'ROLE_ID_2'
    ]
  }
}
```

You will then make the following replacements.

 - USER_RESOURCE_FORM_ID - This is the ID of the form/resource that would normally contain user records. NOTE: You do not need to provide a user record ID, but just the form ID.
 - PROJECT_ID - This is the Form.io project ID
 - ROLE_ID_1, ROLE_ID_2, ... - These are the ID's of the roles you would like this token to have when authenticating.

This token can be generated using a number of ways and should be generated within your own backend server or hosted lambda function. Since you know the JWT secret of the Docker deployment, you can generate valid tokens such as the following code.

```
/**
 * This code does require our Docker deployment where the "JWT_SECRET" would be the
 * same secret of the environment variable when the docker is spun up.
 */
var jwt = require('jsonwebtoken');
var token = jwt.sign({
  external: true,
  form: {
    _id: '59795d259be16e3ee58fddaa',
  },
  project: {
    _id: '59795d259be16e3ee58fdda6'
  }
  user: {
    _id: 'external',
    data: {
      name: 'joe'
    }
    roles: [
      '59795d259be16e3ee58fdda7'
    ]
  }
}, 'JWT_SECRET');

// We now have a token!
console.log(token);
```

This example uses Node.js and the [JSON Web Token](https://github.com/auth0/node-jsonwebtoken) library, but this could be done within any backend server language. You will also need to make sure to replace JWT_TOKEN string with the password string you used for JWT_TOKEN when you deployed the server via. Docker.

 4. Now that you have a token that is generated from the server, you will then send that to the client application when you serve the application. You can then place the following code in your Template to establish a SSO integration into Form.io.

```
<script type="text/javascript">
localStorage.setItem('formioToken', 'FORMIO_TOKEN');
</script>
```

Here you would just replace the FORMIO_TOKEN with the actual token generated from the server.

 5. Now that you have a token added to localStorage using the special token ```formioToken```, this will be used for all communication to the Form.io API platform and authenticate as the Roles provided in the token!
