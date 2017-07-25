var http = require('http');

var server = http.createServer(function (request, response) {

    response.writeHead(302, { 'Location': 'http://www.naver.com' });
    response.end();
});

server.listen(8080, function () {
    console.log('server is running');
})