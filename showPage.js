function home() {
  console.log("This is the home page.");
  return "This is home page.";
}
 
function blog() {
  console.log("This is the blog page.");
  return "This is blog page.";
}
 
exports.home = home;
exports.blog = blog;