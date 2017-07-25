var fs = require('fs');
var http = require('http');

// html 서버
var server = http.createServer( (request, response) => {
    fs.readFile('HTMLPage.html', function (error, data) {
        // response 객체에 Set-Cookie 를 통해 쿠키를 등록할 수 있다. 즉, 서버에서 응답할 때 클라이언트에게 쿠키를 할당해 주는 것이다
        response.writeHead(200, {'Content-Type': 'text/html', 'Set-Cookie': ['breakfast = toast', 'dinner = chicken'] });
        response.end('<h1>'+request.headers.cookie+'</h1>');
    });
});

server.listen(8080, () => {
    console.log('server is running');
})
