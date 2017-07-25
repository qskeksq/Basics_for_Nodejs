var fs = require('fs');

var text = fs.readFileSync('textfile.txt', 'utf8');

// 동기화 방식이기 때문에 인자로 넘어오지 않아도 끝나고 text 가 넘어온다
try{
    console.log(text);  
} catch(e) {
    console.log(e);
}


fs.readFile('textfileAsync.txt', 'utf8', function (error, data) {

    // 조기 리턴식으로 에러 처리
    if (error) { return console.log(error); }

    // 비동기 처리이기 때문에 인자로 넘어온 값을 출력해줘야 전체 읽은 값이 넘어온다
    console.log(data);
})