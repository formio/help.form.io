---
layout: wrapper
---
<div class="docs-header" tabindex="-1">
{% if page.summary %}
  <div class="container">
    <h1>{{ page.title }}</h1>
    <p>{{ page.summary }}</p>
  </div>
{% endif %}
</div>
{% if page.section %}
<div class="section-header">
  <div class="container">
    {% assign sections = site.sections | where: "book" , page.book | sort: "weight" %}
    <ul class="nav nav-tabs">
    {% for section in sections %}
      <li role="presentation" {% if section.section == page.section %}class="active"{% endif %}><a href="{{ site.baseUrl }}/{{ section.book }}/{{ section.section }}/{{ section.default-chapter }}">{{ section.section-title }}</a></li>
    {% endfor %}
    </ul>
  </div>
</div>
{% endif %}
<div class="container" id="content" >
  <div class="row">
    {% if page.book %}
    <div class="col-md-3">
      {% include sidebar.html %}
    </div>
    <div class="col-md-9">
      {{ content }}
    </div>
    {% else %}
    <div class="col-md-12">
      {{ content }}
    </div>
    {% endif %}
  </div>
</div>
