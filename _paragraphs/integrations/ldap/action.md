---
title: Add LDAP Login Action to Form
book: integrations
chapter: ldap
slug: ldap-settings
weight: 20
---
Once you have LDAP set up, add an action to your User Login Form for the "LDAP Login" action.

![](/assets/img/integrations/ldap/action.png){: .img-fluid .img-thumbnail }

Select the form field that represents your username in LDAP. It must be a string or email field.

Select the form field that represents your password in LDAP. It must be a password field.

If you choose the Passthrough option, any failures except for a failure to Bind the user account, will be ignored and the login information will be passed to the next form action. This allows using both LDAP and the Form.io Login action on the same form.

### Roles
Next map any LDAP properties to user roles. Select the property, the matching value and the role to assign it true. Leave LDAP Property and Value blank to assign the role to all LDAP accounts.

For example:

* LDAP Property: group
* Value: Admins
* Role: Admin

Would assign the Admin role to any members of the Admins group.

The user's DN is also mapped to the list of properties so if the DN is
```dn=myname,ou=admins,dc=example,dc=org``` you can do:

* LDAP Property: ou
* Value: admins
* Role: Admin
