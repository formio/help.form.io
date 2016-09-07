---
title: Index
book: developer
section: api
chapter: submission
slug: index
weight: 50
---
To **read multiple** submissions at once, perform a **GET** request against a resource's submission URL. The submission URL has an additional querystring to limit the number of items and a Range header to iterate over multiple pages.

<script src="https://gist.github.com/travist/838f5cf5255b74111cef6075188dedc9.js"></script>

###To query for specific submissions###
In order to find specific submissions within the index, you can also perform queries for any poperty within a submission. A typical submission is as follows.

```
{
    "_id": "57cf908e6605476b00fab81f",
    "modified": "2016-09-07T03:59:10.836Z",
    "data": {
        "firstName": "Travis",
        "lastName": "Tidwell",
        "email": "travis@form.io",
        "phoneNumber": "9897898798"
    },
    "form": "57c6d2a1783e146f00bc65c4",
    "created": "2016-09-07T03:59:10.818Z",
    "externalIds": [],
    "access": [],
    "roles": ["57c6d2a1783e146f00bc65c2"],
    "owner": "553dbfc08d22d5cb1a7024f2"
}
```

Where the submission data can be found within the ```data``` object. So, lets say you wish to find all people in the submissions who have the last name of Smith, you would run the following query.

```

```

The following is a list of all query parameters that can be used to find the submission you are looking for.

| Filter                       | Query    | Example                                              | Description                                                      |
|------------------------------|----------|------------------------------------------------------|------------------------------------------------------------------|
| **equal**                    | `equals` | `/users?gender=male` 			                     | both return all male users                                       |
| **not equal**                | `ne`     | `/users?gender__ne=male`                             | returns all users who are not male (`female` and `x`)            |
| **greater than**             | `gt`     | `/users?age__gt=18`                                  | returns all users older than 18                                  |
| **greater than or equal to** | `gte`    | `/users?age__gte=18`                                 | returns all users 18 and older (age should be a number property) |
| **less than**                | `lt`     | `/users?age__lt=30`                                  | returns all users age 29 and younger                             |
| **less than or equal to**    | `lte`    | `/users?age__lte=30`                                 | returns all users age 30 and younger                             |
| **in**                       | `in`     | `/users?gender__in=female,male`                      | returns all female and male users                                |
| **nin**                      | `nin`    | `/users?age__nin=18,21`                              | returns all users who are not 18 or 21                           |
| **exists=true**              | `exists` | `/users?age__exists=true`                            | returns all users where the age is provided.                     |
| **exists=false**             | `exists` | `/users?age__exists=false`                           | returns all users where the age is not provided.                 |
| **Regex**                    | `regex`  | `/users?username__regex=/^travis/i`                  | returns all users with a username starting with travis           |

