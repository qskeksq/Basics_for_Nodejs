var fs = require('fs');
var http = require('http');

// html ����
var server = http.createServer( (request, response) => {
    fs.readFile('HTMLPage.html', function (error, data) {
        // response ��ü�� Set-Cookie �� ���� ��Ű�� ����� �� �ִ�. ��, �������� ������ �� Ŭ���̾�Ʈ���� ��Ű�� �Ҵ��� �ִ� ���̴�
        response.writeHead(200, {'Content-Type': 'text/html', 'Set-Cookie': ['breakfast = toast', 'dinner = chicken'] });
        response.end('<h1>'+request.headers.cookie+'</h1>');
    });
});

server.listen(8080, () => {
    console.log('server is running');
})
