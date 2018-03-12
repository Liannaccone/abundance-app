var exports = module.exports = {}
var db = require("../models");

  exports.signup = function(req, res) {
      res.render('signup');
  }

  exports.signin = function(req, res) {
      res.render('signin');
  }

  exports.dashboard = function(req, res) {
    var reqUser = req.session.passport.user;
    var hbsObject = {};
    // queries db for all products
    db.Product.findAll({}).then(function(data) {
      hbsObject.product = data
    });
    // queries db for all user items where userID is reqUser
    // db.Useritem.findAll({
    //   userId: reqUser
    // }).then(function(data) {
    //   hbsObject.useritem = data
    // });
    // // queries db for all user items where userID is not reqUser
    // db.Useritem.findAll({
    //   userId: {
    //     $not:reqUser
    //   }
    // }).then(function(data) {
    //   hbsObject.communityitem = data
    //   console.log(hbsObject);
    //   res.render('dashboard', hbsObject)
    // })
  }

  exports.forum = function(req, res) {
      res.render('forum');
  }

  exports.logout = function(req, res) {
      req.session.destroy(function(err) {
          res.redirect('/');
      });
  }
