var express = require('express');

var app = express();

app.use(function (request, response, next) {
    console.log('first middleware');
    request.number = 10;
    response.number = 20;
    next();
});

app.use(function (request, response, next) {
    console.log('second middleware');
    response.send('<h1>' + request.number + ':' + response.number + '</h1>');
    next();
});

app.use(function (request, response, next) {
    console.log('third middleware');
})

app.listen(8080, function () {
    console.log('server is running');
})