
/**
 * Module dependencies.
 */

var express = require('express');
var path = require('path');
var http = require('http');

var app = express();
var index = require('./routes/index.js');
var stageone = require('./routes/stageone.js');
var stagetwo = require('./routes/stagetwo.js');
//var stagethree = require('./routes/stagethree.js');
var stagefour = require('./routes/stagefour.js');

// all environments
app.configure(function(){
	app.use(express.bodyParser());
	app.set('port', process.env.PORT || 3000);
	app.set('view engine', 'jade');
	app.set('views', __dirname + '/views');
	app.use(express.static(path.join(__dirname, 'public')));
	
});


app.get('/index', index.index);

app.get('/oneonepointone', stageone.oneonepointone);
app.get('/oneonepointtwo', stageone.oneonepointtwo);
app.get('/oneonepointthree', stageone.oneonepointthree);
app.get('/oneone', stageone.oneone);


app.get('/twoonepointone', stagetwo.twoonepointone);
app.get('/twoonepointtwo', stagetwo.twoonepointtwo);
app.get('/twoonepointthree', stagetwo.twoonepointthree);
app.get('/twoonepointfour', stagetwo.twoonepointfour);
app.get('/twoone', stagetwo.twoone);

app.get('/twotwo', stagetwo.twotwo);

app.get('/twothreepointone', stagetwo.twothreepointone);
app.get('/twothreepointtwo', stagetwo.twothreepointtwo);
app.get('/twothreepointthree', stagetwo.twothreepointthree);
app.get('/twothree', stagetwo.twothree);


app.get('/fourtwo', stagefour.fourtwo);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});