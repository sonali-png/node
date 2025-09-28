const http = require('http');
const server = http.createServer((req, res)=> {
    res.writeHead(200, {"Content-Type":"text/plain"});
    res.end("Welcome to Node js");
});
server.listen(3000, ()=> {
    console.log("Server started on http://localhost:3000");
});