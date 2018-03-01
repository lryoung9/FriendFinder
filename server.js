// Dependancies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Create an express server
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// use to display images properly
app.use(express.static('app/public'));

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, 'app/public/home.html'));
});

app.get('/survey', function (req, res) {
  res.sendFile(path.join(__dirname, 'app/public/survey.html'));
});

// initialize port to listen to
var PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
	console.log('App listening on PORT ' + PORT);
});