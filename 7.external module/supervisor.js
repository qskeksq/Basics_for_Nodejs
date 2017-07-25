var http = require('http');

http.createServer((request, response)=>{
    response.writeHead(200, {'Content-Type':'text/html'});
    response.end('<h1>file2</h1>');
}).listen(8080, ()=>{console.log('server is running')} );