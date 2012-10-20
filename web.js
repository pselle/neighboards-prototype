var express = require('express');

var pub = __dirname + '/public';

var app = express();
app.use(app.router);
app.use(express.static(pub));
app.use(express.errorHandler());

app.set('view engine', 'jade');

app.get('/', function(req, res) {
      res.render('index.jade', { title: 'The index page!' })
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
      console.log("Listening on " + port);
});
