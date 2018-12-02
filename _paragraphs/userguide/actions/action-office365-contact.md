---
title: Office 365 Contact
book: userguide
chapter: actions
slug: action-office365-contact
weight: 80
---
The Office 365 Contact action allows you to integrate form submissions into your Office 365 Contact list. When a new submission is made, this action will add a contact to your Office 365 Contact list. When a submission is updated/deleted, it will update/delete the corresponding Office 365 Contact.

![](/assets/img/action-office365-calendar.png){: .img-fluid .img-thumbnail }

#### Handler

The handler determines when the contact request will be sent. Currently there are two options. Before and After are the two options. If you select both, it will run twice, once before and once after the methods selected.

#### Method

When to run this action. Select which system events will trigger this action.

#### Authentication Method

The method of authentication to use with Office 365.

##### OAuth Delegated

This method will use the currently logged in user's OAuth token to authenticate with Office 365. This effectively logs into Office 365 as the current user, and will store all contacts under *their account*. This is useful if your users will be logging in through Office 365, and you want them to manage their own contacts.

For more information on setting up Office 365 OAuth, see the [OAuth guide](/developer/integrations/oauth/).

<p class="note" markdown="1">OAuth Delegated **requires** that users log in via Office 365 OAuth.</p>

##### Application Certificate

This method will use a client certificate to perform server-to-server authentication with Office 365. This effectively logs into Office 365 as an application, and will store all contacts in a *single account*. This is useful if you do not want to require that your users log into **&lt;<span class="text-primary">form</span>.<span class="text-secondary">io</span>&gt;** via Office 365 OAuth, and you want to manage your contacts from a single location.

For more information on setting up Office 365 client certificates, see the [Office365 guide](/developer/integrations/office365/).

#### Office 365 Fields

These are all the Office 365 Contact fields you may map your form components to. For example, mapping the Email Address field to an Email component in your form will set the contact's Email Address field with the data submitted in the Email component.

