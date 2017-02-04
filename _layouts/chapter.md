---
layout: default
---
<div class="docs-section">
  <h2 id="{{ page.chapter }}">{{ page.subtitle }}</a></h2>
  {{ page.content | markdownify }}
  {% assign paragraphs = (site.paragraphs | where: "chapter", page.chapter | sort: "weight") %}
  {% for paragraph in paragraphs %}
  <div class="docs-section">
    <h3 id="{{ paragraph.slug }}">{{ paragraph.title }}</h3>
    {{ paragraph.content | markdownify }}
  </div>
  {% endfor %}
</div>
