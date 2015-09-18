---
title: Number
book: userguide
chapter: form-components
slug: number
weight: 140
---
<p>Number fields should be used whenever a field should be limited to a type of number.</p>
<img src="/assets/img/number-display.png">
<h4>Label</h4>
<p>The label for this field that will appear next to it.</p>
<h4>Placeholder</h4>
<p>The placeholder text that will appear when this field is empty.</p>
<h4>Increment (Step)</h4>
<p>If set, the number field will be required to be an increment of this number. For example, if Increment is set to 5, possible values would be 0, 5, 10, 15, etc.</p>
<h4>Prefix</h4>
<p>The text to show before a field. An example is '$' for money</p>
<h4>Suffix</h4>
<p>The text to show after a field. An example would be 'lbs' for weight.</p>
<h4>Multiple Values</h4>
<p>If checked, multiple values can be added in this field. The values will appear as an array in the API and an "Add Another" button will be visible on the field.</p>
<h4>Table View</h4>
<p>If checked, this value will show up in the table view of the submissions list.</p>
<img src="/assets/img/number-validation.png">
<h4>Required</h4>
<p>If checked, the field will be required to have a value.</p>
<h4>Minumum Value</h4>
<p>If a number is entered, then the value input on the form must be greater than or equal to this value.</p>
<h4>Maximum Value</h4>
<p>If a number is entered, then the value input on the form must be less than or equal to this value.</p>
<h4>Custom Validation</h4>
<p>You can use javascript to perform validation on a field. The way to respond is by setting the <code>valid</code> variable. If it is set to <code>true</code> then the validation passes. If you set it to a string, the validation fails and the validation message is set to whatever the <code>valid</code> variable is set to.</p>
<p>In addition, <code>input</code> variable is set to the value that has been entered in the field. The <code>component</code> variable is set to the definition of the field.</p>
<p>You can also reference other resources and properties for validation. For example, if there is a user resource with a password field, you can use its value with <code>user.password</code></p>
