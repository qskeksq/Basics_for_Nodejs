var fs = require('fs');
var http = require('http');
var ejs = require('ejs');

// html ����
var server = http.createServer(function (request, response) {

 
    fs.readFile('ejsPage.ejs', 'utf8', function (error, data) { // utf8 �������� ���� �� ��.
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end(ejs.render(data, { name:'na',description:'Hello ejs' }));
    });

});

server.listen(8080, function () {
    console.log('server is running');
})