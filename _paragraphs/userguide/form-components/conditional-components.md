---
title: Conditional Components
book: userguide
chapter: form-components
slug: conditional-components
weight: 220
---
<div class="note" markdown="1">
  The conditional component requires an [API key](/userguide/#component-api) to be configured to function correctly.
</div><br>


Any form component can use conditional logic to determine when to hide or display itself. The settings for a conditional
field, are configured on the component itself, and can be found by viewing the Conditional tab within the components
settings.

The conditional logic is based on the following rules:

 - Each field can hide or display.
 - The visibility is dependent on another component defined within the form.
 - The logic is activated when the configured field contains the plaintext value defined in the settings.

![](/assets/img/conditional-components.png)
