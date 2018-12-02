---
layout: base
---
<nav class="navbar navbar-expand navbar-light bg-light docs-nav fixed-top">
  <a class="hidden-xs" href="https://github.com/formio/help.form.io"><img style="position: absolute; top: 0; right: 0; border: 0;" src="https://camo.githubusercontent.com/e7bbb0521b397edbd5fe43e7f760759336b5e05f/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f677265656e5f3030373230302e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_green_007200.png"></a>
  <a class="navbar-brand" href="/"><img height="25px;" alt="Form.io" src="{{ site.baseUrl }}/assets/formio-logo.png"></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
  <div class="collapse navbar-collapse">
    <ul class="navbar-nav mr-auto">
      {% assign books = site.books | sort: "weight" %}
      {% for book in books %}
        <li class="nav-item {% if book.book == page.book %}active{% endif %}"><a class="nav-link" href="{{ site.baseUrl }}/{{ book.book }}/{% if book.default-section %}{{ book.default-section }}/{% endif %}{% if book.default-chapter %}{{ book.default-chapter }}/{% endif %}">{% if book.icon %}<i class="{{ book.icon }}"></i> {% endif %}{{ book.title }}</a></li>
      {% endfor %}
      <li class="nav-item"><a class="nav-link" href="https://portal.form.io">Login | Register</a></li>
    </ul>
  </div>
</nav>
{{ content }}
