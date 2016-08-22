---
title: Reporting API Endpoint
book: developer
section: api
weight: 10
chapter: report
---
The Report API can be accessed through the URL path of ```/report``` within your project. So, as an example, if your project API url is ```https://myproject.form.io```, then the report API for that project is ```https://myproject.form.io/report```.

This endpoint can be used with a payload of the <a href="https://docs.mongodb.com/manual/aggregation/">MongoDB Aggregation Pipeline</a> to create the report you need. As an example, lets say you have multiple Forms, where all of them provide a <strong>Status</strong> field. Using the Report API, you can generate a Report to determine the count of each status within multiple forms within your project. The MongoDB Aggregation pipeline for this query would look something similar to the following.

```
  [
    {
      "$match": {
        "form": {
          "$in": [
            "ObjectId('123123123123123')",
            "ObjectId('234234234234234')"
          ]
        }
      }
    },
    {
      "$group": {
        _id: "$data.case._id",
        title: {
          "$first": "$data.case.data.title"
        },
        total: {"$sum": 1},
        approved: {"$sum": {
          "$cond": {
            if: {"$eq": ["$data.status", "approved"]},
            then: 1,
            else: 0
          }
        }},
        pending: {"$sum": {
          "$cond": {
            if: {"$eq": ["$data.status", "pending"]},
            then: 1,
            else: 0
          }
        }}
      }
    }
  ]
```

Using our Advanced Report API, this can now be ```POST``` into to the reporting platform to perform advanced queries like the following Gist shows.

<script src="https://gist.github.com/travist/d6331cad24328ebd16a77c7d495e02c4.js"></script>