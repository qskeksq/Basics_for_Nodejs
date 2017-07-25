// 1. 모듈 추출
var http = require('http');
var fs = require('fs');
var socketio = require('socket.io');

// 2. 서버 생성(웹&소켓 서버)
var server = http.createServer();
var io = socketio.listen(server);

// 2.1 서버에 이벤트 연결
server.on('request', (request, response)=>{
    fs.readFile('HTMLChat.html', (error, data)=>{
        response.writeHead(200, {'Content-Type':'text/html'});
        response.end(data);
    })
})

io.sockets.on('connection', (socket)=>{
    // 방 이름을 저장할 변수
    var roomName = null;

    // join 이벤트 -- 클라이언트를 방에 집어넣는다
    socket.on('join', (data)=>{
        roomName = data;
        socket.join(data)
    })

    // message 이벤트 -- 특정 방(roomName)에 있는 클라이언트 추출 -> 메시지 emit 하기
    socket.on('message', (data)=>{
        io.sockets.in(roomName).emit('message', 'test');
    })

})

// 서버 실행
server.listen(8080, ()=>{console.log('server is running')});