// 1. 모듈 추출
var express = require('express');

// 2.1 서버 생성
var app = express();

// 2.2 request 이벤트 리스너 등록
app.use(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end('<h1>Hello express</h1>');
});

// 3. 서버 실행
app.listen(8080, function () {
    console.log('server is running');
})
