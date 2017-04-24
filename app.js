// require the dependencies we installed
var express = require('express');
var responseTime = require('response-time')
var axios = require('axios');
var redis = require('redis');
var bodyParser = require('body-parser');
var mysql      = require('mysql');
var cors=require('cors');
var cookieParser = require('cookie-parser');

// var apisearch = require ('./routes/search');

// debug configs

const debug = require('debug')('services-arround-me')
const name = 'Searching'
debug('booting %s', name)



// Express
var app = express();

/**
 * bodyParser
 */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/** CORS */
app.use(cors());
app.use(cookieParser());

// create a new redis client and connect to our local redis instance
var client = redis.createClient();

// if an error occurs, print it to the console
client.on('error', function (err) {
    console.log("[console-log]: Error " + err);
});

app.set('port', (process.env.PORT || 3000));

// set up the response-time middleware
app.use(responseTime());
var options = {
  dotfiles: 'ignore',
  etag: false,
  extensions: ['htm', 'html'],
  index: false,
  maxAge: '1d',
  redirect: false,
  setHeaders: function (res, path, stat) {
    res.set('x-timestamp', Date.now())
    res.set('Content-Type', 'application/json')
    res.set('Accept', 'application/json')
    res.set('dataType', 'json')

  }
}

app.use(express.static('public', options));

// middleware for all routes

/**
 * path: /sv1/category
 * route: routes/category
 * category storage
 */
app.use('/sv1/category', require('./routes/category'));
// app.get('/api/search', apisearch.searchplace);
// app.get('/api/test', apisearch.test);


app.listen(app.get('port'), function(){
  console.log('[console-log]: Server listening on port ', app.get('port'));
});
