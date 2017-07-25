// 1.모듈 가져오기
var http = require('http');
var url = require('url');
var fs = require('fs');

// 2.서버 생성
var server = http.createServer(function (request, response) {

    var pathname = url.parse(request.url).pathname;
    console.log(pathname);

    if (pathname == '/page1') {
        fs.readFile('page1.html', function (error, data) {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.end(data);
        });
    } else if (pathname == '/page2') {
        fs.readFile('page2.html', function (error, data) {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.end(data);
        });
    } else if (pathname == '/page3'){
                        // 페이지 강제이동할 때는 300 번대를 사용해야 하는군
        response.writeHead(302, {'Location': 'http://www.naver.com'});
        response.end('네이버');
    }


});

// 3.서버 연결
server.listen(8080, function () {
    console.log('server is running');
})