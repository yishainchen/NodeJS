
function home(res) {
  console.log("This is the home page.");
  res.writeHead(200, {"Content-Type": "text/plain"});
  res.end("This is home page.");
}
 
function blog(res) {
  console.log("This is the blog page.");
  res.writeHead(200, {"Content-Type": "text/plain"});
  res.end("This is blog page.");
}
 
exports.home = home;
exports.blog = blog;