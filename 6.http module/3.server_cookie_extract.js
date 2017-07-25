var http = require('http');

// html 서버
var server = http.createServer(function (request, response) {

    if (request.headers.cookie) {
        // "name=Rint; region=seoul" 쿠키가이렇게 되어있는 것을 알면 왜 이런 코딩이 나오는지 알 수 있다.
        var cookie = request.headers.cookie.split(';').map(function (element) {
            var element = element.split('=');
            return {key:element[0], value:element[1]};
        });
        response.end('<h1>'+ JSON.stringify(cookie) +'</h1>')
    } else {
        response.writeHead(200, {'Content-Type':'text/html', 'Set-Cookie':['name=na','region=seoul']});
        response.end('<h1>쿠키를 생성했습니다</h1>');
    }
});

server.listen(8080, function () {
    console.log('server is running');
})
