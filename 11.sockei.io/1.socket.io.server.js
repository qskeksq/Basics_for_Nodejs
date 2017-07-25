// 1. 모듈 추출
var http = require('http');
var fs = require('fs');
var socketio = require('socket.io');

// 2. 서버 생성
var server = http.createServer((request, response)=>{
    fs.readFile('HTMLPage.html', (error, data)=>{
        response.writeHead(200, {'Content-Type':'text/html'});
        response.end(data);
    })
})

// 3. 서버 실행
server.listen(8080, ()=>{console.log('server is running')});

// 4. 소켓 서버 생성 및 실행
var io = socketio.listen(server);
io.sockets.on('connection', (socket)=>{
    // 사용자 정의 이벤트 등록
    socket.on('rint', (data)=>{
        console.log('client send data:', data);

        // public 통신
        socket.emit('smart', data);

        // broadcast 통신
        socket.broadcast.emit('smart', data);

        // private 통신
        id = socket.id;
        socket.on('rint', (data)=>{
            io.sockets.to(id).emit('smart',data);
        })

    });

})