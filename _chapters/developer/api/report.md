---
title: Advanced Reporting API
book: developer
section: api
weight: 80
chapter: report
---
In addition to our standard Form & Submission API, we have developed an Advanced Reporting API which provides a way to perform very complex report queries. This feature is only available to accounts that are <strong>Team Pro</strong> or greater. This system leverages the <a href="https://docs.mongodb.com/manual/aggregation/">MongoDB Aggregation Framework</a> which will provide a method to create reports that span across multiple forms as well as format the data within those reports to adhere to your reporting requirements.