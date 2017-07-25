var fs = require('fs');

var data = 'Hello world...';

// 동기이기 때문에 콜백 함수를 달아줄 필요 없음
fs.writeFileSync('writeTextASync.txt', data);

// 동기 방식은 try catch 로 File IO 예외 처리 해준다.
try{
    console.log('sync complete');
} catch(e) {
    console.log(e);
}


// 비동기이기 때문에 콜백 함수를 달아주는 것임. 헷갈리지 말 것!!
fs.writeFile('writeTextSync.txt', data, 'utf8', function (error) {  // 비동기 방식은 에러값이 첫 인자로 들어온다

    // 조기 리턴식으로 에러 처리
    if (error) { return console.log(error); }

    console.log('async complete');

});