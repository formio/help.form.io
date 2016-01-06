---
title: Add Oauth Button to Form
book: integrations
chapter: oauth
slug: button
weight: 110
---
Go back to your Project page and click the *Edit* button for User Register.

    ![](/assets/img/oauth/project-page-2.png)

Drag a new Button component to your form.

Set the **Action** to **OAuth** and **uncheck** the **Disable on Form Invalid** checkbox. Use an appropriate label like *Sign-Up with GitHub*.

    ![](/assets/img/oauth/project-oauth-button.png)

<p class="note" markdown="1">In this example we set the Left Icon classes to `fa fa-github` to show the Font Awesome icon. If you would like to use these icons, you must add [Font Awesome](https://fortawesome.github.io/Font-Awesome/) to your application. You are free to use any icon library, however.</p>

Click *Save* and then click *Save Form*
Repeat this step for the *User Login Form* (But you may change the label to suit. For example: *Sign-In with Github*).
