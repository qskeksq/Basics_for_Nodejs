var fs = require('fs');
var http = require('http');
var jade = require('jade');

// html ¼­¹ö
var server = http.createServer(function (request, response) {

    fs.readFile('jadePage2.jade', 'utf8', function (error, data) {
        
        var fn = jade.compile(data);
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end(fn({
            name: 'na',
            description:'Hello jade'
        }));
    })

});

server.listen(8080, function () {
    console.log('server is running');
})