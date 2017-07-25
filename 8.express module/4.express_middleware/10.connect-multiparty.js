// 1. 모듈 추출
var express = require('express');
var fs = require('fs');
var multiPart = require('connect-multiparty');

// 2. 서버 생성
var app = express();

// 3. 미들웨어 등록
app.use(multiPart({uploadDir:'D:\androidSchool\server\Node.js\모던 웹을 위한 node\8.express module\4.express_middleware\10.multipart'}))

// 4. 라우팅 설정 = 페이지 설정
app.get('/', (request, response)=>{
    fs.readFile('HTMLPage.html', (err, data)=>{
        response.send(data.toString()); // 여기서 toString() 괄호 안 해주면 화면에 아무것도 뜨지 않는다. 참고로 toString() 안 해줘도 그냥 됨
    })
});

// 같은 페이지에서 submit 을 누르면 서버에 post 방식으로 요청이 생긴다
app.post('/', (request, response)=>{/** */});

// 5.서버 등록
app.listen(8080, ()=>{console.log('server is running...')});