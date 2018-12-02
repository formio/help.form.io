---
title: Resource Registration
book: tutorials
section: walkthroughs
chapter: servicetracker
slug: resource-registration
weight: 15
---
Now that we have defined our resources, we now need to register them with the ```FormioResourceProvider``` so that it can register all of the ui router paths that support the structure of the application. All of the classes that we just got through building are what we pass into the ```FormioResourceProvider``` and we can then iterate over all the resources provided from the AppConfig to initialize these resources. We can do this with the following code.

***/src/app/index.route.js***

```
  /** @ngInject */
  function routerConfig(
    $stateProvider,
    $urlRouterProvider,
    FormioResourceProvider,
    AppConfig,
    $injector
  ) {
    $stateProvider
      .state('home', {
        url: '/?',
        templateUrl: 'views/home.html'
      });

    // Register all of the resources.
    angular.forEach(AppConfig.resources, function(resource, name) {
      FormioResourceProvider.register(name, resource.form, $injector.get(resource.resource + 'Provider'));
    });

    $urlRouterProvider.otherwise('/');
  }
```

Once you do that, you should then be able to restart your application by closing it out, and the re-running the following command.

```
  gulp serve
```

And you are done!  You should now be able to see the full working application running Serverless within your browser!

![](/assets/img/tutorials/walkthroughs/servicetracker/app-running.png){: .img-fluid .img-thumbnail }

We hope that this walkthrough demonstration really illustrates the power of Form.io. In just a short walkthrough, we were able to create a very complex Serverless Enterprise application that incorporates a number of nested resources, mapping, as well as total separtion between the front end application and the backend API Server!

If you have any questions, please do not hesitate to ask @ support@form.io.

Enjoy Form.io!

- The Form.io Team
