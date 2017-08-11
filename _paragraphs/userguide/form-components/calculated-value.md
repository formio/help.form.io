---
title: Calculated Value
book: userguide
chapter: form-components
slug: calculated-value
weight: 230
---
Caclulated values allow calculating values based on the values in other fields of the form. Calculated values uses plain 
javascript and can return any value to the field. There are two variables available to calculate off of, *data* and *row*.
*data* is the full data in the form. You can access values within it by using the field keys. For example *data.myfieldkey*.
If you field is within a datagrid, there is an additional variable available of *row* which contains the values for that row
of the datagrid. You can access the values the same as with data as *row.myfieldkey*. The values are also in 
*data.mydatagrid[0].myfieldkey* and *data.mydatagrid[1].myfieldkey* plus each additional row as the index.

Also you have access to special util variable - library of useful functions. More information about *util* library could be find [here](https://github.com/formio/formio.js/wiki/Form-Utilities).

Return the calculated value in the *value* variable and it will be set. Each time the form values change it will be recalculated.
You do NOT need to watch form fields as you do for other custom logic in your form. It will automatically update.

It is very common to disable the field using calculated values.
