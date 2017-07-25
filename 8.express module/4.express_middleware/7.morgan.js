// 1. 모듈 추출
var express = require('express');
var morgan = require('morgan');

// 2. 서버 생성
var app = express();

// 3. morgan 미들웨어 설정
app.use(morgan('combined'))
app.use(morgan(':method + :date'))
app.use((request, response)=>{
    response.status(200).send('<h1>morgan basic<h1/>');
})

// 4. 서버 실행
app.listen(8080, ()=>{console.log('server is running')})