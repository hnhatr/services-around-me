// require the dependencies we installed
var express = require('express');
var responseTime = require('response-time')
var axios = require('axios');
var redis = require('redis');
var bodyParser = require('body-parser');


// Express
var app = express();

/**
 * bodyParser
 */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// create a new redis client and connect to our local redis instance
var client = redis.createClient();

// if an error occurs, print it to the console
client.on('error', function (err) {
    console.log("Error " + err);
});

app.set('port', (process.env.PORT || 3000));

// set up the response-time middleware
app.use(responseTime());

// if a user visits /api/facebook, return the total number of stars 'facebook'
// has across all it's public repositories on GitHub
app.get('/api/:username', function(req, res) {
  res.send ("abc");
});

app.listen(app.get('port'), function(){
  console.log('Server listening on port: ', app.get('port'));
});
