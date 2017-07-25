// 1. 모듈 추출
var express = require('express');
var cookieParser = require('cookie-parser');

// 2. 서버 생성
var app = express();

// 3.1 cookie-parser 미들웨어 설정
app.use(cookieParser());

// 3.2 라우터 설정
// 쿠키 가져오기
app.get('/getCookie', (request, response)=>{
    // 요청하는 브라우저의 쿠키를 json 형식으로 브라우저에 보여준다
    response.send(request.cookies);
})

// 쿠키 설정하기 -- 참고로 쿠키는 지우지 않거나 설정해주지 않으면 안 지워짐
app.get('/setCookie', (request, response)=>{
    // 쿠키 생성 -- 두 개 모두 json 생성하는 것임
    response.cookie('type', 'cookie');
    response.cookie('property', {
        name : 'cookie',
        taste : 'delicious'
    })
    response.redirect('/getCookie');
})

// 4. 서버 실행
app.listen(8080, ()=>{console.log('server is running')})