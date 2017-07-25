// 1. 모듈 추출
var express = require('express');

// 2. 서버 생성
var app = express();

// 3. static 미들웨어 설정 -- 왜 사진이 안 나오는지 모르겠음
app.use(express.static("D:\androidSchool\server\Node.js\모던 웹을 위한 node\8.express module\4.express_middleware\6.static"));
app.use((request, response)=>{
    response.status(200).send('<img src="/Penguins.jpg" width="100%" />');
})

// 4. 서버 실행
app.listen(8080, ()=>{console.log('server is running')})