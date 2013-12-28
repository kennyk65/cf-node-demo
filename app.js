var http = require('http');
// You must get the port from the environment:
var port = parseInt(process.env.PORT,10);
var server = http.createServer(function handler(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
});
// Port is optional:
server.listen(port);
console.log('Server running ');
