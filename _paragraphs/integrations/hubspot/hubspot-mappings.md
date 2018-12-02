---
title: Mappings
book: developer
section: integrations
chapter: hubspot
slug: hubspot-mappings
weight: 30
---
There are several different ways to map information from form.io to Hubspot. Select the appropriate action for mapping the information.

![](/assets/img/hubspot/hubspot-actions.png){: .img-fluid .img-thumbnail }
 
#### Map to a form field

![](/assets/img/hubspot/hubspot-mapfield.png){: .img-fluid .img-thumbnail }

This is the simplest form of integration. Select "Map to a form field" in the action field and then select which field on the form you would like to map it to. Values will then populate from the form field to the Hubspot contact property.
 
#### Set to a static or rendered value

![](/assets/img/hubspot/hubspot-value.png){: .img-fluid .img-thumbnail }

Sometimes you may want to set a contact property to a specific value such as the name of the conference the form is from. You can do this with the "Set to static or rendered value" and then in the value field, input what you want the field set to.

![](/assets/img/hubspot/hubspot-value2.png){: .img-fluid .img-thumbnail }

You can also use this field to render fields from the form if you need to change the information. For example, to {{ item.data.firstname }} would be replaced with the firstname field on the form. This supports all the functionality of [nunjucks](https://mozilla.github.io/nunjucks/)

#### Increment a number

![](/assets/img/hubspot/hubspot-increment.png){: .img-fluid .img-thumbnail }

Any field in Hubspot that contains a number can be incremented whenever the form action occurs. The Value field is the amount to increment the field by. This can be useful for tracking how many times a user performs some action within the system. 

#### Decrement a number

This field is the opposite of increment.

#### Set to current Timestamp

![](/assets/img/hubspot/hubspot-timestamp.png){: .img-fluid .img-thumbnail }

If you want to track the last time the user performed some action, you can use the "Set to current datetime" action. This will get the current timestamp and set it in that field in Hubspot.
