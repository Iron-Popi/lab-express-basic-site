const express = require("express");
const hbs = require("hbs");
const app = express();


app.use(express.static(__dirname + "/public"))
app.set("views", __dirname + "/views");
app.set("view engine","hbs");
hbs.registerPartials(__dirname + "/views/partials");

app.get("/", (request, response) => {
    response.render("home");
});

app.get("/about", (request, response) => {
    response.render("about");
});

app.get("/works", (request, response) => {
    response.render("works", {
      css: ["home", "gallery"],
      js: ["gallery"]
    });
});

app.get("*", (request, response) => {
    response.send("yo, WTF");
});


app.listen(4000, () => {
    console.log("server is ready at @ http://localhost:4000");
});