---
title: Phone Number
book: userguide
chapter: form-components
slug: phonenumber
weight: 150
---
The phone number form component can be used to enter phone numbers in a form.
<img src="/assets/img/phonenumber-display.png">
<p>A textfield can be used for general text input that is shorter than a sentence. There are options to define input masks and validations so information can be molded into desired formats.</p>
<img src="/assets/img/textfield-display.png">
<h4>Label</h4>
<p>The label for this field that will appear next to it.</p>
<h4>Placeholder</h4>
<p>The placeholder text that will appear when this field is empty.</p>
<h4>Input Mask</h4>
<p>An input mask helps the user with input by ensuring a predefined format. For a phone number field, the input mask defaults to (999) 999-9999.</p>

<p>
  &nbsp;&nbsp;9: numeric<br />
  &nbsp;&nbsp;a: alphabetical<br />
  &nbsp;&nbsp;*: alphanumeric<br />
</p>

Example telephone mask: (999) 999-9999
<p>See the <a href="https://github.com/RobinHerbots/jquery.inputmask" target="_blank">jquery.inputmask</a> documentation for more information.</p>
<h4>Prefix</h4>
<p>The text to show before a field. An example is '$' for money</p>
<h4>Suffix</h4>
<p>The text to show after a field. An example would be 'lbs' for weight.</p>
<h4>Multiple Values</h4>
<p>If checked, multiple values can be added in this field. The values will appear as an array in the API and an "Add Another" button will be visible on the field.</p>
<h4>Unique</h4>
<p>If checked, this field will be enforced as unique for this form. Submissions will be checked to see if an existing value matches. This validation is currently server side only.</p>
<h4>Protected</h4>
<p>If checked, this field is for input only. When being queried by the API it will not appear in the properties. You can still see the value on form.io by going to the submissions for a form.</p>
<h4>Persistant</h4>
<p>If checked, the field will be stored in the database. If you want a field to not save, uncheck this box. This is useful for fields like password validation that shouldn't save.</p>
<h4>Table View</h4>
<p>If checked, this value will show up in the table view of the submissions list.</p>
<img src="/assets/img/phonenumber-validator.png">
<h4>Required</h4>
<p>If checked, the field will be required to have a value.</p>
