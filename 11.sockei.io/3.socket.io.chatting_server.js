var http = require('http');
var fs = require('fs');
var socketio = require('socket.io');

var server = http.createServer((request, response)=>{
    fs.readFile('HTMLChatClient.html', (error, data)=>{
        response.writeHead(200, {'Content-Type':'text/html'});
        response.end(data);
    })
}).listen(8080, ()=>{console.log('server is running')});

var io = socketio.listen(server);
io.sockets.on('connection', (socket)=>{
    console.log('socket connection event is on')
    // message 이벤트가 발생하면 전달받은 데이터를 현재 접속해 있는 모든 소켓에게 전달
    // 사용자 지정 이벤트 message 만들기
    socket.on('message', (data)=>{
        console.log('socket message event is on')
        // 소켓에 message 이벤트가 발생하면 io 의 모든 sockets 에게 message 이벤트를 data 와 함께 emit 해준다.
        io.sockets.emit('message', data);
    })
})




