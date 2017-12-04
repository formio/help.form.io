---
title: Data Grid
book: userguide
chapter: layout-components
slug: data-grid
weight: 40
---
**Data Grids** allow users to add multiple components on to a line item grid. Once placed,  
users can add multiple components inside of the **Data Grid**. Additionally, any number of grids can be added
within a form which is especially useful when needing the ability to add or duplicate multiple fields sets.

From the **Data** component menu, add the **Data Gird (Array)** to any active form. By default the grid is empty 
but can have other form components placed inside. 

![Data Grid Example](/assets/img/userguide/layout-components/Data-Grid-1.png)

&nbsp;

The example below illustrates three **Basic Components** placed inside of a **Data Gird (Array)**. A new column is 
automatically added whenever another component is added the the data grid interface 

![Data Grid Example](/assets/img/userguide/layout-components/Data-Grid-2.png)

&nbsp;

Below is an in depth look at the specific data grid options that users can add or interface with as of the 5.0.0 release.  

![Data Grid Component Details](/assets/img/userguide/layout-components/Data-Grid-3.png)

#### Label

* The name or title for this data grid.

#### Tooltip

* Adds a tooltip to the side of this field

#### Error Label 

* The label for this field when an error occurs. 

#### Add Another Text

* Text that will display for the Add Another button instead of the default. 

#### Custom CSS Class

* A custom CSS class to add to this component. You may add multiple class names separated by a space.

#### Striped 

* Whether or not the table is striped for odd and even rows.

#### Bordered 

* Whether or not the table has a border set on it. (This can be changed by your own CSS as well)

#### Hover 

* Whether or not to add a hover class on rows when the mouse hovers over them.

#### Condensed 

* Whether or not to condense the size of each sell by removing padding.

#### Clear Value When Hidden 

* When a field is hidden, clear its value. 

#### Protected 

* If checked, the fields in the data grid are for input only. When being queried by the API it will not appear in the properties. You can still see the value on form.io by viewing the form submissions.

#### Persistent 

* If checked, the fields in the data grid will be stored in the database. If you want a field to not save, uncheck this box. This is useful for fields like password validation that shouldn’t save.

#### Encrypted (Enterprise Only) 

* Encrypts the Data submitted in this form. 

#### Hidden 

* Make the object hidden, it still exists within the form, but cannot be viewed. 

#### Hide Label 

* Hide the label of this component. 

#### Disabled 

* Disables the form input. 

#### Table View 

* If checked, this fields in the data grid will show up in the table view of the submissions list.

&nbsp;

An example of the **Data Grid** displayed in the ```Use``` tab.  

![Data Grid Example](/assets/img/userguide/layout-components/Data-Grid-4.png)

&nbsp;

Rows can be dynamically added, and removed as highlighted below.

![Data Grid Example](/assets/img/userguide/layout-components/Data-Grid-5.png)

&nbsp; 

Data can be submitted and edited via the traditional platform interfaces. 

![Data Grid Example](/assets/img/userguide/layout-components/Data-Grid-6.png)




