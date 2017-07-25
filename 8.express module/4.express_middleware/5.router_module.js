// 라우터를 외부 모듈로 추출한다
var express = require('express');
var router = express.Router();

// 페이지 라우트
router.get('/index', (request, response)=>{
    response.send('<h1>Index Page</h1>');
})

exports.router = router;