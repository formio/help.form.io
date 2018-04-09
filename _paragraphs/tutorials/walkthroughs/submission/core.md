---
title: Formio.js
book: tutorials
section: walkthroughs
chapter: submission
slug: intro
weight: 20
---
Since there is a great deal going on in this application, we will start by taking notice of the parent form's text-field.
It appears to have a default ```Populating...``` when in actuality, its value is generated on the application layer and
is independent of the form's definition.

<div id="formiojs">
  <script async src="https://jsfiddle.net/Formio/obhgrrd8/embed/result,js,html,css/"></script>
</div>

Taking a look at the javascript, notice the event listener that checks the parent form's select component
every time a form change is made. If a new value is selected or changed, the nested form's text-field will
dynamically update. For your convince, a ```Log Submission``` button has been added to the form. Engaging with the button
will print to the console the current the submission object. For example, selecting any ```Populate Option x```
then logging the submission will show that the nested form's populated value both displayed in the form and
attached to the submission object. Finally, the other three buttons show other common use cases for injecting data.
The first demonstrates a manual approach to populating a nested form. The final two events inject data fetched form the Form.io servers.

