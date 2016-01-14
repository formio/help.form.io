<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <script type="text/javascript">
    if (location.host === 'formio.github.io') {
        document.write("<base href='" + location.protocol + "//" + location.host + "/help.form.io' />");
    }
  </script>

  <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
  <title>{{ site.title }} | {{ page.title | strip_html }}</title>

  <!-- bower:css -->
  <link rel="stylesheet" href="https://help.form.io/assets/lib/bootstrap/dist/css/bootstrap.min.css" />
  <link rel="stylesheet" href="https://help.form.io/assets/lib/angular-ui-select/dist/select.css" />
  <link rel="stylesheet" href="https://help.form.io/assets/lib/formio/css/formio.css" />
  <!-- endbower -->

  <link rel="stylesheet" href="https://help.form.io/assets/css/docs.css">

  <!-- Favicons -->
  <link rel="apple-touch-icon" sizes="57x57" href="https://help.form.io/assets/favicons/apple-touch-icon-57x57.png">
  <link rel="apple-touch-icon" sizes="60x60" href="https://help.form.io/assets/favicons/apple-touch-icon-60x60.png">
  <link rel="apple-touch-icon" sizes="72x72" href="https://help.form.io/assets/favicons/apple-touch-icon-72x72.png">
  <link rel="apple-touch-icon" sizes="76x76" href="https://help.form.io/assets/favicons/apple-touch-icon-76x76.png">
  <link rel="apple-touch-icon" sizes="114x114" href="https://help.form.io/assets/favicons/apple-touch-icon-114x114.png">
  <link rel="apple-touch-icon" sizes="120x120" href="https://help.form.io/assets/favicons/apple-touch-icon-120x120.png">
  <link rel="apple-touch-icon" sizes="144x144" href="https://help.form.io/assets/favicons/apple-touch-icon-144x144.png">
  <link rel="apple-touch-icon" sizes="152x152" href="https://help.form.io/assets/favicons/apple-touch-icon-152x152.png">
  <link rel="apple-touch-icon" sizes="180x180" href="https://help.form.io/assets/favicons/apple-touch-icon-180x180.png">
  <link rel="icon" type="image/png" href="https://help.form.io/assets/favicons/favicon-32x32.png" sizes="32x32">
  <link rel="icon" type="image/png" href="https://help.form.io/assets/favicons/android-chrome-192x192.png" sizes="192x192">
  <link rel="icon" type="image/png" href="https://help.form.io/assets/favicons/favicon-96x96.png" sizes="96x96">
  <link rel="icon" type="image/png" href="https://help.form.io/assets/favicons/favicon-16x16.png" sizes="16x16">
  <link rel="manifest" href="https://help.form.io/assets/favicons/manifest.json">
  <meta name="msapplication-TileColor" content="#da532c">
  <meta name="msapplication-TileImage" content="https://help.form.io/assets/favicons/mstile-144x144.png">
  <meta name="theme-color" content="#ffffff">

  <!-- bower:js -->
  <script src="https://help.form.io/assets/lib/jquery/dist/jquery.js"></script>
  <script src="https://help.form.io/assets/lib/anchor-js/anchor.js"></script>
  <script src="https://help.form.io/assets/lib/angular/angular.js"></script>
  <script src="https://help.form.io/assets/lib/bootstrap/dist/js/bootstrap.js"></script>
  <script src="https://help.form.io/assets/lib/ng-file-upload/dist/ng-file-upload.js"></script>
  <script src="https://help.form.io/assets/lib/angular-sanitize/angular-sanitize.js"></script>
  <script src="https://help.form.io/assets/lib/angular-bootstrap/ui-bootstrap-tpls.js"></script>
  <script src="https://help.form.io/assets/lib/moment/moment.js"></script>
  <script src="https://help.form.io/assets/lib/angular-moment/angular-moment.js"></script>
  <script src="https://help.form.io/assets/lib/angular-ui-select/dist/select.js"></script>
  <script src="https://help.form.io/assets/lib/bootstrap-ui-datetime-picker/dist/datetime-picker.min.js"></script>
  <script src="https://help.form.io/assets/lib/signature_pad/signature_pad.js"></script>
  <script src="https://help.form.io/assets/lib/angular-ui-mask/dist/mask.js"></script>
  <script src="https://help.form.io/assets/lib/formio/dist/formio.js"></script>
  <script src="https://help.form.io/assets/lib/urijs/src/URI.js"></script>
  <!-- endbower -->
</head>

<body{% if page.app %} ng-app='{{ page.app }}'{% endif %}{% if page.controller %} ng-controller='{{ page.controller }}'{% endif %}>
{{ content }}

<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
<!--[if lt IE 9]>
<script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
<![endif]-->

<script src="https://help.form.io/assets/js/docs.js"></script>
{% include analytics.html %}
{% if page.nofooter == nil %}
    {% include footer.html %}
{% endif %}    
</body>
</html>
