---
title: Atlassian Jira
book: userguide
chapter: actions
slug: action-jira
weight: 100
---

The Jira Action allows you to integrate form submissions with Jira's issue tracking. When a submission is made,
this action will create a linked issue, in the Jira platform. When a submission is updated/deleted, this
linked issue will also be updated/deleted. To get started with the Jira connection, the Atlassian Data
Connections required in the corresponding projects settings.

To get started go to Settings -> Data Connections -> Atlassian and input your `Atlassian URL` without protocol.
Then add your Atlassian login credentials.

![](/assets/img/jira-action-01.png){: .img-fluid .img-thumbnail }

Once configured, create or edit any form which you intend on adding the Jira action to.

![](/assets/img/jira-action-02.png){: .img-fluid .img-thumbnail }

Once constructed click the `Action` tab.

![](/assets/img/jira-action-03.png){: .img-fluid .img-thumbnail }

In the dropdown find and select the `Jira (Premium)` option, then click `Add Action`.

![](/assets/img/jira-action-04.png){: .img-fluid .img-thumbnail }

If everything is configured correctly, the Jira action can now be configured and integrated into your form.

![](/assets/img/jira-action-05.png){: .img-fluid .img-thumbnail }


The Jira action configuration page has the following settings:

Blocking:

  - Whether or not the submission request should block for a Jira response. Useful if you want to confirm a ticket was created.

Project:

  -  The Project within Jira that the issue will be associated with.

Issue Type:

  - The type of issue that new issues will be created as, e.g. bug, story, etc. These are pulled from your Jira Project.

User Summary:

  - The input field on the form, that you want the issue text to be supplied with.


