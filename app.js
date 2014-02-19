
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');

var app = express();

// all environments
app.configure(function(){
	app.use(express.bodyParser());
	app.set('port', process.env.PORT || 3000);
	app.set('view engine', 'jade');
	app.set('views', __dirname + '/views');
	//app.use(express.static(path.join(__dirname, 'public')));
	
});


app.get('/', function(req, res){
	res.send("Welcome Successful");
});

app.get('/oneone', function(req, res){
	res.render("oneone.jade");
});

app.get('/twoone', function(req, res){
	res.render("twoone.jade");
});

app.get('/twotwo', function(req, res){
	res.render("twotwo.jade");
});

app.get('/twothree', function(req, res){
	res.render("twothree.jade");
});

app.get('/wow', function(req, res){
	res.render("wow.jade",{title: "Building webapps with nodejs"});
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
