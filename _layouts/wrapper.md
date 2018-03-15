---
layout: base
---
<header class="navbar docs-nav">
  <a class="hidden-xs" href="https://github.com/formio/help.form.io"><img style="position: absolute; top: 0; right: 0; border: 0;" src="https://camo.githubusercontent.com/e7bbb0521b397edbd5fe43e7f760759336b5e05f/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f677265656e5f3030373230302e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_green_007200.png"></a>
  <div class="container">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="/">
        <img height="25px;" alt="Form.io" src="{{ site.baseUrl }}/assets/formio-logo.png">
      </a>
    </div>
    <ul id="navbar" class="nav navbar-nav navbar-collapse collapse">
      {% assign books = site.books | sort: "weight" %}
      {% for book in books %}
      <li {% if book.book == page.book %}class="active"{% endif %}><a href="{{ site.baseUrl }}/{{ book.book }}/{% if book.default-section %}{{ book.default-section }}/{% endif %}{% if book.default-chapter %}{{ book.default-chapter }}/{% endif %}">{% if book.icon %}<i class="{{ book.icon }}"></i> {% endif %}{{ book.title }}</a></li>
      {% endfor %}
      <li class="pull-right"><a href="https://portal.form.io">Login | Register</a></li>
    </ul>
  </div>
</header>

{{ content }}
