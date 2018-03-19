---
title: Application Resources
book: tutorials
section: walkthroughs
chapter: servicetracker
slug: app-resources
weight: 14
---
One of the most powerful concepts of Form.io, is that it allows you to use a Form Builder to create your Resources, but that at the same time creates the API platform needed for all of the CRUD operations for those resources. When dealing with resources within your application, it is important to note all of the resource actions are mapped directly into your application using a special tool called the ```FormioResourceProvider```. This is provided from the ```ngFormioHelper``` library and the source code can be seen @ [https://github.com/formio/ngFormioHelper/blob/master/src/ng-formio-helper.js#L34](https://github.com/formio/ngFormioHelper/blob/master/src/ng-formio-helper.js#L34)

Within the ```AppConfig``` found @ ```/src/config.js``` we have already defined a number of resources with the Forms and then the resource Class that is associated with that form. Each of these classes should be defined in separate files within the ```/src/app/resources``` folder. To do this, we can take the Resource class pattern shown within the [Basic Application](https://github.com/formio/formio-app-basic/blob/master/src/app/resources/User.js) at the following url [https://github.com/formio/formio-app-basic](https://github.com/formio/formio-app-basic/blob/master/src/app/resources/User.js). I recommend reading all of the comments within this file, since it illustrates how you can create highly customized behaviors within your resources. We can take what we know here, and copy the User.js to establish all of our Resource classes as follows.

### Dealer Resource

***/src/app/resources/Dealer.js***

```
  angular.module('servicetracker')
  .provider('DealerResource', function() {
    return {
      $get: function() { return null; },
      templates: {
        abstract: 'views/dealer/dealer.html',
        view: 'views/dealer/view.html'
      }
    };
  });
```

***/src/views/dealer/dealer.html***

```
  <ul class="nav nav-tabs" ng-if="isDealer">
    <li role="presentation" ng-class="{active: isActive('dealer.view')}"><a ui-sref="dealer.view()">View</a></li>
    <li role="presentation" ng-class="{active: isActive('dealer.customer')}"><a ui-sref="dealer.customerIndex()">Customers</a></li>
    <li role="presentation" ng-class="{active: isActive('dealer.contractor')}"><a ui-sref="dealer.contractorIndex()">Contractors</a></li>
    <li role="presentation" ng-if="isAdmin" ng-class="{active: isActive('dealer.edit')}"><a ui-sref="dealer.edit()">Edit</a></li>
    <li role="presentation" ng-if="isAdmin" ng-class="{active: isActive('dealer.delete')}"><a ui-sref="dealer.delete()">Delete</a></li>
  </ul>
  <div ui-view></div>
```

***/src/views/dealer/view.html***

```
  <div class="panel panel-default">
      <div class="panel-heading">
          <h3 class="panel-title">Dealer Information</h3>
      </div>
      <div class="panel-body">
          <formio-submission submission="dealer.resource" form="dealer.form"></formio-submission>
      </div>
  </div>
```

### Customer Resource

***/src/app/resources/Customer.js***

```
  angular.module('servicetracker')
  .provider('CustomerResource', function() {
    return {
      $get: function() { return null; },
      parent: 'dealer',
      base: 'dealer.',
      templates: {
        abstract: 'views/customer/customer.html',
        view: 'views/customer/view.html'
      },
      controllers: {
        view: ['$scope', function($scope) {
          $scope.position = {lat: '40.74', lng: '-74.18'};
          $scope.customer.loadSubmissionPromise.then(function(customer) {
            if (
              customer.data.address &&
              customer.data.address.geometry &&
              customer.data.address.geometry.location
            ) {
              $scope.position.lat = customer.data.address.geometry.location.lat;
              $scope.position.lng = customer.data.address.geometry.location.lng;
            }
          });
        }]
      }
    };
  });
```
Notice here we provided the parent and base, but also a view controller that will allow us to populate the GPS position within a map on the Customer view page.

***/src/views/customer/customer.html***

```
  <ul class="nav nav-tabs">
      <li role="presentation" ng-class="{active: isActive('dealer.customer.view')}"><a ui-sref="dealer.customer.view()">View</a></li>
      <li role="presentation" ng-class="{active: isActive('dealer.customer.equipment')}"><a ui-sref="dealer.customer.equipmentIndex()">Equipment</a></li>
      <li role="presentation" ng-class="{active: isActive('dealer.customer.appointment')}"><a ui-sref="dealer.customer.appointmentIndex()">Appointments</a></li>
      <li role="presentation" ng-class="{active: isActive('dealer.customer.edit')}"><a ui-sref="dealer.customer.edit()">Edit</a></li>
      <li role="presentation" ng-class="{active: isActive('dealer.customer.delete')}"><a ui-sref="dealer.customer.delete()">Delete</a></li>
  </ul>
  <div ui-view></div>
```

***/src/views/customer/view.html***

```
  <h2>{{ currentResource.resource.data.name }}</h2>
  <p><strong>Address: </strong> {{ currentResource.resource.data.address.formatted_address }}</p>
  <p><strong>Status: </strong> {% if currentResource.resource.data.inactive %}Inactive{% else %}Active{% endif %}</p>
  <map ng-if="position" zoom="8" center="[{{ position.lat }}, {{ position.lng }}]"> <marker position="[{{ position.lat }}, {{ position.lng }}]" title="{{ currentResource.resource.data.address.formatted_address }}" visible></marker></map>
  <br>
  <div class="panel panel-default">
    <div class="panel-heading">
      <h3 class="panel-title">Primary Contact Information</h3>
    </div>
    <div class="panel-body">
      <ul class="list-group">
        <li class="list-group-item"><strong>Name:</strong> {{ currentResource.resource.data.firstName }} {{ currentResource.resource.data.lastName }}</li>
        <li class="list-group-item"><strong>Phone:</strong> {{ currentResource.resource.data.phoneNumber }}</li>
        <li class="list-group-item"><strong>Email:</strong> {{ currentResource.resource.data.email }}</li>
      </ul>
    </div>
  </div>
```

We also need to make sure that we add the Google Maps API to the ```index.html``` page.

***/src/index.html***

```
  <head>
    <meta charset="utf-8">
    <title>servicetracker</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width">
    <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->

    <!-- build:css({.tmp/serve,src}) styles/vendor.css -->
    <!-- bower:css -->
    <!-- run `gulp inject` to automatically populate bower styles dependencies -->
    <!-- endbower -->
    <!-- endbuild -->

    <!-- build:css({.tmp/serve,src}) styles/app.css -->
    <!-- inject:css -->
    <!-- css files will be automatically insert here -->
    <!-- endinject -->
    <!-- endbuild -->
    <script src="https://maps.google.com/maps/api/js?key=YOUR_API_KEY"></script>
  </head>
```

## Contractor Resource

***/src/app/resources/Contractor.js***

```
  angular.module('servicetracker')
  .provider('ContractorResource', function() {
    return {
      $get: function() { return null; },
      parent: 'dealer',
      base: 'dealer.'
    };
  });
```
In some cases, we just need to tell the application how this resource is nested within the application. For this case, this is a very easy resource to add.

## Equipment Resource

***/src/app/resources/Equipment.js***

```
  angular.module('servicetracker')
  .provider('EquipmentResource', function() {
    return {
      $get: function() { return null; },
      parent: 'customer',
      base: 'dealer.customer.',
      templates: {
        view: 'views/equipment/view.html'
      }
    };
  });
```

***/src/views/equipment/view.html***

```
  <div class="panel panel-success">
    <div class="panel-heading">
      <h3 class="panel-title">Equipment</h3>
    </div>
    <div class="panel-body">
      <p><strong>Serial #: </strong> {{ currentResource.resource.data.serialNumber }}</p>
      <p><strong>Model #: </strong> {{ currentResource.resource.data.modelNumber }}</p>
      <div class="panel panel-default">
        <div class="panel-heading">
          <h3 class="panel-title">Customer Information</h3>
        </div>
        <div class="panel-body">
          <ul class="list-group">
            <li class="list-group-item"><strong>Name:</strong> {{ currentResource.resource.data.customer.data.firstName }} {{ currentResource.resource.data.customer.data.lastName }}</li>
            <li class="list-group-item"><strong>Phone:</strong> {{ currentResource.resource.data.customer.data.phoneNumber }}</li>
            <li class="list-group-item"><strong>Email:</strong> {{ currentResource.resource.data.customer.data.email }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
```

## Appointment Resource

***/src/app/resource/Appointment.js***

```
  angular.module('servicetracker')
  .provider('AppointmentResource', function() {
    return {
      $get: function() { return null; },
      parent: 'customer',
      base: 'dealer.customer.',
      templates: {
        abstract: 'views/appointment/appointment.html',
        view: 'views/appointment/view.html'
      }
    };
  });
```

***/src/views/appointment/appointment.html***

```
<ul class="nav nav-tabs">
    <li role="presentation" ng-class="{active: isActive('dealer.customer.appointment.view')}"><a ui-sref="dealer.customer.view()">View</a></li>
    <li role="presentation" ng-class="{active: isActive('dealer.customer.appointment.service')}"><a ui-sref="dealer.customer.appointment.serviceIndex()">Service</a></li>
    <li role="presentation" ng-class="{active: isActive('dealer.customer.appointment.timeclock')}"><a ui-sref="dealer.customer.appointment.timeclockIndex()">Time Clock</a></li>
    <li role="presentation" ng-class="{active: isActive('dealer.customer.appointment.edit')}"><a ui-sref="dealer.customer.appointment.edit()">Edit</a></li>
    <li role="presentation" ng-class="{active: isActive('dealer.customer.appointment.delete')}"><a ui-sref="dealer.customer.appointment.delete()">Delete</a></li>
</ul>
<div ui-view></div>
```

***/src/views/appointment/view.html***

```
  <div class="panel panel-success">
    <div class="panel-heading">
      <h3 class="panel-title">Appointment</h3>
    </div>
    <div class="panel-body">
      <p><strong>Appointment Time: </strong> {{ currentResource.resource.data.appointmentTime | date : 'medium' }}</p>
      <p><strong>Assigned Contractor: </strong> {{ currentResource.resource.data.contractor.data.name }}</p>
      <h2>{{ currentResource.resource.data.customer.name }}</h2>
      <div class="panel panel-default">
        <div class="panel-heading">
          <h3 class="panel-title">Customer Information</h3>
        </div>
        <div class="panel-body">
          <ul class="list-group">
            <li class="list-group-item"><strong>Name:</strong> {{ currentResource.resource.data.customer.data.firstName }} {{ currentResource.resource.data.customer.data.lastName }}</li>
            <li class="list-group-item"><strong>Phone:</strong> {{ currentResource.resource.data.customer.data.phoneNumber }}</li>
            <li class="list-group-item"><strong>Email:</strong> {{ currentResource.resource.data.customer.data.email }}</li>
            <li class="list-group-item"><strong>Address:</strong> {{ currentResource.resource.data.customer.data.address.formatted_address }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
```

## Service Resource

***/src/app/resource/Service.js***

```
  angular.module('servicetracker')
  .provider('ServiceResource', function() {
    return {
      $get: function() { return null; },
      parent: 'appointment',
      base: 'dealer.customer.appointment.',
      templates: {
        view: 'views/service/view.html'
      }
    };
  });
```

***/src/views/service/view.html***

```
  <div class="panel panel-success">
    <div class="panel-heading">
      <h3 class="panel-title">Service</h3>
    </div>
    <div class="panel-body">
      <p><strong>Service Performed: </strong> {{ currentResource.resource.data.servicePerformed }}</p>
      <p><strong>Service Notes: </strong> {{ currentResource.resource.data.serviceNotes }}</p>
      <p><strong><a ui-sref="dealer.customer.appointment.view()">View Appointment Details</a></strong></p>
    </div>
  </div>
```

## TimeClock Resource

***/src/app/resources/TimeClock.js***

```
  angular.module('servicetracker')
  .provider('TimeClockResource', function() {
    return {
      $get: function() { return null; },
      parent: 'appointment',
      base: 'dealer.customer.appointment.',
      templates: {
        view: 'views/timeclock/view.html'
      },
      controllers: {
        create: ['$scope', 'Geolocation', function($scope, Geolocation) {
          Geolocation.getCurrentPosition()
            .then(function(data) {
              if (!data || !data.coords || !data.coords.longitude || !data.coords.latitude) return;
              $scope.submission.data.location = [data.coords.latitude, data.coords.longitude];
            })
            .catch(function(err) {
              $scope.submission.data.location = [0, 0];
            });
        }]
      }
    };
  });
```
There is a really cool feature exposed with the Time Clock resource, where it captures the GPS coordinates of the contractor at the time that they submit the time clock. This utilizes a ```Geolocation``` factory that we provided within the ```index.module.js``` file as follows.

***/src/app/index.module.js***

```
  angular
    .module('servicetracker', [
      'ngSanitize',
      'ngAria',
      'ui.router',
      'ui.bootstrap',
      'toastr',
      'formio',
      'ngFormioHelper'
    ])
    .factory('Geolocation', ['$q', '$window', function($q, $window) {
      return {
        getCurrentPosition: function() {
          var deferred = $q.defer();

          if (!$window.navigator.geolocation) {
            return deferred.reject('Geolocation not supported.');
          }

          $window.navigator.geolocation.getCurrentPosition(
            function(position) {
              deferred.resolve(position);
            },
            function(err) {
              deferred.reject(err);
            }
          );

          return deferred.promise;
        }
      };
    }]);
```

And the view that shows this map is as follows.

***/src/views/timeclock/view.html***

```
  <div class="panel panel-success">
    <div class="panel-heading">
      <h3 class="panel-title">Time Entry</h3>
    </div>
    <div class="panel-body">
      <p><strong>Time: </strong> {{ currentResource.resource.data.time | date : 'medium' }}</p>
      <p><strong>Activity: </strong> {{ currentResource.resource.data.activity }}</p>
      <p><strong>Contractor: </strong> {{ currentResource.resource.data.appointment.data.contractor.data.name }}</p>
      <p><strong>Appointment: </strong> {{ currentResource.resource.data.appointment.data.appointmentTime | date : 'medium' }}</p>
      <div class="panel panel-default">
        <div class="panel-heading">
          <h3 class="panel-title">Customer Information</h3>
        </div>
        <div class="panel-body">
          <ul class="list-group">
            <li class="list-group-item"><strong>Name:</strong> {{ currentResource.resource.data.appointment.data.customer.data.firstName }} {{ currentResource.resource.data.appointment.data.customer.data.lastName }}</li>
            <li class="list-group-item"><strong>Phone:</strong> {{ currentResource.resource.data.appointment.data.customer.data.phoneNumber }}</li>
            <li class="list-group-item"><strong>Email:</strong> {{ currentResource.resource.data.appointment.data.customer.data.email }}</li>
          </ul>
        </div>
      </div>
      <div ng-if="currentResource.resource.data.location">
        <p><strong>Location: </strong> {{currentResource.resource.data.location[0] }}, {{currentResource.resource.data.gpsLongitude[1] }}</p>
        <map zoom="8" center="{{ currentResource.resource.data.location }}"> <marker position="{{ currentResource.resource.data.location }}" visible></marker></map>
      </div>

    </div>
  </div>
```

## Add the navigation to home page.
We now need to register all of the navigation into the home page so that they can get to the main resources.

***/src/views/home.html***

```
  <ul class="nav nav-tabs" ng-if="authenticated">
    <li role="presentation" ng-class="{active: isActive('home')}"><a ui-sref="home()"><i class="fa fa-home"></i></a></li>
    <li ng-if="!isAdmin && isContractor" role="persentation" ng-class="{active: isActive('appointments')}"><a ui-sref="appointments()">Appointments</a></li>
    <li ng-if="!isAdmin && isContractor" role="presentation" ng-class="{active: isActive('dealer.customerIndex')}"><a ui-sref="dealer.customerIndex({dealerId: user.data.dealer._id})">Customers</a></li>
    <li ng-if="!isAdmin && isDealer" role="presentation" ng-class="{active: isActive('dealer.customerIndex')}"><a ui-sref="dealer.customerIndex({dealerId: user._id})">Customers</a></li>
    <li ng-if="!isAdmin && isDealer" role="presentation" ng-class="{active: isActive('dealer.contractorIndex')}"><a ui-sref="dealer.contractorIndex({dealerId: user._id})">Contractors</a></li>
    <li ng-if="isAdmin" role="presentation" ng-class="{active: isActive('dealerIndex')}"><a ui-sref="dealerIndex()">Dealers</a></li>
  </ul>
  <div class="jumbotron bg-info">
    <h2>Welcome to the Service Tracker Application</h2>
    <p>The following applications highlights how you can create an applicatoin with complex nested resource relationships.</p>
  </div>
```