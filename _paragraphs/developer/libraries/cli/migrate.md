---
title: Migrate Data
book: developer
section: libraries
chapter: cli
weight: 3
slug: migrate
---
```
formio migrate <source> <transformer> <destination>
```

The migrate command allows you to migrate submission data from one source to another using a simple command. You can either migrate data from a CSV into a form, or from a form into another form. This works by taking the data from <source>, sending it through a middleware function called <transformer> (which you provide) that transforms the data into the correct format, and then saving that data as a submission into the <destination> form.

#### Example
Let's suppose you have the following CSV file of data.

***import.csv***

```
First Name, Last Name, Email
Joe, Smith, joe@example.com
Jane, Thompson, jane@example.com
Terry, Jones, terry@example.com
```

And now you wish to import all of that data into a form. You can create the transform file like the following.

***transform.js***

```
var header = true;
module.exports = function(record, next) {
 if (header) {
   // Ignore the header row.
   header = false;
   return next();
 }
 next(null, {
   data: {
     firstName: record[0],
     lastName: record[1],
     email: record[2]
   }
 });
};
```

This transform middleware file can be a complete Node.js middleware method and works asynchronously so if you need to perform asynchronous behavior, you can do that by only calling the next function when the record is ready.

You can now migrate that data into your form with the following command.

```
formio migrate import.csv transform.js https://myproject.form.io/myform --key [YOUR_API_KEY]
```