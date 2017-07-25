// 1. ��� ����
var fs = require('fs');
var http = require('http');

// 2.1 http �������ִ� ���� ����
var server = http.createServer(function (request, response) {

    // ������ request �̺�Ʈ�� �߻��� ��� ���� �ý���(fs)�� �̿��ؼ� ������ �ִ� ������ �о ������(Ŭ���̾�Ʈ)���� ����������
    fs.readFile('HTMLPage.html', function (error, data) {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end(data);
    });

});

// 2.2 ������ �������ִ� ���� ����
var server = http.createServer(function (request, response) {
    fs.readFile('Lighthouse.jpg', function (error, data) {
                                    // Mime Ÿ�Կ� �̹��� �Է�
        response.writeHead(200, { 'Content-Type': 'image/jpeg' });
        response.end(data);
    });

});

// 2.3 ������ �������ִ� ���� ����
var server = http.createServer(function (request, response) {
    fs.readFile('Kalimba.mp3', function (error, data) {
                                    // Mime Ÿ�Կ� ����� �Է�
        response.writeHead(200, { 'Content-Type': 'audio/mp3' });
        response.end(data);
    });

});

// 3.1 ���� ��� - ������� html, ����, ����
server.listen(8080, function () {
    console.log('server is running');
})

// 3.2
server.listen(8090, function () {
    console.log('server is running');
})

// 3.3
server.listen(8100, function () {
    console.log('server is running');
})