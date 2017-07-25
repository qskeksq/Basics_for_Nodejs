var express = require('express');

var app = express();

app.use((request, response)=>{
                    // heades 아니라 header 임
    var agent = request.header('User-Agent');
    if(agent.toLowerCase().match(/chrome/)){
        response.send('hello chorome!');
    } else {
        response.send('hello express');
    }
});

app.listen(8080, ()=>{console.log('server is running')})