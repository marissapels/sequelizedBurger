var db = require("../models");
var express = require("express");

var router = express.Router();

// var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  db.Burger.findAll().then(function(data) {
    res.render("index", {food: data});
  });
});

router.post("/", function(req, res) {
  db.Burger.create({
    burger_name: req.body.create,
    devoured: false
  }).then(function(){
    res.redirect("/");
  });
});

router.put("/:id", function(req, res) {
  db.Burger.update(
  {
    devoured: req.body.eat
  },
  {
    where: {
      id: req.params.id
    }
  }).then(function(){
    res.redirect("/");
  });
});

// Export routes for server.js to use.
module.exports = router;
