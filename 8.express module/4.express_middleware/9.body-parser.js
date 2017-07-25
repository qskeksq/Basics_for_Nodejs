// 1. 모듈 추출
var express = require('express');
var fs = require('fs');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// 2. 서버 생성
var app = express();

// 3. 미들웨어 설정
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended : false}));

// 4. 라우터 설정 -- 어떤 페이지로 넘어갈지 설정해준다
app.get('/', (request, response)=>{
    // 만약 클라이언트의 쿠키에 auth 가 있다면 로그인 성공이고
    if(request.cookies.auth){
        response.send('<h1>Login Success</h1>');
        // 없으면 로그인 페이지로 넘긴다
    } else {
        response.redirect('/login');
    }
})

// GET 방식으로 요청할 경우 login.html 페이지를 화면에 출력한다
app.get('/login', (request, response)=>{
    fs.readFile('login.html', (error, data)=>{
        response.send(data.toString());
    })
})

// 같은 '/login'페이지인데 POST 방식으로 요청할 경우 로그인 정보를 request 객체 body에 담아서 서버에 요청한다
app.post('/login', (request, response)=>{
    // 쿠키 생성
    var login = request.body.login;
    var password = request.body.password;

    // 로그인 확인
    if(login == 'qskeksq' && password == '1234'){
        response.cookie('auth', true);
        response.redirect('/');
    } else {
        // 로그인 실패
        response.redirect('login');
    }

})


// 5. 서버 등록
app.listen(8080, ()=>{console.log('server is running...')});