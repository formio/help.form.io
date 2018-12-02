---
title: Restructure the Scaffolding
book: tutorials
section: walkthroughs
chapter: servicetracker
slug: restructure
weight: 10
---
While the Angular-Gulp generator is a fantastic start, there are a number of things we should do to allow for a better structure, maintainability, and configurability.

### Delete the overrides in bower.json

Your bower.json file should look like the following when you are done.

***/bower.json***

![](/assets/img/tutorials/walkthroughs/servicetracker/restructure-delete-overrides.png){: .img-fluid .img-thumbnail }

### Don't exclude bootstrap.js in Gulp task

***/gulp/conf.js***

```
  /**
   *  Wiredep is the lib which inject bower dependencies in your project
   *  Mainly used to inject script tags in the index.html but also used
   *  to inject css preprocessor deps and js files in karma
   */
  exports.wiredep = {
    exclude: [/\/bootstrap-sass\/.*\.js/, /\/bootstrap\.css/],
    directory: 'bower_components'
  };
```

### Allow [Bootswatch](https://bootswatch.com/) by changing your /app/index.scss to the following

***/src/app/index.scss***

```
  @import "bower_components/bootswatch/yeti/_variables.scss";
  @import "bower_components/bootstrap-sass/assets/stylesheets/_bootstrap.scss";
  @import "bower_components/bootswatch/yeti/_bootswatch.scss";
  @import "bower_components/font-awesome/scss/font-awesome.scss";

  .browsehappy {
    margin: 0.2em 0;
    background: #ccc;
    color: #000;
    padding: 0.2em 0;
  }
```

Doing this allows you to add your own variables to your application like the following.

```
  @import "bower_components/bootswatch/yeti/_variables.scss";
  $brand-primary:         #2780E3;
  $brand-success:         #3FB618;
  $brand-info:            #9954BB;
  $brand-warning:         #FF7518;
  $brand-danger:          #FF0039;
  @import "bower_components/bootstrap-sass/assets/stylesheets/_bootstrap.scss";
  @import "bower_components/bootswatch/yeti/_bootswatch.scss";
  @import "bower_components/font-awesome/scss/font-awesome.scss";
```

### Allow Font-awesome and UI Grid by modifying the Gulp fonts task

***/gulp/build.js***

```
  // Only applies for fonts from bower dependencies
  // Custom fonts are handled by the "other" task
  gulp.task('fonts', function () {
    return gulp.src([
        'bower_components/bootstrap-sass/assets/fonts/**/*',
        'bower_components/font-awesome/fonts/*'
      ])
      .pipe($.filter('**/*.{eot,svg,ttf,woff,woff2}'))
      .pipe(gulp.dest(path.join(conf.paths.dist, '/fonts/')));
  });

  // You will need to add this task...
  gulp.task('ui-grid-fonts', function () {
    return gulp.src([
        'bower_components/ng-formio-grid/dist/*',
      ])
      .pipe($.filter('**/*.{eot,svg,ttf,woff,woff2}'))
      .pipe(gulp.dest(path.join(conf.paths.dist, '/styles/')));
  });
```
...
...
...

```
  // Need to add the ui-grid-fonts to the gulp tasks...
  gulp.task('build', ['html', 'fonts', 'ui-grid-fonts', 'other', 'views', 'config']);
```

### Allow the following routes in /gulp/server.js

***/gulp/server.js***

```
  if(baseDir === conf.paths.src || (util.isArray(baseDir) && baseDir.indexOf(conf.paths.src) !== -1)) {
    routes = {
      '/bower_components': 'bower_components',
      '/fonts': 'bower_components/font-awesome/fonts',
      '/fonts/bootstrap': 'bower_components/bootstrap-sass/assets/fonts/bootstrap'
    };
  }
```

### Add the navbar to index.html

***/src/index.html***

```
  <nav class="navbar navbar-static-top navbar-inverse">
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-navbar-collapse" aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" ui-sref="home()">
          <i class="fa fa-home"></i> Service Tracker
        </a>
      </div>
      <div class="collapse navbar-collapse" id="bs-navbar-collapse">
        <ul class="nav navbar-nav navbar-right">
          <li ng-if="authenticated"><a class='navbar-link' href="#" ng-click="logout()"><i class="fa fa-power-off"></i> Logout</a></li>
        </ul>
      </div>
    </div>
  </nav>
  <div ui-view class="container"></div>
```

### Create the views folder and the gulp task to add it to the distribution

![](/assets/img/tutorials/walkthroughs/servicetracker/restructure-views.png){: .img-fluid .img-thumbnail }

***/gulp/build.js***

```
  gulp.task('views', function() {
    return gulp.src([
      path.join(conf.paths.src, '/views/**/*')
    ]).pipe(gulp.dest(path.join(conf.paths.dist, '/views/')));
  });

  gulp.task('build', ['html', 'fonts', 'ui-grid-fonts', 'other', 'views']);
```

This should complete the restructuring of the application, we can now start adding the Form.io elements to create the application.
