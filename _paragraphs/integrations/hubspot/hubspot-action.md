---
title: Form Action
book: developer
section: integrations
chapter: hubspot
slug: hubspot-action
weight: 20
---
The next thing to integrating with Hubspot is to either create a form or select a form to add an action to. Here is an example form:

![](/assets/img/hubspot/hubspot-createform.png){: .img-fluid .img-thumbnail }

Then add an action to the form using the Hubspot Action.

![](/assets/img/hubspot/hubspot-addaction.png){: .img-fluid .img-thumbnail }

The list of fields is the list of editable fields in your Hubspot Contacts. You can add additional contact properties in Hubspot and they will show up in this list. 

Use this list to map values from form.io to your hubspot contacts. Contacts are matched first by any fields mapped to the Hubspot Email field. If there is no field on the form mapped to the Email field, the logged in user account is used to find the Hubspot Contact. 
