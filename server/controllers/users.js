var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = {
  index: function(req, res) {
    User.find({}, function(err, user) {
      if (err) {console.long(err);}
      res.render('index', { users:user });
    });
  },
  show: function(req, res) {
    var users = User.findOne({_id: req.params.id }, function(submitted_info) {
      res.render("show", {users: submitted_info});
    })
  },
  create: function(req, res) {
    mongoose.Promise = global.Promise;

    console.log('Body:',req.body)
    var users = new User({username: req.body.username});

    users.save(function(err, submitted_info) {
      if(err) {console.log('something went creating wrong');
      } else {
        console.log('The Game Will Start in 5...');
        res.render('show', { users: submitted_info});
      }
    })
  },
  destroy: function(req, res) {
    var users = User.findOne({_id: req.params.id });

    users.remove({_id: req.params.id}, function(err, submitted_info) {
      if(err) {console.log("something went destroying wrong");
      } else {
        console.log("successfully deleted User");
        res.redirect('show', { users: submitted_info});
      }
    })
  }
}
