---
title: Office 365 Calendar
book: userguide
chapter: actions
slug: action-office365-calendar
weight: 90
---
The Office 365 Calendar action allows you to integrate form submissions into your Office 365 Calendar. When a new submission is made, this action will add a calendar event to your Office 365 Calendar. When a submission is updated/deleted, it will update/delete the corresponding calendar event.

![](/assets/img/action-office365-calendar.png){: .img-fluid .img-thumbnail }

#### Handler

The handler determines when the calendar event request will be sent. Currently there are two options. Before and After are the two options. If you select both, it will run twice, once before and once after the methods selected.

#### Method

When to run this action. Select which system events will trigger this action.

#### Authentication Method

The method of authentication to use with Office 365.

##### OAuth Delegated

This method will use the currently logged in user's OAuth token to authenticate with Office 365. This effectively logs into Office 365 as the current user, and will store all calendar events under *their account*. This is useful if your users will be logging in through Office 365, and you want them to manage their own calendar events.

For more information on setting up Office 365 OAuth, see the [OAuth guide](/developer/integrations/oauth/).

<p class="note" markdown="1">OAuth Delegated **requires** that users log in via Office 365 OAuth.</p>

##### Application Certificate

This method will use a client certificate to perform server-to-server authentication with Office 365. This effectively logs into Office 365 as an application, and will store all calendar events in a *single account*. This is useful if you do not want to require that your users log into **&lt;<span class="text-primary">form</span>.<span class="text-secondary">io</span>&gt;** via Office 365 OAuth, and you want to manage your calendar events from a single location.

For more information on setting up Office 365 client certificates, see the [Office365 guide](/developer/integrations/office365/).

#### Subject

The subject of the created event. You can use substitutes from the form submission using `{{ data.fieldname }}`.

#### Body

The body of the created event. You can use substitutes from the form submission using `{{ data.fieldname }}`.

#### Attendees

The attendees of the created event. You can use substitutes from the form submission using `{{ data.fieldname }}`.

#### Time Zone

The time zone of the created event.

#### Start Time Field

The form field that contains the start date of the created event. This field must be a Date/Time Component.

#### End Time Field

The form field that contains the end date of the created event. This field must be a Date/Time Component.

#### Location Field

The form field that contains the location of the created event. This field must be an Address Component.

#### Categories

The categories of the created event. You can use substitutes from the form submission using `{{ data.fieldname }}`.

#### Web Link

The web link to provide for the created event. You can use substitutes from the form submission using `{{ data.fieldname }}`.
