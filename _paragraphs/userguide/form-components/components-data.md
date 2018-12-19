---
title: Component Data
book: userguide
chapter: form-components
slug: component-data
weight: 200
---

The Component 'Data' settings will allow you to configure the way your data is saved, rendered, or calculated on your field.

#### Default Value
Default value will be the value for this field, before user interaction. Having a default value will override the placeholder text.

#### Input Format
Input Format setting protects from cross-site scripting attacks. Input types default to ‘Plain’, but ‘HTML’ as well as ‘Raw’ can be selected.

#### Database Index
Set this field as an index within the database which can increase performance for submission queries. *Note - this setting is only available on the Enterprise plan and must have a Submission Collection set in order to activate.* 

#### Custom Default Value
Write JavaScript or JSON to customize the value the field will be defaulted to. 

#### Calculated Values
Caclulated values allow calculating values based on the values in other fields of the form. Calculated values uses plain javascript and can return any value to the field. There are two variables available to calculate off of, data and row. data is the full data in the form. You can access values within it by using the field keys. For example data.myfieldkey. If you field is within a datagrid, there is an additional variable available of row which contains the values for that row of the datagrid. You can access the values the same as with data as row.myfieldkey. The values are also in data.mydatagrid[0].myfieldkey and data.mydatagrid[1].myfieldkey plus each additional row as the index.

Also you have access to special util variable - library of useful functions. More information about util library could be find here.

Return the calculated value in the value variable and it will be set. Each time the form values change it will be recalculated. You do NOT need to watch form fields as you do for other custom logic in your form. It will automatically update.

It is very common to disable the field using calculated values.

#### Calculate on Server
Perform the custom calculations on the server as well as the frontend.
