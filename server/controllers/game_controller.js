var app = angular.module('app');

app.controller('gameController',

  [
    '$scope',
    function($scope) {
      var self = this;

      self.newUser = {};

      self.create = function() {
        console.log('User being created');

        if (!self.newUser.username) {
          console.log("Something went wrong with the username from the backend")
          return;
        } else {
          console.log(self.newUser);
          console.log("successful creating User from backend");
        }
      }
    }
  ]
)
