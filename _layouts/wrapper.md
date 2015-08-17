<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
  <title>{{ site.title }} | {{ page.title }}</title>

  <!-- Bootstrap -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
  <link rel="stylesheet" href="/assets/css/docs.css">

  <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
  <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
  <!--[if lt IE 9]>
  <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
  <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
  <![endif]-->

  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/anchor-js/1.2.1/anchor.js"></script>
  <!-- Favicons -->
  <link rel="apple-touch-icon" sizes="57x57" href="/assets/favicons/apple-touch-icon-57x57.png">
  <link rel="apple-touch-icon" sizes="60x60" href="/assets/favicons/apple-touch-icon-60x60.png">
  <link rel="apple-touch-icon" sizes="72x72" href="/assets/favicons/apple-touch-icon-72x72.png">
  <link rel="apple-touch-icon" sizes="76x76" href="/assets/favicons/apple-touch-icon-76x76.png">
  <link rel="apple-touch-icon" sizes="114x114" href="/assets/favicons/apple-touch-icon-114x114.png">
  <link rel="apple-touch-icon" sizes="120x120" href="/assets/favicons/apple-touch-icon-120x120.png">
  <link rel="apple-touch-icon" sizes="144x144" href="/assets/favicons/apple-touch-icon-144x144.png">
  <link rel="apple-touch-icon" sizes="152x152" href="/assets/favicons/apple-touch-icon-152x152.png">
  <link rel="apple-touch-icon" sizes="180x180" href="/assets/favicons/apple-touch-icon-180x180.png">
  <link rel="icon" type="image/png" href="/assets/favicons/favicon-32x32.png" sizes="32x32">
  <link rel="icon" type="image/png" href="/assets/favicons/android-chrome-192x192.png" sizes="192x192">
  <link rel="icon" type="image/png" href="/assets/favicons/favicon-96x96.png" sizes="96x96">
  <link rel="icon" type="image/png" href="/assets/favicons/favicon-16x16.png" sizes="16x16">
  <link rel="manifest" href="/assets/favicons/manifest.json">
  <meta name="msapplication-TileColor" content="#da532c">
  <meta name="msapplication-TileImage" content="/assets/favicons/mstile-144x144.png">
  <meta name="theme-color" content="#ffffff">
</head>

<body>
<header class="navbar docs-nav">
  <a href="https://github.com/formio/help.form.io"><img style="position: absolute; top: 0; right: 0; border: 0;" src="https://camo.githubusercontent.com/e7bbb0521b397edbd5fe43e7f760759336b5e05f/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f677265656e5f3030373230302e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_green_007200.png"></a>
  <div class="container">
    <div class="navbar-header">
      <a class="navbar-brand" href="/">
        <img height="25px;" alt="Form.io" src="/assets/formio-logo.png">
      </a>
    </div>
    <ul class="nav navbar-nav">
      {% assign books = (site.books | sort: "weight" reversed) %}
      {% for book in books %}
      <li><a href="/{{ book.book }}">{{ book.title }}</a></li>
      {% endfor %}
    </ul>
  </div>
</header>

{{ content }}

<footer>
  <p>Copyright 2015, Form.io LLC.</p>
  <p>
    <a href="#">Back to top</a>
  </p>
</footer>

<script src="/assets/js/docs.js"></script>
{% include analytics.html %}
{% include footer.html %}
</body>
</html>
