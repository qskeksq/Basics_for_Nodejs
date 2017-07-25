var http = require('http');
var url = require('url');
var fs = require('fs');

var server = http.createServer(function (request, response) {

    // GET ������� ��û�ϸ� HTML �������� �����ش�
    if (request.method == 'GET') {
        fs.readFile('HTML_POST.html', function (error, data) {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.end(data);
        });

    // HTML ���������� submit �� ������ post ������� �����Ѽ���(localhost:8080)�� ��û�� ���ư���
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