---
title: Data
book: intro
weight: 303
chapter: explore
slug: data
---
Attached to every **Form** and **Resource** is a **Data** section which provides you Data Management capabilities on a per-form basis.

![](/assets/img/userguide/datagrid.png){: .img-fluid .img-thumbnail }

This allows any Administrator the ability to gain visibility into the data being collected as well as query the results using a per-column filtering capability.

<div class="card card-body bg-faded">
  <h3><i class="fa fa-info-circle"></i> Pro Tip</h3>
  <p>The <strong>Data</strong> grid is actually hooked up to the <a href="https://documenter.getpostman.com/view/684631/formio-api/2Jvuks#Submission-API">Form.io Submission API</a>, which means that any queries and advanced reporting capabilities that can be achieved with our data grid, can also be achieved with our Submission API. Inspect your browsers Network activity to view the actual API requests being made as you use the Data grids advanced features to get a sense of the power behind it.</p>
</div>

In addition to viewing the data within the Grid, you can also **Export** the submission data in either CSV format or raw JSON. Each of these exports are "streaming" exports which means they can also be piped into other processing tools for high performance data processing operations.
