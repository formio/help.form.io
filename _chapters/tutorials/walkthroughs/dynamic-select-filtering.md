---
title: Tutorials
subtitle: Dynamic Select Filtering
book: tutorials
section: walkthroughs
weight: 35
chapter: dynamic-select-filtering
layout: chapter
---
Below is an example and subsequent guide on how to use and create a dynamic select filtering system where two external
resources are called from within a form via the ```Select Component```. If you are just looking to replicate the demo below,
you can download a copy of the [project schema here](/assets/resource/year-make-model.json).

<div id="resource1">
  <script async src="https://jsfiddle.net/Formio/djsfbLcL/embed/result,js,html,css/"></script>
</div>

For the purposes of this demonstration, we will be creating a Vehicle Registration system. It will take into account a vehicle's
year, model, and make where the model field is dependent of the make of the vehicle. Start by creating or
entering an existing project and creating two blank resources called ```Make Resource``` and ```Model Resource```.

![Resources Portal View](/assets/resource/dynamic-select-01.png){: .img-fluid .img-thumbnail }

Enter into the newly created ```Make Resource``` and add a ```Text Field Component``` into the construction area.

![Resources Portal View](/assets/resource/dynamic-select-02.png){: .img-fluid .img-thumbnail }

Under the ```Data``` tab in the component modal, add required validation and take note of the field's ```API Property Name```.

![Resources Portal View](/assets/resource/dynamic-select-03.png){: .img-fluid .img-thumbnail }

With the resource constructed, create a few entries.

![Resources Portal View](/assets/resource/dynamic-select-04.png){: .img-fluid .img-thumbnail }

Transition over to the ```Model Resource``` and add a ```Select Component``` and a ```Text Field Component```.

![Resources Portal View](/assets/resource/dynamic-select-05.png){: .img-fluid .img-thumbnail }

In the ```Select Component``` under the ```Data``` tab, set the ```Data Source Type``` to ```Resource```,
the ```Resource``` dropdown to ```Make Resource``` and ```Value``` to ```Make Resource```. This name was derived
from the text-field label placed on the make resource's text field component. Lastly set the component validation to required.

![Resources Portal View](/assets/resource/dynamic-select-06.png){: .img-fluid .img-thumbnail }

For the ```Text Field Component``` set the field validation to required and take note of the ```API Property Name```.

![Resources Portal View](/assets/resource/dynamic-select-07.png){: .img-fluid .img-thumbnail }

With the second resource constructed, create a few resource entries.

![Resources Portal View](/assets/resource/dynamic-select-08.png){: .img-fluid .img-thumbnail }

Transition over and create a new form or feel free to do this within another resource as it is not a requirement
to use a form. Add two ```Select Components``` and a ```Text Field Component```.

![Resources Portal View](/assets/resource/dynamic-select-09.png){: .img-fluid .img-thumbnail }

The first ```Select Component``` will follow the exact same structure as the ```Make Select Component``` used in the
```Model Resource``` with the sole exception of the components ```API Property Name``` which is set to ```make```.

![Resources Portal View](/assets/resource/dynamic-select-10.png){: .img-fluid .img-thumbnail }

Similarly, the second ```Select Component``` will populate it's value from the Modal Resource.

![Resources Portal View](/assets/resource/dynamic-select-11.png){: .img-fluid .img-thumbnail }

If we take a look at the form in this state, both select dropdowns populate with their respective values. However,
the ```Model``` field isn't filtering against the ```Make``` field at this point. Ensure 'Refresh On' field carries the ```Make``` field so the ```Model``` field will reset when a new ```Make``` field is selected.

![Resources Portal View](/assets/resource/dynamic-select-12.png){: .img-fluid .img-thumbnail }

Head back to the ```Model Select Component``` and let us address the ```Filter Query``` which will handle the logic
to remove Chevy models when viewing Audi makes. The format of the query equates the value of the Model's Make Reference
against the value of the current forms ```Make Select Component```.

![Resources Portal View](/assets/resource/dynamic-select-13.png){: .img-fluid .img-thumbnail }

With these changes in place the form works as expected.

![Resources Portal View](/assets/resource/dynamic-select-14.png){: .img-fluid .img-thumbnail }
