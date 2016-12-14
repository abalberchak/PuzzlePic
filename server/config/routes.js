var users = require('./../controllers/users.js');

module.exports = function(app) {

  app.get('/', function(req, res) {
    users.index(req, res);
  });

  app.get('/show', function(req, res) {
      users.show(req, res);
  });

  app.post('/users', function(req, res) {
    users.create(req, res);
  });

  app.post('/:id/destroy', function(req, res){
    users.destroy(req, res);
  })

}
