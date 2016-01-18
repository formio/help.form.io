---
layout: default
title: The <img src="/assets/img/formio-logo-white.png" style="margin-bottom:10px" /> help guide.
summary: These four sections are designed to get you from new user, to form.io expert. Let us know if you have any questions not answered on this site.
---
{% assign books = (site.books | sort: "weight" reversed) %}
<div class="row">
{% for book in books %}
  <div class="col-md-6">
    <h2><a href="{{ book.url }}">{{ book.title }}</a></h2>
    <p>{{ book.summary }}</p>
  </div>
{% endfor %}
</div>
