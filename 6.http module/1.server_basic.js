
// 1. 모듈 추출
var http = require('http');

// 2. 서버 만들기
var server = http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end('<h1>hello world</h1>');
});

// on 이벤트가 가능한 것을보면 서버가 EventEmitter 기반으로 만들어 졌음을 알 수 있다.
server.on('request', function (code) {
    console.log('request on');
});

server.on('connection', function (code) {
    console.log('connection on');
});

server.on('close', function (code) {
    console.log('close on');
});

// 3. 서버 연결
server.listen(8080, function () {
    console.log('Server is running');
});

// 4. 10초 후에 서버 닫기
setTimeout(function () {
    server.close();
}, 10000);
