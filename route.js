
var showPage = require("./showPage");
 
function route(pathname) {
 
  var handle = {}
  handle["/"] = showPage.home;
  handle["/blog"] = showPage.blog;
 
  if (typeof handle[pathname] === 'function') {
    return handle[pathname]();
  } else {
    console.log("404 Not Found " + pathname);
    return "404 Not Found.";
  }
}
 
exports.route = route;