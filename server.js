var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
var path = require('path');
app.use(express.static(path.join(__dirname, './static')));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// var mongoose = require('mongoose');
// var connection = mongoose.connect('mongodb://localhost/dashboard_db');

// var Schema = mongoose.Schema;
// var DuckSchema = new mongoose.Schema({
//  name: String,
//  age: Number
// });
// var Duck = mongoose.model('Duck', DuckSchema);


app.get('/', function(req, res) {
  Duck.find({}, function(err, duck) {
    if (err) { console.log(err); }
    res.render('index', { ducks:duck });
  });
});
app.get('/new', function(req, res) {
  res.render('new');
})
app.post('/ducks', function(req, res) {
  mongoose.Promise = global.Promise;

  console.log('Body:',req.body)
  var ducks = new Duck({name: req.body.name, age: req.body.age});

  ducks.save(function(err){
    if(err) {console.log('something went wrong');
    } else {
      console.log('successfully added a duck!');
      res.redirect('/');
    }
  })
});




app.listen(8000, function() {
  console.log("listening on port 8000");
});
