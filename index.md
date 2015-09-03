---
layout: default
title: Form.io Help
---
<p>Welcome to the Form.io help site. These five sections are designed to get you from new user to form.io expert. Let us know if you have any questions not answered on this site.</p>

{% assign books = (site.books | sort: "weight" reversed) %}
<div class="row">
{% for book in books %}
  <div class="col-md-6">
    <h2><a href="{{ book.url }}">{{ book.title }}</a></h2>
    <p>{{ book.summary }}</p>
  </div>
{% endfor %}
</div>
