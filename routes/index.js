var express = require('express');
var router = express.Router();

router.get("/", (request, response) => {
    response.render("home");
});

router.get("/about", (request, response) => {
    response.render("about");
});

router.get("/works", (request, response) => {
    response.render("works", {
      css: ["home", "gallery"],
      js: ["gallery"]
    });
});

module.exports = router;