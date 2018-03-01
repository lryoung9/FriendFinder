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

// Seed friend list
var friends = [
	{
		routeName: "jddorian",
		name: "J.D. Dorian",
		image: "https://en.wikipedia.org/wiki/J.D._(Scrubs)#/media/File:Jd_season9.jpg",
		scores: ["5", "1", "1", "1", "5", "1", "1", "1", "5", "5"]
	},
	{
		routeName: "dwightschrute",
		name: "Dwight Schrute",
		image: "https://en.wikipedia.org/wiki/Dwight_Schrute#/media/File:Dwight_Schrute.jpg",
		scores: ["1", "5", "5", "1", "1", "5", "5", "5", "1", "1"]
	},
	{
		routeName: "johnbender",
		name: "John Bender",
		image: "http://www.imdb.com/title/tt0088847/mediaviewer/rm956498944?ft0=name&fv0=nm0000555&ft1=image_type&fv1=still_frame",
		scores: ["3", "3", "3", "3", "3", "3", "3", "3", "3", "3"]
	}
]

// Routes
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