var path = require('path');
var express = require('express');
var https = require('https');
var fs = require('fs');
var webpack = require('webpack');
var config = require('./webpack.config.dev');

var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

https.createServer({ key: fs.readFileSync( '/Config/Certificates/key.pem' ), 
  cert:fs.readFileSync( '/Config/Certificates/cert.pem' ) }, app).listen(1444, 'bfitmacmini01.mta.tv', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at https://coingae.mta.tv');
});