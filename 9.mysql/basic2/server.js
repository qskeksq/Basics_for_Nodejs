
// 1. http 모듈 가져오기
var http = require("http");
var url = require('url');
var con = require("./connection_module");

// 2. http 모듈로 서버 생성하기
var server = http.createServer( function (request, response) {  // 함수가 하나이면 무조건 그것을 호출한다.
 
  var parsedUrl = url.parse(request.url);

  var path = parsedUrl.pathname;

  // pathName 을 통해 아무곳에서나 데이터가 호출되지 않도록 해준다.
  // 요청 서버 리소스 체크
  if(path == '/bbs/list'){
    // 응답 헤더
    response.writeHead(200, {'Content-Type' : 'application/json'});
    // DB 처리 함수 호출 -- 아마 이게 body 영역을 처리해 주는 것 같다.
    con.getData(response);
  
  } else {
    response.writeHead(404, {'Content-Type' : 'text/html'});
  
    response.end("<h1>404 File Not Found </h1>");
  }

}  );

// 3. 서버가 로드되면 알려주고, 사용자 요청 대기하기
server.listen(8080, function(){
  console.log("server is running");
});
