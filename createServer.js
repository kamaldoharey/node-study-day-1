var http = require('http')
http.createServer(function (req, res) {
     res.writeHead(200, { 'contant': 'text/html' });
     res.write("hello world");
     res.end()
}).listen(8080);