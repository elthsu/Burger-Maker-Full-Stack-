var db = require("../models");

module.exports = function(app) {

  app.get("/", function(req, res) {
    db.burger.findAll({}).then(function(data) {
      var hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });

  app.post("/", function(req, res) {
    db.burger.create({

      name: req.body.name,
      meat: req.body.meat,
      onion: req.body.onion,
      cheese: req.body.cheese

    }).then(function() {
      res.redirect("/");
    });
  });

  app.put("/:id", function(req, res) {
    db.burger.update({
      devoured: req.body.devoured
    }, {
      where: {
        id: req.params.id
      }
    }).then(function() {
      res.redirect("/");
    });
  });

    app.delete("/:id", function(req, res) {
      db.burger.destroy({
          where: {
            id: req.params.id
          }
      }).then(function() {
        res.redirect("/");
      });
    });

};
