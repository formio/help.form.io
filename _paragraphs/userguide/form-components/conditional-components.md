---
title: Conditional Components
book: userguide
chapter: form-components
slug: conditional-components
weight: 220
---
<div class="note" markdown="1">
  The conditional component requires an [API key](/userguide/form-components/#component-api) to be configured to function correctly.
</div><br>


Any form component can use conditional logic to determine when to hide or display itself. The settings for a conditional
field, are configured on the component itself, and can be found by viewing the Conditional tab within the components
settings.

The conditional logic is based on the following rules:

 - Each field can hide or display.
 - The visibility is dependent on another component defined within the form.
 - The logic is activated when the configured field contains the plaintext value defined in the settings.

![](/assets/img/conditional-components.png){: .img-fluid .img-thumbnail }

In addition to Simple Conditional logic, you can also use Advanced Conditional logic, which uses actual JavaScript for
any combination of conditions.

JavaScript conditional logic requires you to set the value of show to either true or false. You have access to the
current value of any form component via the data object, and the components API key. Advanced Conditional logic will
only work, if Simple Conditional logic isn't already defined.

![](/assets/img/conditional-components2.png){: .img-fluid .img-thumbnail }

<div class="note" markdown="1">
  When using Advanced Conditional logic with the select boxes form component, you must use the following syntax to get
  the value of the select box, which will always be true or false, depending on if it is checked or not:
  data.selectbox_component.selectbox_value
</div><br>
