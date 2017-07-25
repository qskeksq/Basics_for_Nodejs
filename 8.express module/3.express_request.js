var express = require('express');

var app = express();

app.use(function(request, response){
    var agent = request.header('User-Agent');
    console.log(request.headers);
    console.log(agent);

    if (agent.toLowerCase().match(/chrome/)) {
        response.send('<h1>Hello Chrome</h1>');
    } else {
        response.send('<h1>Hello express</h1>');
    }
})

app.listen(8080, function () {
    console.log('server is running');
})