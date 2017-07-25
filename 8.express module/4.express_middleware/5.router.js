// router - 사용자 요청에 따라 적합한 페이지를 제공하는 것

// 1. 모듈 추츨
var express = require('express');

// 2. 서버 생성
var app = express();

// 2.1 라우팅 기능 설정
app.get('/a', (request, response)=>{
    response.status(200).send('<a href="/b">Go to B</a>')   // href="/b" 가 /b 페이지로 이동하라는 뜻
})

app.get('/b', (request, response)=>{
    response.status(200).send('<a href="/a">Go to A</a>')   // href="/a" 가 /a 페이지로 이동하라는 뜻
})

// 2.2 토큰 기능 설정
app.get('/page/:id', (request, response)=>{
    var id = request.params.id;
    response.send('<h1>'+id+'</h1>')
})

// 2.3 전체 선택자 기능
app.all('*', (request, response)=>{
    response.status(404).send('<h1>Page Not Found</h1>')
})

// 3. 서버 실행
app.listen(8080, ()=>{console.log('server is running')})