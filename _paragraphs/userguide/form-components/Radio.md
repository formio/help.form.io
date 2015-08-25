---
title: Radio
book: userguide
chapter: form-components
slug: radio
weight: 70
---
Radio form components should be used when presenting a list of options from which one should be chosen.
<img src="/assets/img/radio-display.png">
<h4>Label</h4>
<p>The label for this field that will appear next to it.</p>
<h4>Values</h4>
<p>These are the values that will be selected on this field. The Value column is what will be stored in the database and the Label is what is shown to the users.</p>
<h4>Protected</h4>
<p>If checked, this field is for input only. When being queried by the API it will not appear in the properties. You can still see the value on form.io by going to the submissions for a form.</p>
<h4>Persistent</h4>
<p>If checked, the field will be stored in the database. If you want a field to not save, uncheck this box. This is useful for fields like password validation that shouldn't save.</p>
<h4>Table View</h4>
<img src="/assets/img/radio-validation.png">
<h4>Required</h4>
<p>If checked, the field will be required to have a value.</p>
<h4>Custom Validation</h4>
<p>You can use javascript to perform validation on a field. The way to respond is by setting the "valid" variable. If it is set to "true" then the validation passes. If you set it to a string, the validation fails and the validation message is set to whatever the "valid" variable is set to.</p>
<p>In addition, "input" variable is set to the value that has been entered in the field. The "component" variable is set to the definition of the field.</p>
<p>You can also reference other resources and properties for validation. For example, if there is a user resource with a password field, you can use its value with "user.password"</p>
