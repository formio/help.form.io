---
title: Going Remote
book: tutorials
section: walkthroughs
chapter: translations
slug: remote
weight: 50
---
To prevent the form definition from overloading the javascript page, we'll be converting the current RAW component definition 
into a remote project string host on [Form.io's Portal](http://portal.form.io/#/). Note, you can always visit the URL in the
Formio.createForm method to view, copy, or even import the current version of the project.    

<div id="step2">
  <script async src="//jsfiddle.net/Formio/s9fttw0d/embed/result,js,html,css/"></script>
</div>

Since we're now leveraging portals [form builder](https://github.com/formio/ngFormBuilder) we can add more elements to the 
application without having to hardcoded each property. For example, we've added a panel element to the form to help visual distinguish the form 
from the buttons that we'll be adding momentarily.  