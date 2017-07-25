var url = require('url');

var parsedObject = url.parse('https://opentutorials.org/course/2136');
console.log(parsedObject);     // 이런식으로 url 에서 parse 한 후 하나씩 다 꺼내서 사용할 수 있다.
var pathName = parsedObject.pathname;    // pathName 이 아니라 pathname 이다
console.log(pathName);
