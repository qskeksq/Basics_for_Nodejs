// 1. 모듈 추출
var fs = require('fs');
var http = require('http');

// 2.1 http 제공해주는 서버 생성
var server = http.createServer(function (request, response) {

    // 서버에 request 이벤트가 발생할 경우 파일 시스템(fs)을 이용해서 서버에 있는 파일을 읽어서 브라우저(클라이언트)에게 응답해주자
    fs.readFile('HTMLPage.html', function (error, data) {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end(data);
    });

});

// 2.2 사진을 제공해주는 서버 생성
var server = http.createServer(function (request, response) {
    fs.readFile('Lighthouse.jpg', function (error, data) {
                                    // Mime 타입에 이미지 입력
        response.writeHead(200, { 'Content-Type': 'image/jpeg' });
        response.end(data);
    });

});

// 2.3 음악을 제공해주는 서버 생성
var server = http.createServer(function (request, response) {
    fs.readFile('Kalimba.mp3', function (error, data) {
                                    // Mime 타입에 오디오 입력
        response.writeHead(200, { 'Content-Type': 'audio/mp3' });
        response.end(data);
    });

});

// 3.1 서버 등록 - 순서대로 html, 사진, 음악
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