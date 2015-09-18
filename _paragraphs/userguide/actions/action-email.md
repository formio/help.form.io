---
title: Email Action
book: userguide
chapter: actions
slug: action-email
weight: 30
---
<p>The email action allows sending an email when an event occurs on a form.</p>
<img src="/assets/img/action-email.png">
<h4>Handler</h4>
<p>The handler determines when the email will be sent. Currently there are two options. Before and After are the two options. If you select both, it will run twice, once before and once after the methods selected.</p>
<h4>Method</h4>
<p>When to run this action. Select which system events will trigger this action.</p>
<h4>Transport</h4>
<p>Select which email transport to use. These need to be configured in your project settings. Transports will not be available for selection if you haven't configured them.</p>
<h4>From</h4>
<p>Enter the from email address for the emails.</p>
<h4>To</h4>
<p>Enter the email addresses to send to. You can use fields from the form by using <code>{{ data.email }}</code> where the field name is email.</p>
<h4>Subject</h4>
<p>The subject of the email. You may use fields from the form using <code>{{ data.fieldname }}</code></p>
<h4>Message</h4>
<p>The message in the email. You may use fields from the form using <code>{{ data.fieldname }}</code></p>
