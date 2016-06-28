var http = require("http");
var url = require("url");
var router = require("./route");
 
function onRequest(req, res) {
  var pathname = url.parse(req.url).pathname;
 
  router.route(pathname);
 
  res.writeHead(200, {"Content-Type": "text/plain"});
  res.end("Hello World");
}
 
http.createServer(onRequest).listen(3000);
console.log("Server has started to listen at port: 3000.");