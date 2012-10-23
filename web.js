var express = require('express');

var pub = __dirname + '/public';

var app = express.createServer(express.logger());
//app.use(express.directory(pub))
//app.use(express.static(pub));
app.use("/public", express.static(__dirname + '/public'));
app.set('view engine', 'jade');

app.get('/', function(req, res) {
      res.render('index.jade', { title: 'Neighboards' })
});

app.get('/logged-in', function(req, res) {
      res.render('logged_in.jade', { title: 'Neighboards' })
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
      console.log("Listening on " + port);
});
