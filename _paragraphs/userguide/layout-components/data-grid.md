---
title: Data Grid
book: userguide
chapter: layout-components
slug: data-grid
weight: 40
---
Data Grids allow you to create multiple components on to a line item grid. Once components are in place, users can add multiple sets of these grids as they see fit. This is especially useful when needing the ability to add multiple sets of the same fields within a form.

![data grid](https://cloud.githubusercontent.com/assets/13321142/15561075/e7d1c140-22b7-11e6-8a12-d541b057e48a.png)

#### Number of Rows

The number of rows on the table. This can be adjusted at any time.

#### Number of Columns

The number of columns on the table. This can be adjusted at any time.

#### Custom CSS Class

A custom CSS class to add to this component. You may add multiple class names separated by a space.

#### Striped

Whether or not the table is striped for odd and even rows.

#### Bordered

Whether or not the table has a border set on it. (This can be changed by your own CSS as well)

#### Hover

Whether or not to add a hover class on rows when the mouse hovers over them.

#### Condensed

Whether or not to condense the size of each sell by removing padding.

#### Protected

If checked, the fields in the data grid are for input only. When being queried by the API it will not appear in the properties. You can still see the value on form.io by viewing the form submissions.

#### Persistent

If checked, the fields in the data grid will be stored in the database. If you want a field to not save, uncheck this box. This is useful for fields like password validation that shouldn’t save.

#### Table View

If checked, this fields in the data grid will show up in the table view of the submissions list.
