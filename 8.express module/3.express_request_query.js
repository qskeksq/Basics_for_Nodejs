var express = require('express');

var app = express();

app.use((request, response)=>{
    
    var name = request.name;
    var region = request.region;

    response.send('<h1>'+name+':'+region+"</h1>")

});

app.listen(8080, ()=>{console.log('server is running')})