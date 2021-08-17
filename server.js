// server.js
// where your node app starts

// init project
require('dotenv').config();
const api=require('./api.js');
var express = require('express');
var app = express();
const rateLimit = require('express-rate-limit');


const limiter = rateLimit({
  max: 10,
  windowMs: 1 * 10 * 1000,
  message: 'too many requests sent by this ip, please try again in an few moments !'
});


// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

app.use('/api/',limiter);  // eg: app.use('/api', limiter);

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});


app.get("/api/whoami", function (req, res) {
  res.json(api.header_parser(req));
});


// listen for requests :)
var listener = app.listen(process.env.PORT||3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
