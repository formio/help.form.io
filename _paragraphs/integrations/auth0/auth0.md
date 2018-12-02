---
title: Adding Rules to Auth0
book: integrations
chapter: auth0
slug: auth0-rules
weight: 10
---
After you create your Auth0 account, you will first want to create a new Rule within your account.

  - Click on the section called **Rules**
  - Click on the button that says **Create Rule**
  - Select **Empty Rule**
  - Give your rule a title such as **Formio Integration**
  - Within the contents, copy and paste the following.

    ```javascript
    function (user, context, callback) {
    
      // Your Form.io Project API
      var FORMIO_PROJECT_API = 'https://yourproject.form.io';
    
      // Secret password used for all Form.io accounts (KEEP THIS SECRET!)
      var FORMIO_DEFAULT_PASS = 'user-default-password-secret';
    
      // skip if no email
      if(!user.email) return callback(null, user, context);
    
      /**
       * Check to see if a user exists.
       *
       * @param email
       * @param next
       */
      var userExists = function(email, next) {
        request({
          uri: FORMIO_PROJECT_API + '/user/exists',
          method: 'GET',
          qs: {
            'data.email': email
          }
        }, function(error, response) {
          var status = parseInt(response.statusCode, 10);
          if (status === 200) {
            return next(null, true);
          }
          else if (status === 404) {
            return next(null, false);
          }
          return next(error);
        });
      };
    
      /**
       * Register a new user provided the default password and user info.
       *
       * @param userInfo
       * @param next
       */
      var registerUser = function(userInfo, next) {
        userInfo.password = FORMIO_DEFAULT_PASS;
        request({
          uri: FORMIO_PROJECT_API + '/user/register',
          method: 'POST',
          json: {
            data: userInfo
          }
        }, function(error, response) {
          if (error) {
            return next(error);
          }
          next(null, response.headers['x-jwt-token']);
        });
      };
    
      /**
       * Log in the user using the email and default password.
       *
       * @param email
       * @param next
       */
      var loginUser = function(email, next) {
        request({
          uri: FORMIO_PROJECT_API + '/user/login',
          method: 'POST',
          json: {
            data: {
              email: email,
              password: FORMIO_DEFAULT_PASS
            }
          }
        }, function(error, response, data) {
          if (error) {
            return next(error);
          }
          next(null, response.headers['x-jwt-token']);
        });
      };
    
      /**
       * Retrieve a user token. This accomplishes this task using a few steps.
       *   1.) Check to see if the user exists within Form.io
       *   2.) If yes, then we will simply log the user in with the default password.
       *   3.) If no, then we will register them into the system which also logs them in.
       *
       * @param userInfo - The user information passed to us from Auth0.
       * @param next
       */
      var getUserToken = function(userInfo, next) {
        userExists(userInfo.email, function(err, exists) {
          if (err) {
            return next(err);
          }
          if (exists) {
            loginUser(userInfo.email, next);
          }
          else {
            registerUser(userInfo, next);
          }
        });
      };
    
      // Get the user token.
      getUserToken(user, function(err, jwtToken) {
        // Let the user know if an error occured.
        if (err) {
          return callback(err);
        }
    
        // Add the Form.io JWT token to the user metadata and return.
        user.user_metadata = user.user_metadata || {};
        user.user_metadata.formio = {token: jwtToken};
        auth0.users.updateUserMetadata(user.user_id, user.user_metadata);
        return callback(null, user, context);
      });
    }
    ```
