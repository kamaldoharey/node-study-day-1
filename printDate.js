// var http = require('http');

// http.createServer(function (req, res) {
//      res.writeHead(200, { 'Content-Type': 'text/html' });
//      res.end('Hello World!');
// }).listen(8080);

// http.createServer(function (req, res) {
//      res.writeHead(404, { 'Content-Type': 'text/html' });
//      res.end()
// })


var http = require('http');
var dt = require('./myfirstmodule');

http.createServer(function (req, res) {
     res.writeHead(200, { 'Content-Type': 'text/html' });
     res.write("The date and time is currently: " + dt.myDateTime());
     res.end();
}).listen(8080);
