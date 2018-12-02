---
title: Checkbox and Radio Configurations
book: userguide
chapter: pdf
slug: checkbox-radio
weight: 19
---
A major component for any PDF form is the ability to create checkbox or radio interfaces for the selection of items within the PDF. Our PDF system incorporates the single **Checkbox** component to handle both the Radio (mutually exclusive) and Checkbox interfaces, with addition to the ability to style each checkbox and radio to match the uploaded PDF.

### Checkbox
The use of a checkbox is to have a singular select capability. This is typically used for a control such as an "I agree" statement where they are providing a single yes/no answer. To add a checkbox to your form, drag and drop the Checkbox component and then resize it according to the checkbox outline as follows.

![](/assets/img/userguide/pdf/checkbox1.png){: .img-fluid .img-thumbnail } 
 
By default, the label will be hidden for all checkbox inputs, so simply type the name of the Label for this checkbox and ensure the API key is what you would like to have saved for the data in this checkbox.

![](/assets/img/userguide/pdf/checkbox2.png){: .img-fluid .img-thumbnail } 

Finally, you can move and resize the checkbox to the appropriate size of the checkbox on the PDF.

![](/assets/img/userguide/pdf/checkbox3.png){: .img-fluid .img-thumbnail }

### Radio
Radio buttons are used to allow for a mutually exclusive selection between different elements on the form. A good example of this is if you wish to have a Marital status selection on your PDF form where they can toggle between "Married" or "Single" and it would deselect the one or the other as you use the control. To create a new Radio interface, you will need to drag each "radio" checkbox onto the PDF form independently. This can be done with the **Checkbox** component.

![](/assets/img/userguide/pdf/checkbox4.png){: .img-fluid .img-thumbnail }

Once you see the edit modal, you will then configure the Radio component by chosing the **Input Type** as **Radio**. You will then see two text boxes show up called **Radio Key** and **Radio Value**. For these, you will put the "key" of the radio that will store the data (such as "maritalStatus") and the "value" is the value of that key when this checkbox is selected (like "married" or "single")

![](/assets/img/userguide/pdf/checkbox5.png){: .img-fluid .img-thumbnail }

This will now show up as follows in your form.

![](/assets/img/userguide/pdf/checkbox6.png){: .img-fluid .img-thumbnail }

### Radio and Checkbox Styles
By default, the styles for the checkbox and radio buttons are a blue highlighted square. This can be configured by editing the **Custom CSS Class** on each of the checkbox components. The PDF viewer uses a Checkbox style system known as [Pretty Checkbox](https://lokesh-coder.github.io/pretty-checkbox/) to perform the styles. Each of the styles can be established by using special classes within the **Custom CSS Class** setting. The following styles can be applied to every Radio and Checkbox component.

As an example, you can provide the following classes to turn your Radio's into a solid green filled circles with the following classes.

![](/assets/img/userguide/pdf/checkbox10.png){: .img-fluid .img-thumbnail }

#### Shape
The following classes will alter the shape of the checkbox and radio input.

{: .table .table-bordered .table-striped}
| Class | Description |
|---------|-------------|
| p-round | Turns the square checkbox into a circle (good for Radio interfaces). |
| p-curve | Turns the square checkbox into a rounded square |

#### Fill
The following classes will alter the fill thickness of the input.

{: .table .table-bordered .table-striped}
| Class | Description |
|---------|-------------|
| p-fill | Fills up the whole checkbox with the desired color. |
| p-thick | Turns the outline into a thick outline with small middle |

Here is an example of these classes applied.

![](/assets/img/userguide/pdf/checkbox7.png){: .img-fluid .img-thumbnail }

Other classes can be provided as follows.

#### Color
The color of the fill can be controlled with the following classes.

{: .table .table-bordered .table-striped}
| Class | Description |
|---------|-------------|
| p-primary | Blue color. |
| p-success | Green color. |
| p-info | Light Blue Color |
| p-warning | Orange Color |
| p-danger | Red Color |

Here is an example of colors applied.

![](/assets/img/userguide/pdf/checkbox8.png){: .img-fluid .img-thumbnail }

#### Type
The type of input can also be changed to a "switch" input using the following.

{: .table .table-bordered .table-striped}
| Class | Description |
|---------|-------------|
| p-switch | Turns the checkbox into a switch input. |

Here is an example of how this looks.

![](/assets/img/userguide/pdf/checkbox9.png){: .img-fluid .img-thumbnail }
