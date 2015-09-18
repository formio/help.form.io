---
title: Creating a Form
book: userguide
chapter: forms
slug: new-form
weight: 10
---
<p>Forms can be created from the Project View page. Get to this page by clicking on the Project name on the My Projects page or clicking the <strong>View</strong> tab at the top right of the page. </p>
<p>At the bottom of the list of forms, click the <strong>New Form</strong> button to begin creating a form.</p>
<img src="/assets/img/new-form.png">
<h4>Title</h4>
<p>Enter a title for your form. This will help you identify it later.</p>
<h4>Name</h4>
<p>This is the machine name for your form. It can only contain alphanumeric characters and should be camel cased where this first word is lower cased and each subsequent word starts with a capital letter. A name will be automatically generated for you but you can change it if you want. The Name field will be used when embedding the form into your application.</p>
<h4>API Path</h4>
<p>The API Path is the endpoint for accessing the form and form submissions. Choose the endpoint you'd like to use.</p>
<h4>Form Components</h4>
<p>Drag and Drop form components on to your form. See <a href="#form-components">Form Components</a> for more information on types of components and how to configure them.</p>
<h4>Advanced Settings</h4>

Enter any advanced settings in the advanced settings section. Currently there is only one setting and that is **custom submission URL**. Saving a URL in this setting will **send submissions to that URL** instead of **&lt;<span class="text-primary">form</span>.<span class="text-secondary">io</span>&gt;**. This is helpful if you want to handle the form submissions with your own service or if you wish to pre-process the data before sending it to **&lt;<span class="text-primary">form</span>.<span class="text-secondary">io</span>&gt;**. Use this only if you know what you are doing.
