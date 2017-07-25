// 1. 모듈 추출
var express = require('express');

// 2.1 서버 생성
var app = express();

// 2.2 request 이벤트 리스너 등록
app.use(function (request, response) {

    // 배열을 만들 떄는 이렇게 만들어 주는군
    var output = [];
    for (var i = 0; i < 10; i++) {
        // 배열에 추가하기
        output.push({
            count: i,
            name: 'name : ' + i
        });
    }
    // statusCode 아니라 status 
    response.status(200).send(output);

});

// 3. 서버 실행
app.listen(8080, function () {
    console.log('server is running');
})
