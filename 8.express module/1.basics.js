// 1. ��� ����
var express = require('express');

// 2.1 ���� ����
var app = express();

// 2.2 request �̺�Ʈ ������ ���
app.use(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end('<h1>Hello express</h1>');
});

// 3. ���� ����
app.listen(8080, function () {
    console.log('server is running');
})
