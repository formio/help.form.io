---
title: Address
book: userguide
chapter: form-components
slug: address
weight: 100
---
The address form component is a special component that does lookups for addresses entered. It can be entered in free form and will save the address as well as geolocation and other information.
<img src="/assets/img/address-display.png">
<h4>Label</h4>
<p>The label for this field that will appear next to it.</p>
<h4>Placeholder</h4>
<p>The placeholder text that will appear when this field is empty.</p>
<h4>Allow Multiple Addresses</h4>
<p>Allow multiple addresses to be entered into the field.</p>
<h4>Unique</h4>
<p>If checked, this field will be enforced as unique for this form. Submissions will be checked to see if an existing value matches. This validation is currently server side only.</p>
<h4>Protected</h4>
<p>If checked, this field is for input only. When being queried by the API it will not appear in the properties. You can still see the value on form.io by going to the submissions for a form.</p>
<h4>Persistant</h4>
<p>If checked, the field will be stored in the database. If you want a field to not save, uncheck this box. This is useful for fields like password validation that shouldn't save.</p>
<h4>Table View</h4>
<p>If checked, this value will show up in the table view of the submissions list.</p>
<img src="/assets/img/address-validation.png">
<h4>Required</h4>
<p>If checked, the field will be required to have a value.</p>
