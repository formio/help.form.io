---
title: Select
book: userguide
chapter: form-components
slug: select
weight: 80
---
A select field will display a list of values in a drop down list to users. Users can select one of the values.
<img src="/assets/img/select-display.png">
<h4>Label</h4>
<p>The label for this field that will appear next to it.</p>
<h4>Placeholder</h4>
<p>The placeholder text that will appear before an option is selected.</p>
<h4>Data Source Type</h4>
<p>Select the type of data the options will be pulled from.</p>
<h5>Values</h5>
<p>These are the values that will be selected on this field. The Value column is what will be stored in the database and the Label is what is shown to the users.</p>
<h5>Raw Json</h5>
<p>Enter a json array to use. It should be formatted as an array of objects with named properties.</p>
<h5>URL</h5>
<p>Enter a url with a data source in json format.</p>
<h4>Value Property</h4>
<p>If Raw JSON or URL is selected, enter the name of the property on the objects that will contain the value that will be stored in the database.</p>
<h4>Item Template</h4>
<p>If Raw JSON or URL is selected, use the template field to determine how the values will be displayed in the select box. You can use the <strong>item</strong> variable to access the current object in the array. For example, you can embed the value by using {{ item.value }} in a template.</p>
<img src="/assets/img/select-validation.png">
<h4>Required</h4>
<p>If checked, the field will be required to have a value.</p>
