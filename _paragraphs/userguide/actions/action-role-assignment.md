---
title: Role Assignment Action
book: userguide
chapter: actions
slug: action-role-assignment
weight: 60
---
<p>The role assignment action allows assigning a role to a submission when an event occurs on a form.</p>
<img src="/assets/img/action-role-assignment.png">
<h4>Handler</h4>
<p>The handler determines when the role will be assigned. Currently there are two options. Before and After are the two options. If you select both, it will run twice, once before and once after the methods selected.</p>
<h4>Method</h4>
<p>When to run this action. Select which system events will trigger this action.</p>
<h4>Resource Association</h4>
<p>
    The resource association will determine how the authentication is handled with the submission.
    <h5>New Resource</h5>
    <p>Use New Resource for forms like Registration forms. This will create a new submission and perform the role assignment against the new resource. This will both create the user account and assign them a role. </p>
    <h5>Existing Resource</h5>
    <p>Use Existing Resource for forms that need to modify an existing resource's roles, like a user management form that can add/remove roles. There is a special requirement your form needs to meet for this to work: You must have a required Resource component with the property name <code>submission</code>. The value of this Resource component will be the submission that receives the role assignment.</p>
</p>
<h4></h4>
<h4>Action Type</h4>
<p>What type of role assignment action to take. The available options are Add Role and Remove Role.</p>
<h4>Role</h4>
<p>The role to use when performing the role assignment.</p>
