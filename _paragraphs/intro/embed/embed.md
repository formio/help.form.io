---
title: Embed your Form
book: intro
weight: 10
chapter: embed
layout: chapter
slug: embed
---
Now that we have the form created, we see all of the options that we have available for embedding by clicking on the **Embed** tab.

![](/assets/img/intro/embedform.png){: .img-fluid .img-thumbnail }

There are many ways we can embed a form, and most of them are framework specific. However, for this demonstration, we can see the most basic forms of embedding by clicking on the **Framework** dropdown and selecting **Custom**

![](/assets/img/intro/customembed.png){: .img-fluid .img-thumbnail }

To demonstrate this embed, we will now go to the popular website called **JSFiddle** @ https://jsfiddle.net/

To start off, we will first bring in the **Resources** (different than Form.io resources) that are needed to make the forms function. Click on the **Resources** section on the left-hand side of the screen and then provide the following URL's.

 - https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css
 - https://unpkg.com/formiojs@latest/dist/formio.full.min.css
 - https://unpkg.com/formiojs@latest/dist/formio.full.min.js
 
![](/assets/img/intro/jsfiddle-resources.png){: .img-fluid .img-thumbnail }

Next, we will add the following HTML snippet within the **HTML** section.

```html
<div id="formio"></div>
```

as follows...

![](/assets/img/intro/jsfiddle-html.png){: .img-fluid .img-thumbnail }

We will now copy the **Embed URL** of our form that we just created within Form.io. 

![](/assets/img/intro/embedurl.png){: .img-fluid .img-thumbnail }

Finally, we will write the following code within the **JavaScript** section of our fiddle.

```js
Formio.createForm(document.getElementById('formio'), 'https://eventmanager.form.io/example');
```

You will change the URL of the form above with the **Embed URL** you copied earlier, then press **Run**

![](/assets/img/intro/embeddedform.png){: .img-fluid .img-thumbnail }

Congratulations! You just embedded your first Form.io form! We are now ready to move onto building a whole application.
