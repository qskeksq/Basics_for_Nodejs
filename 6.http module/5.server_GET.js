var http = require('http');
var url = require('url');

var server = http.createServer(function (request, response) {

    var query = url.parse(request.url, true).query;

    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end('<h1>' + JSON.stringify(query) + '</h1>');

});

server.listen(8080, function () {
    console.log('server is running');
})