---
layout: wrapper
---
{% if page.title %}
<div class="docs-header {% if page.section %}is-section{% endif %}" tabindex="-1">
  <div class="container">
    <h1>{{ page.title }}</h1>
    <p>{{ page.summary }}</p>
    {% if page.section %}
      {% assign sections = (site.sections | where: "book" , page.book | sort: "weight") %}
      <ul class="nav nav-tabs">
      {% for section in sections %}
        <li role="presentation" {% if section.section == page.section %}class="active"{% endif %}><a href="/{{ section.book }}/{{ section.section }}/">{{ section.section-title }}</a></li>
      {% endfor %}
      </ul>
    {% endif %}
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
