---
title: reCAPTCHA
book: userguide
chapter: form-components
slug: recaptcha
weight: 210
---
reCAPTCHA component implements <a href="https://developers.google.com/recaptcha/docs/v3" target="_blank">reCAPTCHA v3</a>.

![](/assets/img/userguide/form-components/recaptcha-display.png){: .img-fluid .img-thumbnail }

#### Type of event

Event to which this reCAPTCHA component would react

#### Button Key

API Key of the button for reCAPTCHA component to react to (only for Button Click type of event)

#### Project Settings

If you want to use reCAPTCHA component on your forms, you need to set reCAPTCHA's Site Key and Secret Key in your Project Settings on portal:
1. Go to your project on portal -> Settings -> Integrations -> reCAPTCHA
    ![](/assets/img/userguide/form-components/recaptcha-project-settings.png){: .img-fluid .img-thumbnail }
2. Specify Site Key and Secret Key with values from your <a href='https://www.google.com/recaptcha/admin' target='_blank'>reCAPTCHA Admin panel</a>
3. Save Settings
4. As a result your project will have following in its JSON:
    ```json
    "settings": {
      "recaptcha": {
        "secretKey": "your_secret_key",
        "siteKey": "your_site_key"
      }
    }
    ````
    
#### Render from URL

The easiest way to use reCAPTCHA component is to add it to your form using our form builder and render using its URL. In this case you don't need to do any additional work, just do following:
 
```js
Formio.createForm(document.getElementById('formio'), 'your_form_url').then(function(form) {
  // Provide a default submission.
  form.submission = {
    data: {
    }
  };
});
````

#### Render from JSON

If you want to render form from JSON, you'd also need to do following:

1. Your form should have following settings added to its JSON:
    ```json
    {
        "settings": {
            "recaptcha": {
                "isEnabled": "true",
                "siteKey": "your_site_key"
            }
        }
    }
    ````
2. Before rendering form you need to set Project URL to the URL of project where you have your reCAPTCHA Secret Key set in settings:
    ```js
    Formio.setProjectUrl('<your_project_URL'); //for ex. https://examples.form.io/
    ````

After above is done you can render the form from JSON:

```js
Formio.createForm(document.getElementById('formio'), 'your_form_json').then(function(form) {
  // Provide a default submission.
  form.submission = {
    data: {
    }
  };
});
````

#### How it works

When you add reCAPTCHA component to the form, you can specify if it's going to react on Form Load or on Button Click (for Button Click you'll also need to specify to which button it should react).

##### Form Load reCAPTCHA

When your form with Form Load reCAPTCHA emits 'formLoad' event, we send verification request to Google for action called <i>'&lt;your_form_name&gt;Load'</i>. Google's responce becomes the submission value of your Form Load reCAPTCHA component:
```json
{
  "data": {
    "reCaptcha": { 
      "success": true,
      "challenge_ts": "2019-01-11T10:29:39Z",
      "hostname": "your_domain",
      "score": 0.9,
      "action": "<your_form_name>Load" 
    }
  }
}
````

##### Button Click reCAPTCHA
<p>When any button is clicked on your form, our renderer searches for Button Click reCAPTCHA component tied to a button with same API Key as clicked one. If renderer finds this reCAPTCHA component, we send verification request to Google for action called <i>'&lt;your_button_key&gt;Click'</i>. Google's responce becomes the submission value of your Button Click reCAPTCHA component:</p>


```json
{
  "data": {
    "reCaptcha": { 
      "success": true,
      "challenge_ts": "2019-01-11T10:29:39Z",
      "hostname": "your_domain",
      "score": 0.9,
      "action": "<your_button_key>Click" 
    }
  }
}
````

#### Example

Please see this <a href="http://formio.github.io/formio.js/app/examples/recaptcha.html" target="_blank">example of rendering form with reCAPTCHA component</a>.
