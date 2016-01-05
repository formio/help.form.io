---
title: Formio Events
book: api
chapter: angular
slug: formio-events
weight: 50
---
The formio module emits events at various times. These events are designed to allow developers to respond to events that occur within the formio generated forms. For example, after a user creates a new submission, you may want to change the view to display that submission or send them to a thank you page. You can do this by responding to the `formSubmission` event:

```html
$scope.$on('formSubmission', function(err, submission) { /* ... */ })
```


The following are all the events emitted by the above directives:

<dl class="dl-horizontal">
    <dt><code>formSubmit</code></dt>
    <dd>
        Called after a form is submitted, but before it has been sent to the server. This submission can be cancelled by calling `event.preventDefault()`.
        <h5>Parameters:</h5>
        <code>submission</code>: The submission that was submitted.
    </dd>

    <dt><code>formSubmission</code></dt>
    <dd>
        Called after a form is successfully submitted to the server. This can be either a create or an edit.
        <h5>Parameters:</h5>
        <code>submission</code>: The submission that was submitted.
    </dd>

    <dt><code>formError</code></dt>
    <dd>
        Called whenever client side validation fails.
        <h5>Parameters:</h5>
        <code>error</code>: The error that occurred.
    </dd>

    <dt><code>formLoad</code></dt>
    <dd>
        Called whenever a form is loaded from the form.io server. This is useful to customize forms before they are displayed.
        <h5>Parameters:</h5>
        <code>form</code>: The form that was loaded.
    </dd>

    <dt><code>submissionView</code></dt>
    <dd>
        Called whenever the view button is clicked in a `formioSubmissions` directive.
        <h5>Parameters:</h5>
        <code>submission</code>: The submission that is being viewed.
    </dd>

    <dt><code>submissionEdit</code></dt>
    <dd>
        Called whenever the edit button is clicked in a `formioSubmissions` directive.
        <h5>Parameters:</h5>
        <code>submission</code>: The submission that is being edited.
    </dd>

    <dt><code>submissionDelete</code></dt>
    <dd>
        Called whenever the delete button is clicked in a `formioSubmissions` directive.
        <h5>Parameters:</h5>
        <code>submission</code>: The submission that is being deleted.
    </dd>

    <dt><code>submissionLoad</code></dt>
    <dd>
        Called whenever a submission is loaded from the server.
        <h5>Parameters:</h5>
        <code>submission</code>: The submission that was loaded.
    </dd>

    <dt><code>submissionsLoad</code></dt>
    <dd>
        Called whenever multiple submissions are loaded from the server.
        <h5>Parameters:</h5>
        <code>submissions</code>: An array of submissions that were loaded.
    </dd>

    <dt><code>cancel</code></dt>
    <dd>
        Called whenever a delete dialog is cancelled.
    </dd>

    <dt><code>delete</code></dt>
    <dd>
        Called whenever a delete dialog is confirmed and a submission is deleted.
        <h5>Parameters:</h5>
        <code>data</code>: The data that was returned from the delete request.
    </dd>
</dl>
