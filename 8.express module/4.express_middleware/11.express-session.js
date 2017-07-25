// 1. 모듈 추출
var express = require('express');
var session = require('express-session');

// 2. 서버 생성
var app = express();

// 3. 미들웨어 설정
app.use(session({
    secret : 'secret key',
    resave : false,
    saveUninitialized : true
}));

app.use((request, response)=>{
    // 세션 저장
    request.session.now = (new Data()).toUTCString();

    // 응답
    response.send(request.session);    
})


// 4. 서버 등록
app.listen(8080, ()=>{console.log('server is running')});