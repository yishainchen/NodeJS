var showPage = require("./showPage");
 
function route(pathname, res) {
 
  var handle = {}
  handle["/"] = showPage.home;
  handle["/blog"] = showPage.blog;
 
  if (typeof handle[pathname] === 'function') {
    return handle[pathname](res);
  } else {
    console.log("404 Not Found " + pathname);
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end("404 Not Found " + pathname);
  }
}
 
exports.route = route;