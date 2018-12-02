---
layout: default
---
<div class="docs-section">
  <h2 id="{{ page.chapter }}">{{ page.subtitle }}</a></h2>
  {% if page.note %}
  <div class="alert alert-info" role="alert"><p><strong>Important Note:</strong> {{ page.note }}</p></div>
  {% endif %}
  {{ page.content | markdownify }}
  {% assign paragraphs = site.paragraphs | where: "chapter", page.chapter | sort: "weight" %}
  {% for paragraph in paragraphs %}
  <div class="docs-section">
    <a id="{{ paragraph.slug }}" class="anchor"></a>
    <h3>{{ paragraph.title }}</h3>
    {{ paragraph.content | markdownify }}
  </div>
  {% endfor %}
</div>
