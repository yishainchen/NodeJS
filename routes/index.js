var express = require('express');
var router = express.Router();


router.get('/userlist', function(req, res) {
    var db = req.db;
    var collection = db.get('usercollection');
    collection.find({},{},function(e,docs){
 
      var name = [];
      var objKey = Object.keys(docs);
      objKey.forEach(function(objectid){
        var itemkeys = Object.keys(docs[objectid]);
        itemkeys.forEach(function(itemkey) {
          var itemvalue =docs[objectid][itemkey];
          console.log(objectid+': '+itemkey+' = '+itemvalue);
          if (itemkey == "username") {
            name.push(itemvalue);
          }
        })
      })
      console.log(name);
      res.render('userlist', {
          "userlist" : name
      });
    });
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET New User page. */
router.get('/adduser', function(req, res) {
    res.render('adduser', { title: 'Add New User' });
});


module.exports = router;


