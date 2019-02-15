---
title: Single Sign On
book: integrations
chapter: saml
slug: sso
weight: 17
---
To perform **Single Sign On** within your application, we will use the [Formio.js](https://github.com/formio/formio.js) library to perform the SSO login with SAML for this project.

To get started, we will first need to make sure that we are including the Formio.js library within your application, but it can manually be added with the following script.

    <script src="https://unpkg.com/formiojs@latest/dist/formio.full.min.js"></script>
    
Once this library has been added, we can perform a SSO with the following code in our application.

    Formio.setProjectUrl('https://yourproject.form.io');
    Formio.ssoInit('saml');
    
You will typically want to place this code as the first thing within the application and it will perform the SSO automatically.
    
#### Login Button SSO
If you wish to have authentication triggered by a login Button, this can be created by adding a simple **Button** component to your form, configure it with **Custom** action, and then within the **Button Custom Logic** place the following code.

    Formio.ssoInit('saml');
    
![](/assets/img/integrations/saml/formio-button.png){: .img-fluid .img-thumbnail }

Next, within your application, you will want to place the following code so that it will complete the authentication process after the redirect.

    <script type="text/javascript">
    if (Formio.pageQuery().saml) {
        const sso = Formio.ssoInit('saml');
        if (sso) {
            sso.then((user) => {
              console.log(user);
            });
        }
    }
    </script>

What you get is the following.

You can try this out using the following login credentials.

 - user: **joe@example.com**
 - pass: **password123**
 
<br/>
<h4>Result</h4>
<div class="card card-body bg-light">
  <div id="formio"></div>
</div>
<script src="https://unpkg.com/formiojs@latest/dist/formio.full.js"></script>
<script type="text/javascript">
var formioElement = document.getElementById('formio');
Formio.setProjectUrl('https://humanresources.test-form.io');
var user = Formio.getUser();
var setUser = function() {
    var logout = document.createElement('button');
    logout.setAttribute('class', 'btn btn-primary mb-2');
    logout.appendChild(document.createTextNode('Logout'));
    logout.addEventListener('click', function() {
      Formio.setUser(null);
      location.reload();
    });
    formioElement.appendChild(logout);
    var pre = document.createElement('pre');
    pre.appendChild(document.createTextNode(JSON.stringify(user, null, 3)));
    formioElement.appendChild(pre);
};
if (user) {
    setUser();
}
else if (Formio.pageQuery().saml) {
    const sso = Formio.ssoInit('saml');
    if (sso) {
        sso.then(() => {
            user = Formio.getUser();
            setUser();
        });
    }
}
else {
    Formio.createForm(formioElement, 'https://humanresources.test-form.io/samlsso');
}
</script>
<br/>
