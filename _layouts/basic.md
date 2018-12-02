---
layout: base
---
<nav class="navbar navbar-expand navbar-dark bg-dark fixed-top docs-nav">
  {% if page.noribbon == nil %}
  <a href="https://github.com/formio/help.form.io"><img style="position: absolute; top: 0; right: 0; border: 0;" src="https://camo.githubusercontent.com/e7bbb0521b397edbd5fe43e7f760759336b5e05f/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f677265656e5f3030373230302e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_green_007200.png"></a>
  {% endif %}
  <div class="container">
    <a class="navbar-brand" href="/"><img height="25px;" alt="Form.io" src="{{ site.baseUrl }}/assets/formio-logo.png"></a>
  </div>
</nav>
{{ content }}
