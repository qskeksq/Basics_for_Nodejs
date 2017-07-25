var http = require('http');

// html ����
var server = http.createServer(function (request, response) {

    if (request.headers.cookie) {
        // "name=Rint; region=seoul" ��Ű���̷��� �Ǿ��ִ� ���� �˸� �� �̷� �ڵ��� �������� �� �� �ִ�.
        var cookie = request.headers.cookie.split(';').map(function (element) {
            var element = element.split('=');
            return {key:element[0], value:element[1]};
        });
        response.end('<h1>'+ JSON.stringify(cookie) +'</h1>')
    } else {
        response.writeHead(200, {'Content-Type':'text/html', 'Set-Cookie':['name=na','region=seoul']});
        response.end('<h1>��Ű�� �����߽��ϴ�</h1>');
    }
});

server.listen(8080, function () {
    console.log('server is running');
})
