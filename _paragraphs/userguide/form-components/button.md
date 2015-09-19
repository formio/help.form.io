---
title: Button
book: userguide
chapter: form-components
slug: button
weight: 20
---
Buttons can be added to forms to do various actions on the form.

![](/assets/img/button-display.png)

#### Label

This is the label that will appear on the button.

#### Action

This is the action that will be performed. Currently there are two actions that can be performed.

##### Submit

A submit action submits the form to either the form.io server or a custom callback url if it was set on the form.

##### Reset

Reset the form back to its original state.

#### Theme

Set a theme for the button. These options currently map to [bootstrap](http://getbootstrap.com/css/#buttons-options) classes that will be added to the button.

#### Size

Set the size of the button. These options currently map to [bootstrap](http://getbootstrap.com/css/#buttons-sizes) classes that will be added to the button.

#### Left Icon

If you have an icon library and would like to include an icon to the left of the button label, you can do so by adding the icon class here.

#### Right Icon

If you have an icon library and would like to include an icon to the right of the button label, you can do so by adding the icon class here.

#### Block

If checked, the display of the button will be set to "block" which will cause it to span the full width of the container.

#### Disable on Form Invalid

If checked, this button will be disabled if any of the client side validation fails. This is useful for preventing the submission of a form that has invalid data entered.

