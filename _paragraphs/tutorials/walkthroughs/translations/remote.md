---
title: Going Remote
book: tutorials
section: walkthroughs
chapter: translations
slug: remote
weight: 50
---
To prevent the form definition from dominating the javascript page, we will be converting the current RAW component definition 
into a remote project string hosted on [Form.io's Portal](http://portal.form.io/#/). Feel free to visit the URL in the
Formio.createForm method to view, copy, or import the current form definition or download the [project.json](/assets/project/core-example-1.json) directly. 

<div id="step2">
  <script async src="https://jsfiddle.net/Formio/s9fttw0d/embed/result,js,html,css/"></script>
</div>

Now that we are leveraging the portal's [form builder](https://github.com/formio/ngFormBuilder), we can add more elements to the 
application without having to spend time hard coding each property directly. In this example, a panel element has been added
to the  form to help visual distinguish the form inputs from the buttons that we will be adding momentarily.  