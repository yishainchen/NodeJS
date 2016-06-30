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

//Routing for API
router.get('/api', function(req, res) {
  res.json({ message: 'This is our api!' });
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET New User page. */
router.get('/adduser', function(req, res) {
    res.render('adduser', { title: 'Add New User' });
});


/* POST to Add User Service */
router.post('/adduser', function(req, res) {
 
    // Set our internal DB variable
    var db = req.db;
 
    // Get our form values. These rely on the "name" attributes
    var userName = req.body.username;
    var Email = req.body.email;
 
    // Set our collection
    var collection = db.get('usercollection');
 
    // Submit to the DB
    collection.insert({
        "username" : userName,
        "email" : Email
    }, function (err, doc) {
        if (err) {
            // If it failed, return error
            res.send("There was a problem adding the information to the database.");
        }
        else {
            // If it worked, set the header so the address bar doesn't still say /adduser
            res.location("userlist");
            // And forward to success page
            res.redirect("userlist");
        }
    });
});

module.exports = router;


