var mongoose = require('mongoose');
var User = mongoose.model('User');

function UsersController() {

  this.create = function(req, res) {
    User.create(req.body, function(err, user) {
      if(err) {
        console.log("Something went wrong with creating a User");
      } else {
        res.json(user);
      }
    })
  }

  this.update = function(req, res) {
    User.findOne({_id: req.params.id}, function(err, user) {
      if(err) {
        console.log("Something went wrong with finding User for update")
      } else {
        user.username = req.body.username;
        friend.save(function(err, updatedUser) {
          if(err) {
            console.log("Something went wrong with saving the User's new update")
          } else {
            res.json(updatedUser);
          }
        })
      }
    })
  }
};
