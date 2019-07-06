---
title: OAuth Action
book: userguide
chapter: actions
slug: action-oauth
weight: 70
---
The OAuth action allows you to do user authentication within your application against an OAuth provider. When a user authenticates, a popup window will ask them to log into the configured OAuth provider's website, and authenticates them into your application on successful login. This allows users to register and login to your application without having to create a new account.

![](/assets/img/action-oauth.png){: .img-fluid .img-thumbnail }

#### OAuth Provider

The OAuth Provider to authenticate against. This is the service that users will log into when authenticating via OAuth. You will need to register your application with these providers before you can use OAuth. See the [OAuth guide]() for more information. We currently support the following OAuth providers:

 - [GitHub](https://github.com/)
 - [Facebook](https://facebook.com/)
 - [Office 365](https://products.office.com/en-us/business/compare-office-365-for-business-plans)
 - More providers coming soon...

#### Action

The action to perform after the user has authenticated against the OAuth provider.

##### Remote Authentication

This will log a user in based on their remote user account. Unlike the rest of the actions, it does not require creating a user resource submission in form.io. All permissions and ownership still work.

##### Register New Resource

This will create a new submission and perform authentication against the new resource. Use this action for forms like Registration forms. This will create the user account, link the authenticated OAuth provider account, and log them in.

##### Login Existing Resource

This will attempt to authenticate an existing resource via OAuth. Use this action for forms like Login forms. This will search for a user account that is linked to the authenticated OAuth provider account, and log them in.

##### Link Current User

This will link an OAuth provider account to the currently logged in user. Use this to allow users who have authenticated via the [Authentication Action](#action-authentication) with an email and password to also login to their account via OAuth.

#### Role

The selected role will be added to all new resources created by the form with this Authentication Action.

#### Sign-in with OAuth Button

In order to use the OAuth Action in a form, you must choose a [Button component](#button) with the action setting `OAuth` to start the OAuth sign in process. When a user clicks the provided button, the OAuth authentication process will begin by opening a popup of the OAuth provider login page.

<p class="note"> Please note - When embedding the form into the renderer, append "?live=1" parameter at the end of the form embed url to allow for the OAuth action to trigger properly</p>

#### Autofill Fields

Depending on which OAuth provider you select, and if you select the *Register New Resource* action, a number of Autofill Field options may appear. These settings allow you to automatically retrieve data from the OAuth provider account that is used to authenticate and fill in fields in your form before the new resource is created. For example, a GitHub OAuth Registration form may use the Autofill Email Field to assign the email of the GitHub account that was used to authenticate into a field of the new Resource that is created.

<p class="note">Autofill Fields will not always guarantee that they will find a value to fill, as the OAuth provider account may not have any information. For example, a Facebook account may not always fill the Autofill Email Field because some Facebook accounts are created with phone numbers.</p>
