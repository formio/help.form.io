---
title: Resource
book: userguide
chapter: form-components
slug: resource
weight: 160
---
<p>A resource field allows users to reference other resources in your project. For example, if you have a Director resource and a Movie resource, you can add a resource field on the Movie to reference the Director.</p>
<img src="/assets/img/resource-display.png">
<h4>Label</h4>
<p>The label for this field that will appear next to it.</p>
<h4>Placeholder</h4>
<p>The placeholder text that will appear when this field is empty.</p>
<h4>Resource</h4>
<p>Select the type of resource to reference. This must be an existing resource within your project.</p>
<h4>Search Expression</h4>
<p>A regular expression to filter the results with. If you don't want to show all possible resources within the Resource type selected in <strong>Resource</strong> you can limit which ones will appear in the options by enter a Regular Expression.</p>
<h4>Select Fields</h4>
<p>Select which properties on the resource to return as part of the options. Select whichever fields you want to display in the template.</p>
<h4>Search Fields</h4>
<p>A list of search filters based on the fields of the resource. See the <a href="https://github.com/travist/resourcejs#filtering-the-results" target="_blank">Resource.js documentation</a> for the format of these filters.</p>
<h4>Item Template</h4>
<p>How an item should appear in the list. Use {{}} brackets to reference variables to display. Be sure to use "Select Fields" above to select the fields to display.</p>
<h4>Allow Multiple Resources</h4>
<p>If checked, more than one value will be allowed to be entered.</p>
<h4>Table View</h4>
<p>If checked, this value will show up in the table view of the submissions list.</p>

