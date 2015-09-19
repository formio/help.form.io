---
title: Select
book: userguide
chapter: form-components
slug: select
weight: 80
---
A select field will display a list of values in a drop down list to users. Users can select one of the values.

![](/assets/img/select-display.png)

#### Label

The label for this field that will appear next to it.

#### Placeholder

The placeholder text that will appear before an option is selected.

#### Data Source Type

Select the type of data the options will be pulled from.

##### Values

These are the values that will be selected on this field. The Value column is what will be stored in the database and the Label is what is shown to the users.

##### Raw Json

Enter a JSON Array to use. It should be formatted as an array of objects with named properties.

##### URL

Enter a url with a data source in JSON Array format.

#### Value Property

If Raw JSON or URL is selected, enter the name of the property on the objects that will contain the value that will be stored in the database.

#### Item Template

If Raw JSON or URL is selected, use the template field to determine how the values will be displayed in the select box. You can use the **item** variable to access the current object in the array. For example, you can embed the value by using {{ item.value }} in a template.

![](/assets/img/select-validation.png)

#### Required

If checked, the field will be required to have a value.

