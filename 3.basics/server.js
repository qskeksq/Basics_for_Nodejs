// 1. http ��� ��������
var http = require('http');

// 2. ���� ����� -- �̺�Ʈ ����ȭ
var server = http.createServer(function (request, response) {

    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end('<h1>hello wolrd</h1>');

});

// 3. ����
server.listen(8080, function () {
    console.log('Sever is Running');
});
