---
title: Resource
book: userguide
chapter: form-components
slug: resource
weight: 155
---
A resource field allows users to reference other resources in your project. For example, if you have a Director resource and a Movie resource, you can add a resource field on the Movie to reference the Director.

![30 resource](https://cloud.githubusercontent.com/assets/13321142/13097244/30611e4a-d4e5-11e5-8467-3c0756ddc553.png){: .img-fluid .img-thumbnail }

#### Label

The label for this field that will appear next to it.

#### Placeholder

The placeholder text that will appear when this field is empty.

#### Resource

Select the type of resource to reference. This must be an existing resource within your project.

#### Search Expression

A regular expression to filter the results with. If you don't want to show all possible resources within the Resource type selected in **Resource** you can limit which ones will appear in the options by enter a Regular Expression.

#### Select Fields

Select which properties on the resource to return as part of the options. Select whichever fields you want to display in the template.

#### Search Fields

A list of search filters based on the fields of the resource. See the [Resource.js documentation](https://github.com/travist/resourcejs#filtering-the-results) for the format of these filters.

#### Item Template

How an item should appear in the list. Use `{% raw %}{{}}{% endraw %}` brackets to reference variables to display. Be sure to use "Select Fields" above to select the fields to display.

#### Custom CSS Class

A custom CSS class to add to this component. You may add multiple class names separated by a space.

#### Tab Index

Sets the `tabindex` attribute of this component to override the tab order of the form. See the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex\) on `tabindex` for more information on how it works.

#### Allow Multiple Resources

If checked, more than one value will be allowed to be entered.

#### Table View

If checked, this value will show up in the table view of the submissions list.


