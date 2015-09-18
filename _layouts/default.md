---
layout: wrapper
---
{% if page.title %}
<div class="docs-header"tabindex="-1">
  <div class="container">
    <h1>{{ page.title }}</h1>
    <p>{{ page.summary }}</p>
  </div>
</div>
{% endif %}
<div class="container" id="content" >
  <div class="row">
    {% if page.book %}
    <div class="col-md-9">
      {{ content }}
    </div>
    <div class="col-md-3">
      {% include sidebar.html %}
    </div>
    {% else %}
    <div class="col-md-12">
      {{ content }}
    </div>
    {% endif %}
  </div>
</div>
