---
title: Application Cloning
book: developer
section: info
weight: 80
chapter: bootstrap
---
You can bootstrap any Form.io application within GitHub easily with our one line bootstrap command. First find a repository that you wish to bootstrap. You can find some on [Formio Github](https://github.com/formio?utf8=%E2%9C%93&query=formio-app-).

Install the formio-cli tool by running this command in the command line.

```
npm install -g formio-cli
```

Use the **bootstrap** command to clone an application. This will both download the sample application to your local machine and set up a formio project with the proper template.

```
formio bootstrap [GitHub Project]
```

Once the app is downloaded and set up, run the serve command to do local development.

```
formio serve [Directory]
```
