
// 1. ��� ����
var http = require('http');

// 2. ���� �����
var server = http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end('<h1>hello world</h1>');
});

// on �̺�Ʈ�� ������ �������� ������ EventEmitter ������� ����� ������ �� �� �ִ�.
server.on('request', function (code) {
    console.log('request on');
});

server.on('connection', function (code) {
    console.log('connection on');
});

server.on('close', function (code) {
    console.log('close on');
});

// 3. ���� ����
server.listen(8080, function () {
    console.log('Server is running');
});

// 4. 10�� �Ŀ� ���� �ݱ�
setTimeout(function () {
    server.close();
}, 10000);
