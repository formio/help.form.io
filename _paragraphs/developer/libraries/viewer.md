---
title: Form Viewer
book: developer
chapter: libraries
weight: 800
slug: viewer
---
The [Form Viewer](https://github.com/formio/formio-viewer) is a special application which is used to display a single form, but also display a submission within that Form.

This project is the underlying source code @ https://formview.io which is the domain used by {{ site.formio }} to host individual forms. This is also the URL which provides embedding capabilities of the {{ site.formio }} forms.

What makes this project unique is that you can fork this repo @ [https://github.com/formio/formio-viewer](https://github.com/formio/formio-viewer) and then host your own special version of this application which is great for User Onboarding and other things. Or if you need to have a custom embed capability that is not provided by the base Form viewer.

### Displaying a form
To display a form, you simply need to call this application using the following URL.

```
/#/[PROJECT NAME]/[FORM NAME]
```

***Example***: [https://formview.io/#/examples/example](https://formview.io/#/examples/example) renders the form provided by [https://examples.form.io/example](https://examples.form.io/example).

### Display a submission within the form.
To display a submission within a form, you can use the following URL.

```
/#/[PROJECT NAME]/[FORM NAME]/submission/[SUBMISSION ID]
```

This will then show an Authentication form (/user/login) so that a user can log in to see the submission.

### Download Submission as PDF
In addition to viewing the submission, the submission can also be downloaded as a PDF.

![](/assets/img/userguide/formviewpdf.png){: .img-fluid .img-thumbnail }

### Changing Theme
The theme can also be changed dynamically using the ```theme=``` query parameter. Any theme from [Bootswatch](https://bootswatch.com/) can be provided here like so.

```
https://formview.io/#/examples/example?theme=paper
```

This changes the form to look like this.

![](/assets/img/userguide/formioformpaper.png){: .img-fluid .img-thumbnail }

### IFrame Embed
This form viewer is also used to embed forms using iframes. It contains a special library called [Seamless](https://github.com/travist/seamless) which will auto resize the iframe to the size of the form within the Parent page (the one doing the embedding). You can change the form to embed mode using the ```iframe=1``` parameter on the URL, which is what is used within the {{ site.formio }} embed code as follows.

```
<script type="text/javascript">(function a(d, w, u) {var h = d.getElementsByTagName("head")[0];var s = d.createElement("script");s.type = "text/javascript";s.src = "https://portal.form.io/lib/seamless/seamless.parent.min.js";s.onload = function b() {var f = d.getElementById("formio-form-57aa1d2a5b7a477b002717fe");if (!f || (typeof w.seamless === u)) {return setTimeout(b, 100);}w.seamless(f, {fallback:false}).receive(function(d, e) {});};h.appendChild(s);})(document, window);</script>
<iframe id="formio-form-57aa1d2a5b7a477b002717fe" style="width:100%;border:none;" height="600px" src="https://formview.io/#/examples/example?iframe=1&header=0"></iframe>
```
