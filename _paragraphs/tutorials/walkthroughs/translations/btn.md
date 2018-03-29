---
title: Adding Button Events
book: tutorials
section: walkthroughs
chapter: translations
slug: buttons
weight: 60
---
To build the interface to toggle the between the translations themselves, we've added another panel, with 3 buttons. 
Each button has had the `Action` property switched to  `event`, and the `Button Event` property set to `toggle'lng'`.

![](/assets/img/tutorials/walkthroughs/translations/btn-portal-settings.png)

With the form configured lets have a look at the javascript for the third and final section. 

<div id="step2">
  <script async src="//jsfiddle.net/Formio/yvg8zweh/embed/result,js,html,css/"></script>
</div>

Here you'll notice we've added two properties during the `Formio.createForm` method: `language` and `i18n`. 
the `language` property can be used to set form's default language at the time of construction, while  `i18n` accepts 
an object that can be leveraged to set translations during the form's creation. In this demo we've changed the
`submit` button to say `complete`.  To learn more about these properties and others, 
please reference [this section](https://github.com/formio/formio.js/blob/master/src/formio.form.js) 
of the [formio.js library](https://github.com/formio/formio.js).


As for actually changing the language, the buttons, since they have a unique event handlers, can be configured
via the `form events` section that has been left blank until this point. to learn more about button events
and please reference [this section](https://github.com/formio/formio.js/blob/master/src/components/button/Button.js#L139)
of the [formio.js library](https://github.com/formio/formio.js).



