---
title: Content
book: userguide
chapter: form-components
slug: content-component
weight: 30
---
Content may be added to a form to provide non-field information. For example, if you need instructions at the top of a form that are for display only, use a Content component. There are no settings for a Content component and the value is *not* submitted back to the server.



![](/assets/img/content.png)

A WYSIWYG editor has been provided to help with formatting the content. If you use the HTML view of the editor, note that all unsafe HTML is stripped before rendering to prevent cross-site scripting exploits. This includes tags like `<script>`, `<embed>`, and `<style>`, and attributes like `onmouseover` or `onload`.
