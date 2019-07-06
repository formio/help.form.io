---
title: Add OAuth Action to Form
book: integrations
chapter: oauth
slug: action
weight: 30
---
Edit the Actions for the User Login Form

Add a new OAuth Action.

<p class="note"> Please note - When embedding the form into the renderer, append "?live=1" parameter at the end of the form embed url to allow for the OAuth action to trigger properly</p>

### Remote Authentication

If you are using remote authentication then select that in the action and select your OAuth provider that you configured in the project settings. Make sure to also select which OAuth button to associate with the action.

Finally, assign roles based on the external user properties. You can map any OAuth claim value to a property. For example, if the data comes back as
```js
{
  name: 'joe',
  group: 'admins'
}
```

You can map:
* Claim: group
* Value: 'admins'
* Role: Administrator

This will give administrator to anyone who has a claim of group: 'admins'

### Resource Authentication
To use Resource authentication, fill in the settings as shown below. For more information on what these settings do, see the [OAuth Action](/userguide/actions/#action-oauth) in the User's Guide.

![](/assets/img/oauth/project-register-oauth-action-edit.png){: .img-fluid .img-thumbnail }

Click *Submit*.
Go to the *Actions* tab for the **User Login Form**.
Add a new OAuth Action.
Fill in the settings as shown below:

![](/assets/img/oauth/project-login-oauth-action-edit.png){: .img-fluid .img-thumbnail }

Click *Submit*.
