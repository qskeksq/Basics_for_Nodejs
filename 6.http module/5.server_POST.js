var http = require('http');
var url = require('url');
var fs = require('fs');

var server = http.createServer(function (request, response) {

    // GET 방식으로 요청하면 HTML 페이지를 보여준다
    if (request.method == 'GET') {
        fs.readFile('HTML_POST.html', function (error, data) {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.end(data);
        });

    // HTML 페이지에서 submit 을 누르면 post 방식으로 동일한서버(localhost:8080)에 요청이 날아간다
    } else if (request.method == 'POST') {
        request.on('data', function (data) {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.end('<h1>' + JSON.stringify(data) + '</h1>');
        });
    };

});

server.listen(8080, function () {
    console.log('server is running');
})