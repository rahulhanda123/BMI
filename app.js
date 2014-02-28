
/**
 * Module dependencies.
 */

var express = require('express');
var path = require('path');
var http = require('http');

var app = express();
var index = require('./routes/index.js');
var stageone = require('./routes/stageone.js');
//var stageonepointone= require('./routes/stageonepointone.js');
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
app.post('/index', index.indexAdd);

app.get('/oneone', stageone.oneone);
app.post('/oneone', stageone.oneoneAdd);

	app.get('/oneonepointone', stageone.oneonepointone);
	app.post('/oneonepointone', stageone.oneonepointoneAdd);

	app.get('/oneonepointtwo', stageone.oneonepointtwo);
	app.post('/oneonepointtwo', stageone.oneonepointtwoAdd);

	app.get('/oneonepointthree', stageone.oneonepointthree);
	app.post('/oneonepointthree', stageone.oneonepointthreeAdd);

app.get('/twoone', stagetwo.twoone);
app.post('/twoone', stagetwo.twooneAdd);

app.get('/twotwo', stagetwo.twotwo);
app.post('/twotwo', stagetwo.twotwoAdd);

app.get('/twothree', stagetwo.twothree);
app.post('/twothree', stagetwo.twothreeAdd);

app.get('/fourtwo', stagefour.fourtwo);
app.post('/fourtwo', stagefour.fourtwoAdd);


app.get('/wow', function(req, res){
	res.render("wow.jade",{title: "Building webapps with nodejs"});
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
