---
title: Email Action
book: userguide
chapter: actions
slug: action-email
weight: 30
---
The email action allows sending an email when an event occurs on a form.

![](/assets/img/action-email.png)

#### Handler

The handler determines when the email will be sent. Currently there are two options. Before and After are the two options. If you select both, it will run twice, once before and once after the methods selected.

#### Method

When to run this action. Select which system events will trigger this action.

#### Transport

Select which email transport to use. These need to be configured in your project settings. Transports will not be available for selection if you haven't configured them.

#### From

Enter the from email address for the emails.

#### To

Enter the email addresses to send to. You can use fields from the form by using `{{ data.email }}` where the field name is email.

#### Subject

The subject of the email. You may use fields from the form using `{{ data.fieldname }}`

#### Message

The message in the email. You may use fields from the form using `{{ data.fieldname }}`

