var express = require('express');

var app = express.createServer(express.logger());
var pub = __dirname + '/public';
app.set('view engine', 'jade');

app.get('/', function(req, res) {
      res.render('index.jade', { title: 'The index page!' })
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
      console.log("Listening on " + port);
});
