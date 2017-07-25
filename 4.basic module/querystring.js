var url = require('url');
var queryString = require('querystring');   //대소문자 조심

var parsedObject = url.parse('https://opentutorials.org/course/2136');
var paredObject2 = queryString.parse(parsedObject.query);               // 
console.log(parsedObject);
console.log(paredObject2);
