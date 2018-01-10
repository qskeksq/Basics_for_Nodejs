var http = require('http');
var port = 3000;

- 서버 생성
    ```javaScript
    var server = http.createServer(()=>{
        console.log('server created');
    });
    ```

- 서버 등록
    ```javaScript
    server.listen(3000, ()=>{
        console.log('server is running');
    });
    ```

- 서버 연결
    ```javaScript
    server.on('connection', (socket)=>{
        var addr = socket.address;
        console.log('server connected : ['+addr.address+', '+addr.port+']');
    });
    ```

- 클라이언트 요청 처리
    ```javaScript
    server.on('request', (request, response)=>{
        console.log('server request on');
        console.dir(request);
        console.dir(response);
        response.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
        response.end();
    });
    ```

- 서버 종료
    ```javaScript
    server.on('close', ()=>{
        console.log('server closed');
    });
    ```



