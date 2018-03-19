---
title: Developer Info
subtitle: Remote Middleware
book: developer
weight: 60
chapter: middleware
layout: chapter
---
Remote middleware allows binding to the project API and modifying requests from the user in an asynchronous fashion. In this way it is possible to act as express middleware over websockets in real time and reject the request, modify it or move the request to a third party service.
This allows you to extend the {{ site.formio }} API platform with your own services in real-time.
