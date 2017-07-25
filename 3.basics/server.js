// 1. http 모듈 가져오기
var http = require('http');

// 2. 서버 만들기 -- 이벤트 동기화
var server = http.createServer(function (request, response) {

    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end('<h1>hello wolrd</h1>');

});

// 3. 연결
server.listen(8080, function () {
    console.log('Sever is Running');
});
