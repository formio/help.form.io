---
title: Adding Button Events
book: tutorials
section: walkthroughs
chapter: translations
slug: buttons
weight: 60
---
Adding an interface to toggle the between the languages has been added via a separate panel with 3 buttons. 
Each button has had the `Action` property switched to `Event`, and the `Button Event` property set to `toggle'lng'`.

![](/assets/img/tutorials/walkthroughs/translations/btn-portal-settings.png){: .img-fluid .img-thumbnail }

With the form configured, take a look at the javascript of the third and final section. 

<div id="step3">
  <script async src="https://jsfiddle.net/Formio/yvg8zweh/embed/result,js,html,css/"></script>
</div>

Notice the two properties added during the `Formio.createForm` method: `language` and `i18n`. 
the `language` property can be used to set form's default language at the time of construction, while the `i18n` property accepts 
an object that can be used to set translations during form's creation. In this demo we've changed the english default for 
the `Submit` button to read `Complete`. To learn more about these properties and other options, 
please reference [this section](https://github.com/formio/formio.js/blob/master/src/formio.form.js) 
of the [formio.js library](https://github.com/formio/formio.js).


As for actually changing languages, the buttons, since they have a unique event handlers, can be configured
via the `form events` section that has been left blank until this point. to learn more about button events
and please reference [this section](https://github.com/formio/formio.js/blob/master/src/components/button/Button.js#L139)
of the [formio.js library](https://github.com/formio/formio.js).



