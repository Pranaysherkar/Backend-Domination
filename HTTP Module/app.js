const http = require("http");

var server = http.createServer((req,res)=>{
    console.log(req.url == "/");
res.end("oh! ,it's really works");

});

server.listen(3000);