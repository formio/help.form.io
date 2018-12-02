---
title: Nested Form
book: userguide
chapter: form-components
slug: nested-form
weight: 190
---
Nested Form component allows you to insert one (child) Resource/Form with all its fields into another (parent) Resource/Form. 

For example, if you have Song resource (parent) and Artist resource (child) and you want to create both Song and Artist submissions by submitting one form, you may use Nested Form component for this case. 

![](/assets/img/userguide/form-components/nested-form-display.png){: .img-fluid .img-thumbnail }

#### Name

The label for this field that will appear next to it.

#### Hide Label

Check if you want to hide the label when your parent form is rendered

#### Label Position

Choose where to render the label relatively to the Nested Form component itself

#### Form

Select a child Form/Resource that you'd like to nest into parent form

#### Custom CSS Class

CSS class / classes (space separated) that will be added to component's element

#### Save as reference

Check if you'd like to save only _id of child form submission instead of storing all child submission object inside of parent submission. This will also help all changes you've made in child submission be reflected in parent submission. 
If not checked, whole child submission object will be saved, and no any child submission changes would be reflected in parent submission. 

#### Nested Forms for remotely deployed project

If your project is remotely deployed with subdirectories, then you need in your app call 
 ```javascript
 Formio.setProjectUrl(<project_URL>). 
 ```
 This will help Formio understand where to fetch nested resources from and will set up base URLs properly.
