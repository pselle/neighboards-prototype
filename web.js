var express = require('express');

var app = express.createServer(express.logger());

app.engine('.html', require('ejs').__express);

app.set('view engine', 'html');

app.get('/', function(request, response) {
      response.render('index');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
      console.log("Listening on " + port);
});
