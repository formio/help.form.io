---
title: Date/Time
book: userguide
chapter: form-components
slug: datetime
weight: 120
---
Date/Time form components can be used to input dates, times or both dates and times.
<img src="/assets/img/datetime-display.png">
<h4>Label</h4>
<p>The label for this field that will appear next to it.</p>
<h4>Placeholder</h4>
<p>The placeholder text that will appear when this field is empty.</p>
<h4>Date Format</h4>
<p>The format for displaying this field's date. The format must be specified like the <a href="https://docs.angularjs.org/api/ng/filter/date" target="_blank">AngularJS date</a> filter.</p>
<h4>Protected</h4>
<p>If checked, this field is for input only. When being queried by the API it will not appear in the properties. You can still see the value on form.io by going to the submissions for a form.</p>
<h4>Persistant</h4>
<p>If checked, the field will be stored in the database. If you want a field to not save, uncheck this box. This is useful for fields like password validation that shouldn't save.</p>
<h4>Table View</h4>
<p>If checked, this value will show up in the table view of the submissions list.</p>
<img src="/assets/img/datetime-date.png">
<h4>Enable Date Input</h4>
<p>If this is checked, dates can be entered for this field.</p>
<h4>Initial Mode</h4>
<p>When the date picker appears, this sets the initial view of the picker.</p>
<h4>Minimum Date</h4>
<p>A value of the date that this field's value must be after.</p>
<h4>Maximum Date</h4>
<p>A value of the date that this field's value must be before.</p>
<h4>Starting Day</h4>
<p>On the calendar, select the day of the week that should start the week. In Europe this is typically Monday and in the US this is typically Sunday.</p>
<h4>Minimum Mode</h4>
<p>Limit the datepicker modes to a minimum of this value.</p>
<h4>Maximum Mode</h4>
<p>Limit the datepicker modes to a maximum of this value.</p>
<h4>Maximum Years Displayed</h4>
<p>The maximum number of years to display in the datepicker.</p>
<h4>Show Week Numbers</h4>
<p>If this is checked, when in Day mode, the datepicker will display the week number on the left hand side of the datepicker.</p>
<img src="/assets/img/datetime-time.png">
<h4>Enable Time Input</h4>
<p>Allow entering a time as part of this field.</p>
<h4>Hour Step Size</h4>
<p>The number of hours to increment/decrement in the time picker.</p>
<h4>Minute Step Size</h4>
<p>The number of minutes to increment/decrement in the time picker.</p>
<h4>12 Hour Time (AM/PM)</h4>
<p>If checked, time will be displayed in 12 hour (am/pm) time. If not checked, it will appear in 24 hour time.</p>
<h4>Read Only Input</h4>
<p>If checked, users cannot directly enter a time. They can only use the increment/decrement controls to change the time. If unchecked, users can directly enter time values.</p>
<img src="/assets/img/datetime-validation.png">
<h4>Required</h4>
<p>If checked, the field will be required to have a value.</p>
<h4>Custom Validation</h4>
<p>You can use javascript to perform validation on a field. The way to respond is by setting the "valid" variable. If it is set to "true" then the validation passes. If you set it to a string, the validation fails and the validation message is set to whatever the "valid" variable is set to.</p>
<p>In addition, "input" variable is set to the value that has been entered in the field. The "component" variable is set to the definition of the field.</p>
<p>You can also reference other resources and properties for validation. For example, if there is a user resource with a password field, you can use its value with "user.password"</p>
