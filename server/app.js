/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);

/**
 * Development Settings
 */

if ('development' == app.get('env')) {
  // This will change in production since we'll be using the dist folder
  // This covers serving up the index page
  console.log('In Development');
  app.use(express.static(path.join(__dirname, '../client/.tmp')));
  app.use(express.static(path.join(__dirname, '../client/app')));
  app.use(express.errorHandler());
}

/**
 * Production Settings
 */
if ('production' == app.get('env')) {
  console.log('In Production');
  app.use(express.static(path.join(__dirname, '/dist')));
}

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
