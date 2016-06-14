---
title: Conditional Fields
book: developer
section: info
chapter: angular
slug: conditional-fields
weight: 70
---
A frequent request is to have fields show and hide based on values in other fields. Building a fully functional UI for this would make using it daunting so instead we have enabled this through programming.

To have conditional fields, create a controller that wraps the form and send the submission variable into the form. Then watch the submission variable using ```$scope.$watch``` and then affect the displayed forms as needed. This will allow maximum flexibility into showing and hiding forms.

Here is a working example of showing and hiding fields in a jsfiddle. Feel free to try it out and modify it.

<iframe width="100%" height="300" src="//jsfiddle.net/randallknutson/jwzhpsh8/embedded/result,js,html,css" allowfullscreen="allowfullscreen" frameborder="0"></iframe>