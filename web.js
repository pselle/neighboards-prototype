var express = require('express');

var pub = __dirname + '/public';

var app = express();
app.use("/public", express.static(__dirname + '/public'));
app.set('view engine', 'jade');

app.get('/', function(req, res) {
  res.render('index.jade', { title: 'Neighboards', loggedin: globallogin })
});

app.post('/login', function(req, res) {
  var post = req.body;
  if (true) {
    globallogin = true;
    res.redirect('/');
  } else {
    res.send('Bad user/pass');
  }
});

app.get('/logout', function (req, res) {
  globallogin = false;
  res.redirect('/');
});

app.get('/add-flyer', function(req, res) {
  res.render('add.jade', { title: 'Neighboards' })
});

app.get('/success', function(req, res) {
  res.render('thanks.jade', { title: 'Neighboards' })
});

app.get('/preferences', function(req, res) {
      res.render('preferences.jade', { title: 'Neighboards' })
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
      console.log("Listening on " + port);
});

var globallogin = false