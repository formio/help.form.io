---
title: Survey
book: userguide
chapter: form-components
slug: survey
weight: 170
---
The Survey component works similar to the radio. Instead of one question, users are able to select a value for multiple questions which are configured within the component settings. Survey is a great component to utilize when asking multiple questions with the same context of answers or values. 

![](/assets/img/userguide/form-components/survey.png){: .img-fluid .img-thumbnail }

#### Label
The label for this component that will appear next to it.
#### Questions
The questions you would like to ask within the survey.
#### Values
The values that can be selected per question. Example: 'Satisfied', 'Very Satisfied', etc.
#### Custom CSS Class
A custom CSS class to add to this component. You may add multiple class names separated by a space.
#### Tab Index
Sets the tabindex attribute of this component to override the tab order of the form. See the MDN documentation on tabindex for more information on how it works.
 
#### Protected
If checked, this field is for input only. When being queried by the API it will not appear in the properties and also should not appear in exported data. You won't be able to see the value on form.io, but it will be stored in database under the hood.
#### Persistent
If checked, the field will be stored in the database. If you want a field to not save, uncheck this box. This is useful for fields like password validation that shouldn’t save.
#### Table View
If checked, this value will show up in the table view of the submissions list.
 
#### Required
If checked, the field will be required to have every question answered. If it is required, you may not need to persist the value as it can be assumed to be checked when a form was submitted or it will not submit.
#### Custom Validation
You can use javascript to perform validation on a field. The way to respond is by setting the valid variable. If it is set to true then the validation passes. If you set it to a string, the validation fails and the validation message is set to whatever the valid variable is set to.
In addition, input variable is set to the value that has been entered in the field. The component variable is set to the definition of the field.
