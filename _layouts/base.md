<!DOCTYPE html>
<html lang="en">
<head>
  <script type="text/javascript">
    var path = location.pathname.replace(/^\/(.*)\/$/g, '$1');
    var redirects = {
      'faq': '/faq/introduction/',
      'faq/#advanced': '/faq/advanced/',
      'faq/#basic': '/faq/basic/',
      'faq/#introdcution': '/faq/introdcution/',
      'developer/api': '/developer/api/postman/',
      'developer/api/#postman': '/developer/api/postman/',
      'developer/deployments': '/developer/deployments/aws/',
      'developer/deployments/#aws': '/developer/deployments/aws/',
      'developer/deployments/#bluemix': '/developer/deployments/bluemix/',
      'developer/info': '/developer/info/welcome/',
      'developer/info/#cordova': '/developer/info/cordova/',
      'developer/info/#angular': '/developer/info/angular/',
      'developer/info/#auth0': '/developer/info/auth0/',
      'developer/info/#bootstrap': '/developer/info/bootstrap/',
      'developer/info/#emaillogin': '/developer/info/emaillogin/',
      'developer/info/#lambda': '/developer/info/lambda/',
      'developer/info/#middleware': '/developer/info/middleware/',
      'developer/info/#node-library': '/developer/info/node-library/',
      'developer/info/#offline': '/developer/info/offline/',
      'developer/info/#react': '/developer/info/react/',
      'developer/info/#welcome': '/developer/info/welcome/',
      'developer/integrations': '/developer/integrations/start/',
      'developer/integrations/#email': '/developer/integrations/email/',
      'developer/integrations/#filestorage': '/developer/integrations/filestorage/',
      'developer/integrations/#google-drive': '/developer/integrations/google-drive/',
      'developer/integrations/#hubspot': '/developer/integrations/hubspot/',
      'developer/integrations/#oauth': '/developer/integrations/oauth/',
      'developer/integrations/#office365': '/developer/integrations/office365/',
      'developer/integrations/#start': '/developer/integrations/start/',
      'developer/libraries': '/developer/libraries/angular/',
      'developer/libraries/#ng-formio-builder': '/developer/libraries/ng-formio-builder/',
      'developer/libraries/#ng-formio-grid': '/developer/libraries/ng-formio-grid/',
      'developer/libraries/#ng-formio-helper': '/developer/libraries/ng-formio-helper/',
      'developer/libraries/#ng-formio': '/developer/libraries/ng-formio/',
      'intro': '/intro/welcome/'
      'intro/#customizing': '/intro/appdev/',
      'intro/#explore': '/intro/explore/',
      'intro/#howworks': '/intro/howworks/',
      'intro/#next': '/intro/next/',
      'intro/#welcome': '/intro/welcome/',
      'tutorials/videos': '/tutorials/videos/welcome/',
      'tutorials/videos/#advancedtutorial': '/tutorials/videos/advancedtutorial/',
      'tutorials/videos/#basictutorial': '/tutorials/videos/basictutorial/',
      'tutorials/videos/#developertutorial': '/tutorials/videos/developertutorial/',
      'tutorials/videos/#intro': '/tutorials/videos/intro/',
      'tutorials/videos/#walkthrough': '/tutorials/videos/walkthrough/',
      'tutorials/videos/#welcome': '/tutorials/videos/welcome/',
      'tutorials/walkthroughs': '/tutorials/walkthroughs/eventmanager/',
      'tutorials/walkthroughs/#moviemanager': '/tutorials/walkthroughs/moviemanager/',
      'tutorials/walkthroughs/#servicetracker': '/tutorials/walkthroughs/servicetracker/',
      'userguide': '/userguide/introduction/',
      'userguide/#actions': '/userguide/actions/',
      'userguide/#docker': '/userguide/docker/',
      'userguide/#forms': '/userguide/forms/',
      'userguide/#groups': '/userguide/groups/',
      'userguide/#introduction': '/userguide/introduction/',
      'userguide/#projects': '/userguide/projects/',
      'userguide/#resources': '/userguide/resources/',
      'userguide/#submissions': '/userguide/submissions/',
      'userguide/#teams': '/userguide/teams/',
      'userguide/#project-templates': '/userguide/project-templates/',
      'userguide/#env': '/userguide/environment-switcher/',
      'userguide/#existing-resource-fields': '/userguide/existing-resource-fields/',
      'userguide/#form-components': '/userguide/form-components/',
      'userguide/#layout-components': '/userguide/layout-components/',
      'userguide/#roles-and-permissions': '/userguide/roles-and-permissions/',
      'developer/api/#formio-account': '/developer/api/postman/',
      'developer/api/#project-user': '/developer/api/postman/',
      'developer/api/#create': '/developer/api/postman/',
      'developer/api/#delete': '/developer/api/postman/',
      'developer/api/#index': '/developer/api/postman/',
      'developer/api/#read': '/developer/api/postman/',
      'developer/api/#update': '/developer/api/postman/',
      'developer/deployments/#aws-auth': '/developer/deployments/aws/#aws-auth',
      'developer/deployments/#aws-beanstalk': '/developer/deployments/aws/#aws-beanstalk',
      'developer/deployments/#aws-config': '/developer/deployments/aws/#aws-config',
      'developer/deployments/#aws-prerequisites': '/developer/deployments/aws/#aws-prerequisites',
      'developer/deployments/#bluemix-app': '/developer/deployments/bluemix/#bluemix-app',
      'developer/deployments/#bluemix-docker': '/developer/deployments/bluemix/#bluemix-docker',
      'developer/info/#conditional-fields': '/developer/info/angular/#conditional-fields',
      'developer/info/#form-translation': '/developer/info/angular/#form-translation',
      'developer/info/#formio-delete': '/developer/info/angular/#formio-delete',
      'developer/info/#formio-directive': '/developer/info/angular/#formio-directive',
      'developer/info/#formio-events': '/developer/info/angular/#formio-events',
      'developer/info/#formio-module': '/developer/info/angular/#formio-module',
      'developer/info/#formio-submissions': '/developer/info/angular/#formio-submissions',
      'developer/info/#styling-angular-forms': '/developer/info/angular/#styling-angular-forms',
      'developer/info/#auth0-app': '/developer/info/auth0/#auth0-app',
      'developer/info/#auth0-code': '/developer/info/auth0/#auth0-code',
      'developer/info/#auth0-rules': '/developer/info/auth0/#auth0-rules',
      'developer/info/#cordova-compile': '/developer/info/cordova/#cordova-compile',
      'developer/info/#cordova-install': '/developer/info/cordova/#cordova-install',
      'developer/info/#cordova-plugins': '/developer/info/cordova/#cordova-plugins',
      'developer/info/#cordova-prepare': '/developer/info/cordova/#cordova-prepare',
      'developer/info/#cli': '/developer/info/middleware/#cli',
      'developer/info/#cli': '/developer/info/middleware/#cli',
      'developer/info/#cli': '/developer/info/middleware/#cli',
      'developer/info/#react-module': '/developer/info/react/#react-module',
      'developer/info/#react-usage': '/developer/info/react/#react-usage',
      'developer/integrations/#gmail': '/developer/integrations/email/#gmail',
      'developer/integrations/#kickbox': '/developer/integrations/email/#kickbox',
      'developer/integrations/#mailgun': '/developer/integrations/email/#mailgun',
      'developer/integrations/#mandrill': '/developer/integrations/email/#mandrill',
      'developer/integrations/#sendgrid': '/developer/integrations/email/#sendgrid',
      'developer/integrations/#url': '/developer/integrations/filestorage/#url',
      'developer/integrations/#dropbox-storage': '/developer/integrations/filestorage/#dropbox-storage',
      'developer/integrations/#s3': '/developer/integrations/filestorage/#s3',
      'developer/integrations/#google-api-setting': '/developer/integrations/google-drive/#google-api-setting',
      'developer/integrations/#google-oauthclient': '/developer/integrations/google-drive/#google-oauthclient',
      'developer/integrations/#google-refreshtoken': '/developer/integrations/google-drive/#google-refreshtoken',
      'developer/integrations/#google-sheet': '/developer/integrations/google-drive/#google-sheet',
      'developer/integrations/#hubspot-action': '/developer/integrations/hubspot/#hubspot-action',
      'developer/integrations/#hubspot-apikey': '/developer/integrations/hubspot/#hubspot-apikey',
      'developer/integrations/#hubspot-mappings': '/developer/integrations/hubspot/#hubspot-mappings',
      'developer/integrations/#github': '/developer/integrations/oauth/#github',
      'developer/integrations/#action': '/developer/integrations/oauth/#action',
      'developer/integrations/#button': '/developer/integrations/oauth/#button',
      'developer/integrations/#dropbox-oauth': '/developer/integrations/oauth/#dropbox-oauth',
      'developer/integrations/#facebook': '/developer/integrations/oauth/#facebook',
      'developer/integrations/#google': '/developer/integrations/oauth/#google',
      'developer/integrations/#linkform': '/developer/integrations/oauth/#linkform',
      'developer/integrations/#msoffice365': '/developer/integrations/oauth/#msoffice365',
      'developer/integrations/#settings': '/developer/integrations/oauth/#settings',
      'developer/integrations/#twitter': '/developer/integrations/oauth/#twitter',
      'developer/libraries/#actions': '/developer/libraries/ng-formio-builder/#actions',
      'developer/libraries/#actions': '/developer/libraries/ng-formio-grid/#actions',
      'developer/libraries/#actions': '/developer/libraries/ng-formio-helper/#actions',
      'developer/libraries/#actions': '/developer/libraries/ng-formio/#actions',
      'integrations': '/developer/integrations/start/',
      'integrations/#linkedin': '/integrations/oauth/#linkedin',
      'intro/#deployapp': '/intro/customizing/#deployapp',
      'intro/#modifyapp': '/intro/customizing/#modifyapp',
      'intro/#updatingform': '/intro/customizing/#updatingform',
      'intro/#api': '/intro/explore/#api',
      'intro/#data': '/intro/explore/#data',
      'intro/#forms': '/intro/explore/#forms',
      'intro/#preview': '/intro/explore/#preview',
      'intro/#resources': '/intro/explore/#resources',
      'intro/#actions': '/intro/howworks/#actions',
      'intro/#dynamicrender': '/intro/howworks/#dynamicrender',
      'intro/#formembeds': '/intro/howworks/#formembeds',
      'intro/#restapi': '/intro/howworks/#restapi',
      'tutorials/videos/#part2': '/tutorials/videos/developertutorial/#part2',
      'tutorials/videos/#part3': '/tutorials/videos/developertutorial/#part3',
      'tutorials/videos/#dynamicRole': '/tutorials/videos/advancedtutorial/#dynamicRole',
      'tutorials/videos/#nested-resource': '/tutorials/videos/basictutorial/#nested-resource',
      'tutorials/videos/#oauth': '/tutorials/videos/advancedtutorial/#oauth',
      'tutorials/videos/#resourceAccess': '/tutorials/videos/advancedtutorial/#resourceAccess',
      'tutorials/videos/#rolespermissions': '/tutorials/videos/basictutorial/#rolespermissions',
      'tutorials/videos/#s3': '/tutorials/videos/advancedtutorial/#s3',
      'tutorials/videos/#user-table': '/tutorials/videos/basictutorial/#user-table',
      'tutorials/walkthroughs/#actions': '/tutorials/walkthroughs/servicetracker/#actions',
      'tutorials/walkthroughs/#application-create': '/tutorials/walkthroughs/servicetracker/#application-create',
      'tutorials/walkthroughs/#app-resources': '/tutorials/walkthroughs/servicetracker/#app-resources',
      'tutorials/walkthroughs/#code': '/tutorials/walkthroughs/servicetracker/#code',
      'tutorials/walkthroughs/#configuration': '/tutorials/walkthroughs/servicetracker/#configuration',
      'tutorials/walkthroughs/#create-project': '/tutorials/walkthroughs/servicetracker/#create-project',
      'tutorials/walkthroughs/#dependencies': '/tutorials/walkthroughs/servicetracker/#dependencies',
      'tutorials/walkthroughs/#formio-init': '/tutorials/walkthroughs/servicetracker/#formio-init',
      'tutorials/walkthroughs/#intro': '/tutorials/walkthroughs/servicetracker/#intro',
      'tutorials/walkthroughs/#resource-registration': '/tutorials/walkthroughs/servicetracker/#resource-registration',
      'tutorials/walkthroughs/#resources': '/tutorials/walkthroughs/servicetracker/#resources',
      'tutorials/walkthroughs/#restructure': '/tutorials/walkthroughs/servicetracker/#restructure',
      'tutorials/walkthroughs/#setup': '/tutorials/walkthroughs/servicetracker/#setup',
      'tutorials/walkthroughs/#structure': '/tutorials/walkthroughs/servicetracker/#structure',
      'tutorials/walkthroughs/#user-auth': '/tutorials/walkthroughs/servicetracker/#user-auth',
      'tutorials/walkthroughs/#users': '/tutorials/walkthroughs/servicetracker/#users',
      'userguide/#cutomer-applications': '/userguide/introduction/#cutomer-applications',
      'userguide/#user-portal-page': '/userguide/introduction/#user-portal-page',
      'userguide/#action-authentication': '/userguide/actions/#action-authentication',
      'userguide/#action-email': '/userguide/actions/#action-email',
      'userguide/#action-jira': '/userguide/actions/#action-jira',
      'userguide/#action-oauth': '/userguide/actions/#action-oauth',
      'userguide/#action-office365-calendar': '/userguide/actions/#action-office365-calendar',
      'userguide/#action-office365-contact': '/userguide/actions/#action-office365-contact',
      'userguide/#action-role-assignment': '/userguide/actions/#action-role-assignment',
      'userguide/#action-sql': '/userguide/actions/#action-sql',
      'userguide/#action-sqlconnector': '/userguide/actions/#action-sqlconnector',
      'userguide/#action-webhook': '/userguide/actions/#action-webhook',
      'userguide/#adding-action': '/userguide/actions/#adding-action',
      'userguide/#docker-deploy': '/userguide/docker/#docker-deploy',
      'userguide/#docker-dns': '/userguide/docker/#docker-dns',
      'userguide/#docker-explore': '/userguide/docker/#docker-explore',
      'userguide/#docker-installation': '/userguide/docker/#docker-installation',
      'userguide/#docker-paas': '/userguide/docker/#docker-paas',
      'userguide/#docker-server': '/userguide/docker/#docker-server',
      'userguide/#docker-variables': '/userguide/docker/#docker-variables',
      'userguide/#radio': '/userguide/form-components/#radio',
      'userguide/#add-form-component': '/userguide/form-components/#add-form-component',
      'userguide/#address': '/userguide/form-components/#address',
      'userguide/#button': '/userguide/form-components/#button',
      'userguide/#calculated-value': '/userguide/form-components/#calculated-value',
      'userguide/#checkbox': '/userguide/form-components/#checkbox',
      'userguide/#component-api': '/userguide/form-components/#component-api',
      'userguide/#component-layout-settings': '/userguide/form-components/#component-layout-settings',
      'userguide/#conditional-components': '/userguide/form-components/#conditional-components',
      'userguide/#content-component': '/userguide/form-components/#content-component',
      'userguide/#currency': '/userguide/form-components/#currency',
      'userguide/#custom': '/userguide/form-components/#custom',
      'userguide/#datetime': '/userguide/form-components/#datetime',
      'userguide/#edit-form-component': '/userguide/form-components/#edit-form-component',
      'userguide/#email': '/userguide/form-components/#email',
      'userguide/#file': '/userguide/form-components/#file',
      'userguide/#hidden': '/userguide/form-components/#hidden',
      'userguide/#html-element-component': '/userguide/form-components/#html-element-component',
      'userguide/#image': '/userguide/form-components/#image',
      'userguide/#number': '/userguide/form-components/#number',
      'userguide/#password': '/userguide/form-components/#password',
      'userguide/#phonenumber': '/userguide/form-components/#phonenumber',
      'userguide/#resource': '/userguide/form-components/#resource',
      'userguide/#select': '/userguide/form-components/#select',
      'userguide/#selectboxes': '/userguide/form-components/#selectboxes',
      'userguide/#signature': '/userguide/form-components/#signature',
      'userguide/#textarea': '/userguide/form-components/#textarea',
      'userguide/#textfield': '/userguide/form-components/#textfield',
      'userguide/#copy-form': '/userguide/forms/#copy-form',
      'userguide/#delete-form': '/userguide/forms/#delete-form',
      'userguide/#edit-form': '/userguide/forms/#edit-form',
      'userguide/#new-form': '/userguide/forms/#new-form',
      'userguide/#assigning-group-access': '/userguide/groups/#assigning-group-access',
      'userguide/#making-groupusers': '/userguide/groups/#making-groupusers',
      'userguide/#making-publicusers': '/userguide/groups/#making-publicusers',
      'userguide/#group-structure': '/userguide/groups/#group-structure',
      'userguide/#columns': '/userguide/layout-components/#columns',
      'userguide/#container': '/userguide/layout-components/#container',
      'userguide/#data-grid': '/userguide/layout-components/#data-grid',
      'userguide/#fieldset': '/userguide/layout-components/#fieldset',
      'userguide/#panels': '/userguide/layout-components/#panels',
      'userguide/#table': '/userguide/layout-components/#table',
      'userguide/#well': '/userguide/layout-components/#well',
      'userguide/#new-project': '/userguide/projects/#new-project',
      'userguide/#project-dashboard': '/userguide/projects/#project-dashboard',
      'userguide/#settings-project': '/userguide/projects/#settings-project',
      'userguide/#permissions': '/userguide/roles-and-permissions/#permissions',
      'userguide/#role-assignment': '/userguide/roles-and-permissions/#role-assignment',
      'userguide/#roles': '/userguide/roles-and-permissions/#roles',
      'userguide/#submissionpermissions': '/userguide/roles-and-permissions/#submissionpermissions',
      'userguide/#exporting-submissions': '/userguide/submissions/#exporting-submissions',
      'userguide/#view-submissions': '/userguide/submissions/#view-submissions',
      'userguide/#adding-accounts-team': '/userguide/teams/#adding-accounts-team',
      'userguide/#assigning-teams-project': '/userguide/teams/#assigning-teams-project',
      'userguide/#create-team': '/userguide/teams/#create-team',
      'userguide/#template-previews': '/userguide/project-templates/#template-previews'
    };
    path += '/' + location.hash;
    if (redirects[path]) {
      window.location = redirects[path];
    }
  </script>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
  <title>{{ site.title }} | {{ page.title | strip_html }}</title>

  <link rel="stylesheet" href="{{ site.baseUrl }}/assets/css/index.css">
  <link rel="stylesheet" href="{{ site.baseUrl }}/assets/lib/font-awesome/css/font-awesome.min.css">
  <!-- bower:css -->
  <link rel="stylesheet" href="{{ site.baseUrl }}/assets/lib/angular-ui-select/dist/select.css" />
  <link rel="stylesheet" href="{{ site.baseUrl }}/assets/lib/formio/css/formio.css" />
  <!-- endbower -->

  <!-- Favicons -->
  <link rel="apple-touch-icon" sizes="57x57" href="{{ site.baseUrl }}/assets/favicons/apple-touch-icon-57x57.png">
  <link rel="apple-touch-icon" sizes="60x60" href="{{ site.baseUrl }}/assets/favicons/apple-touch-icon-60x60.png">
  <link rel="apple-touch-icon" sizes="72x72" href="{{ site.baseUrl }}/assets/favicons/apple-touch-icon-72x72.png">
  <link rel="apple-touch-icon" sizes="76x76" href="{{ site.baseUrl }}/assets/favicons/apple-touch-icon-76x76.png">
  <link rel="apple-touch-icon" sizes="114x114" href="{{ site.baseUrl }}/assets/favicons/apple-touch-icon-114x114.png">
  <link rel="apple-touch-icon" sizes="120x120" href="{{ site.baseUrl }}/assets/favicons/apple-touch-icon-120x120.png">
  <link rel="apple-touch-icon" sizes="144x144" href="{{ site.baseUrl }}/assets/favicons/apple-touch-icon-144x144.png">
  <link rel="apple-touch-icon" sizes="152x152" href="{{ site.baseUrl }}/assets/favicons/apple-touch-icon-152x152.png">
  <link rel="apple-touch-icon" sizes="180x180" href="{{ site.baseUrl }}/assets/favicons/apple-touch-icon-180x180.png">
  <link rel="icon" type="image/png" href="{{ site.baseUrl }}/assets/favicons/favicon-32x32.png" sizes="32x32">
  <link rel="icon" type="image/png" href="{{ site.baseUrl }}/assets/favicons/android-chrome-192x192.png" sizes="192x192">
  <link rel="icon" type="image/png" href="{{ site.baseUrl }}/assets/favicons/favicon-96x96.png" sizes="96x96">
  <link rel="icon" type="image/png" href="{{ site.baseUrl }}/assets/favicons/favicon-16x16.png" sizes="16x16">
  <link rel="manifest" href="{{ site.baseUrl }}/assets/favicons/manifest.json">
  <meta name="msapplication-TileColor" content="#da532c">
  <meta name="msapplication-TileImage" content="{{ site.baseUrl }}/assets/favicons/mstile-144x144.png">
  <meta name="theme-color" content="#ffffff">

  <!-- bower:js -->
  <script src="{{ site.baseUrl }}/assets/lib/jquery/dist/jquery.js"></script>
  <script src="{{ site.baseUrl }}/assets/lib/anchor-js/anchor.js"></script>
  <script src="{{ site.baseUrl }}/assets/lib/angular/angular.js"></script>
  <script src="{{ site.baseUrl }}/assets/lib/bootstrap/dist/js/bootstrap.js"></script>
  <script src="{{ site.baseUrl }}/assets/lib/ng-file-upload/dist/ng-file-upload.js"></script>
  <script src="{{ site.baseUrl }}/assets/lib/angular-sanitize/angular-sanitize.js"></script>
  <script src="{{ site.baseUrl }}/assets/lib/angular-bootstrap/ui-bootstrap-tpls.js"></script>
  <script src="{{ site.baseUrl }}/assets/lib/moment/moment.js"></script>
  <script src="{{ site.baseUrl }}/assets/lib/angular-moment/angular-moment.js"></script>
  <script src="{{ site.baseUrl }}/assets/lib/angular-ui-select/dist/select.js"></script>
  <script src="{{ site.baseUrl }}/assets/lib/bootstrap-ui-datetime-picker/dist/datetime-picker.min.js"></script>
  <script src="{{ site.baseUrl }}/assets/lib/signature_pad/signature_pad.js"></script>
  <script src="{{ site.baseUrl }}/assets/lib/angular-ui-mask/dist/mask.js"></script>
  <script src="{{ site.baseUrl }}/assets/lib/formio/dist/formio.js"></script>
  <script src="{{ site.baseUrl }}/assets/lib/urijs/src/URI.js"></script>
  <!-- endbower -->
</head>

<body{% if page.app %} ng-app='{{ page.app }}'{% endif %}{% if page.controller %} ng-controller='{{ page.controller }}'{% endif %}>
{{ content }}

<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
<!--[if lt IE 9]>
<script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
<![endif]-->

<script src="{{ site.baseUrl }}/assets/js/docs.js"></script>
{% include analytics.html %}
{% if page.nofooter == nil %}
    {% include footer.html %}
{% endif %}
</body>
</html>
