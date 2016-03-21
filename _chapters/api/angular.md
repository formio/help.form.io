---
title: Angular.js Embedding
book: api
weight: 20
chapter: angular
---
**&lt;<span class="text-primary">form</span>.<span class="text-secondary">io</span>&gt;** has an Angular module that allows building out forms and APIs on **&lt;<span class="text-primary">form</span>.<span class="text-secondary">io</span>&gt;** and then embedding everything directly into your application with one line of code. When using this method, there is no other work needed to allow users to create, edit and delete resources within your application and when you make changes to the forms, they immediately update within your application.

The normal process to embed is to use bower to install the formio component with ```bower install ng-formio``` and then include all the dependencies in your html files with either gulp wiredep or manually. You can see examples of this inside our sample applications at [https://github.com/formio?utf8=%E2%9C%93&query=formio-app-](https://github.com/formio?utf8=%E2%9C%93&query=formio-app-).

To make the process simpler for those who only need to embed on a website, we provide a build file, ```formio-full.js```, with all dependencies already included. It can be found at [https://github.com/formio/ngFormio/tree/develop/dist](https://github.com/formio/ngFormio/tree/develop/dist). Include this script on the page and instantiate an angular application with a dependency on formio and you can then directly embed forms.

Here is a working jsfiddle of the simplest way to do an embed.
<iframe width="100%" height="300" src="//jsfiddle.net/randallknutson/nk6nuw6z/embedded/result,js,html/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>
