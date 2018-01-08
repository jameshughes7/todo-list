var express = require('express');
var app = express();
var port = 3000;

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('homepage');
});

app.listen(port, function() {
  console.log('Listening on port ' + port);
});
