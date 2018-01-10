var http = require('http');
var port = 3000;

// 1. 서버 생성
var server = http.createServer(()=>{
    console.log('server created');
});

// 2. 서버 등록
server.listen(3000, ()=>{
    console.log('server is running');
});

// 3. 서버 연결
server.on('connection', (socket)=>{
    var addr = socket.address;
    console.log('server connected : ['+addr.address+', '+addr.port+']');
});

// 4. 클라이언트 요청 처리
server.on('request', (request, response)=>{
    console.log('server request on');
    console.dir(request);
    console.dir(response);
    response.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
    response.end();
});

// 5. 서버 종료
server.on('close', ()=>{
    console.log('server closed');
});



