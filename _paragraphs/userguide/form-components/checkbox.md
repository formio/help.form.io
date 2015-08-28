---
title: Check Box
book: userguide
chapter: form-components
slug: checkbox
weight: 110
---
<p>A check box is a boolean value input field. It will either be on or off.</p>
<img src="/assets/img/checkbox-display.png">
<h4>Label</h4>
<p>The label for this field that will appear next to it.</p>
<h4>Protected</h4>
<p>If checked, this field is for input only. When being queried by the API it will not appear in the properties. You can still see the value on form.io by going to the submissions for a form.</p>
<h4>Persistent</h4>
<p>If checked, the field will be stored in the database. If you want a field to not save, uncheck this box. This is useful for fields like password validation that shouldn't save.</p>
<h4>Table View</h4>
<p>If checked, this value will show up in the table view of the submissions list.</p>
<img src="/assets/img/checkbox-validation.png">
<h4>Required</h4>
<p>If checked, the field will be required to be checked. If it is required, you may not need to persist the value as it can be assumed to be checked when a form was submitted or it will not submit.</p>
