---
layout: wrapper
---
<div class="main-wrapper">
    {% if page.summary %}
        <div class="docs-header" tabindex="-1">
          <div class="container">
            <h1>{{ page.title }}</h1>
            <p>{{ page.summary }}</p>
          </div>
        </div>
    {% endif %}
    {% if page.section %}
        <div class="section-header col-12 mb-2">
        {% assign sections = site.sections | where: "book" , page.book | sort: "weight" %}
          <ul class="nav nav-tabs">
          {% for section in sections %}
            <li class="nav-item" role="presentation"><a class="nav-link {% if section.section == page.section %}active{% endif %}" href="{{ site.baseUrl }}/{{ section.book }}/{{ section.section }}/{{ section.default-chapter }}">{{ section.section-title }}</a></li>
          {% endfor %}
          </ul>
        </div>
    {% endif %}
    {% if page.book %}
        <div class="sidebar-container col-2">
          {% include sidebar.html %}
        </div>
        <div class="main-view col-10 offset-2">
          {{ content }}
        </div>
    {% else %}
        <div class="col-12">
          {{ content }}
        </div>
    {% endif %}
</div>
