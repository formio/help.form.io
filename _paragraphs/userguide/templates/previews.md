---
title: Template Previews
book: userguide
chapter: project-templates
slug: template-previews
weight: 10
---

Templates can also specify a preview application. If a project is created from a template that provides a preview app, then it can use that app  to preview what the project looks like, live. There are a couple of steps to set up a preview app.

#### Setup Your Preview App

A preview application should be a publicly hosted instance of the application that you want your projects to be used with. This can be any kind of web application that integrates into **&lt;<span class="text-primary">form</span>.<span class="text-secondary">io</span>&gt;**.

In order to serve as a preview app, your application should be able to point to any provided **&lt;<span class="text-primary">form</span>.<span class="text-secondary">io</span>&gt;** project. When your preview app is used to preview a specific project, your project will receive two query parameters:

<dl class="dl-horizontal">
    <dt><code>appUrl</code></dt>
    <dd>The url to your project on <strong>&lt;<span class="text-primary">form</span>.<span class="text-secondary">io</span>&gt;</strong>.</dd>
    <dt><code>apiUrl</code></dt>
    <dd>The url to the <strong>&lt;<span class="text-primary">form</span>.<span class="text-secondary">io</span>&gt;</strong> API server. For most cases, you may ignore this parameter.</dd>
</dl>

For example, if your preview app is hosted at `http://preview.example.com`, and you preview your project at `https://myproject.form.io`, then the user will open your app at `http://preview.example.com?appUrl=https://myproject.form.io&apiUrl=https://api.form.io` (properly escaped, of course). Your preview app must be able to read these parameters and apply them in your app to connect to the given project.

#### Setup your Template

Next, you must add the url to your project template. Add an object to the `preview` key in the root of your template. That object should contain a `url` key set to the url to your preview app. You may also have a `repo` key that points to the source code of your app if you want to display a link to it when previewing. An example is shown below:

```
{
  "title": "Example",
  "name": "example",
  "description": "An example template.",
  "preview": {
    "url": "http://preview.example.com",
    "repo": "http://github.com/example/preview"
  },
  // Your roles, forms, resources, and actions go here...
}
```

Now anytime you create a new project with this template, a new button will appear on the **&lt;<span class="text-primary">form</span>.<span class="text-secondary">io</span>&gt;** project page to preview the app.
