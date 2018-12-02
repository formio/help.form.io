---
title: Forms and Resources
book: intro
weight: 100
chapter: howworks
slug: formsandresources
---
At the heart of the Form.io platform, is the ability for web application developers to create the **Resources** and **Forms** for their application using our simple drag-and-drop form builder.

![](/assets/img/userguide/form-builder.png){: .img-fluid .img-thumbnail }

While **Resources** and **Forms** share the same structure and form building process, they are distinctive from one another in how they are utilized. It is important to understand what they are, how they are used, and also what makes them different so that you can construct your project with a structure that can support your Serverless application requirements. **Resources** and **Forms** are defined as follows.

<div class="card card-body bg-faded">
<div class="row">
  <div class="col col-sm-6">
    <h4><strong>Resource Definition</strong></h4>
    <hr>
    <p>Resources are the "structured" data objects that support your application. Anything that has a static data structure can be defined as a Resource. For example, Users within your application have a data "structure" as follows, and therefore are considered Resources within Form.io.</p>
    <table class="table table-striped">
     <thead>
       <tr><th>Field</th><th>Type</th></tr>
     </thead>
     <tbody>
       <tr><td>First Name</td><td>textfield</td></tr>
       <tr><td>Last Name</td><td>textfield</td></tr>
       <tr><td>Email</td><td>email</td></tr>
       <tr><td>Birthday</td><td>date</td></tr>
     </tbody>
    </table>
  </div>
  <div class="col col-sm-6">
    <h4><strong>Form Definition</strong></h4>
    <hr>
    <p>Forms represent the "unstructured" data that is used to supplement a Resource. For example, a <strong>Customer Survey</strong> may have free-form questions (fields) like "Did you enjoy your visit?", and those free-form fields should be associated to the Customer who submitted it. In this example, a <strong>Customer Survey</strong> would be a <strong>Form</strong> that references the <strong>Customer</strong> Resource.</p>
  </div>
</div>
</div>

To help explain these concepts, let us provide a real world example.

### Example Application

Let's suppose you are a developer responsible for building your companies next Human Resources Portal where the HR director should be able to onboard new Employees, manage the Employees HR related forms and submissions, as well as manage Events within the Company.

### The Resources

In this example, we can easily identify the "structured" objects that would be used to construct a working application. These "structured" objects would be *Admin*, *Employee*, and *Event*. Each of these objects may relate to one another, but should be stored as individual database collections (or tables). These are your **Resources**.

<div class="card">
  <div class="card-header"><h3 class="card-title">Resources</h3></div>
  <ul class="list-group list-group-flush">
      <li class="list-group-item"><strong>Admin</strong> - The HR administrator</li>
      <li class="list-group-item"><strong>Employee</strong> - The Employee records</li>
      <li class="list-group-item"><strong>Event</strong> - The events objects.</li>
    </ul>
</div>

#### The Forms

In this example, we also talked about "unstructured" data forms such as the **HR Forms** in which the Employee would need to create submissions and then be able to manage their data. These should be "unstructured" data collection mechanisms and must be capable of being flexible and in some cases created by the Human Resources person. These are your **Forms**

<div class="card">
  <div class="card-header"><h3 class="card-title">Forms</h3></div>
  <ul class="list-group list-group-flush">
      <li class="list-group-item"><strong>W4</strong> - Tax form each employee needs to fill out.</li>
      <li class="list-group-item"><strong>Employee Onboarding</strong> - The form every new Employee fills out for onboarding purposes.</li>
      <li class="list-group-item"><strong>Event Registration</strong> - The registration form which Employees fill out to register for an Event resource.</li>
    </ul>
</div>

Form.io allows you to build a Data Management application by consciously separating these two constructs to help you organize how the Forms and Resources can be used together to create a flexible and robust Data Management platform.

![](/assets/img/userguide/formsvsresource.png){: .img-fluid .img-thumbnail }

<div class="card card-body bg-faded">
  <h3><i class="fa fa-info-circle"></i> Pro Tip</h3>
  <p>Technically <strong>Resources</strong> and <strong>Forms</strong> are the same thing. The simplicity and power of the Form.io platform treats them both the same from an API perspective, but they were separated to assist the developer to keep track of them as separate entities since they are used differently within the Data Management applications.</p>
</div>


