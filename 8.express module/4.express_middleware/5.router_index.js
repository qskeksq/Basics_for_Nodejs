var express = require('express');
var app = express();

app.use('/a', require("./5.middleware_router_module").router);
// app.use('/b', require("./5.middleware_router_index").router);
// app.use('/c', require("./5.middleware_router_index").router);


app.listen(8080, ()=>{
    console.log('server is running');
})