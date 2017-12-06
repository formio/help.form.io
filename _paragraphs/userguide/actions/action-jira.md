---
title: Atlassian Jira
book: userguide
chapter: actions
slug: action-jira
weight: 100
---

The Jira Action allows you to integrate form submissions with Jira's issue tracking. When a submission is made, this action will create a linked issue, in the Jira platform. When a submission is updated/deleted, this linked issue will also be updated/deleted. To get started with the Jira connection, the Atlassian [Data Connection](#settings-project) is required in the corresponding projects settings.

The Jira action configuration page has the following settings:
Blocking:
  - Whether or not the submission request should block for a Jira response. Useful if you want to confirm a ticket was created.
Project:
  -  The Project within Jira that the issue will be associated with.
Issue Type:
  - The type of issue that new issues will be created as, e.g. bug, story, etc. These are pulled from your Jira Project.
Summary:
  - The input field on the form, that you want the issue text to be supplied with.

![](/assets/img/action-jira-settings.png)

---

To use OAuth authentication with Jira, you must first configure your project settings in Form.io, and then in Jira itself. You can start by generating an RSA Keypair.

On OSX/Linux the following will generate a Keypair:
Create a key pair
`openssl genrsa -out key.pem 2048`

Extract the public key from the pair
`openssl rsa -in key.pem -pubout`

Display the private key
`cat key.pem`

Copy the contents of the private key, to the project settings for Atlassian. While editing the atlassian settings, add your host name and a random string of letters for your consumer key.
![](/assets/img/jira-formio.png)

Now login to Jira to create an Application link:
![](/assets/img/action-jira-oauth1.png)

Edit the contents of the connection, to update the Incoming Authentication:
![](/assets/img/action-jira-oauth2.png)

With the application link created, you can now interact with Jira via the Jira Action from within Form.io, using OAuth!
