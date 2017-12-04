---
title: Edit Grid
book: userguide
chapter: layout-components
slug: edit-grid
weight: 50
---
**Edit Grids** allow users to replicate an table like structure when it comes to the capture and display of form data.
Users can add multiple components inside of the **Edit Grid**. Additionally, any number of grids can be added
within a form which is especially useful when needing the ability to add or duplicate multiple fields sets.

From the **Data** component menu, add the **Edit Gird (Array)** to any active form. By default the grid is empty 
but can have other form components placed inside. 

![Edit Grid Example](/assets/img/userguide/layout-components/Edit-Grid-1.png)

&nbsp;

The example below illustrates three **Basic Components** placed inside of a **Edit Gird (Array)**. Layout components
can be used to replicate the split view below, and additional rows are added automatically when additional form elements
are dragged into the interface. 


![Edit Grid Example](/assets/img/userguide/layout-components/Edit-Grid-2.png)

&nbsp;

Below is an in depth look at the specific data grid options that users can add or interface with as of the 5.0.0 release
![Edit Grid Component](/assets/img/userguide/layout-components/Edit-Grid-3.png)

#### Label

* The name or title for this data grid.

#### Tooltip

* Adds a tooltip to the side of this field

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

An example of the **Edit Grid** displayed in the ```Use``` tab.  

![Edit Grid Example](/assets/img/userguide/layout-components/Edit-Grid-4.png)

&nbsp;

As Entries are added the table displays the data below each respective header independent of the form layout.

![Edit Grid Example](/assets/img/userguide/layout-components/Edit-Grid-5.png)

&nbsp;

The form layout is displayed when ```Add Another``` is pressed, and the form appears below the grid for user entry.

![Edit Grid Example](/assets/img/userguide/layout-components/Edit-Grid-6.png)

&nbsp;

Once submitted, form data can be viewed and edit via traditional platform methods. 

![Edit Grid Example](/assets/img/userguide/layout-components/Edit-Grid-7.png)
