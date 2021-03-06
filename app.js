const express = require("express");
const hbs = require("hbs");
const app = express();
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/cosplayDB", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
})

mongoose.connection.on("connected", () =>
  console.log("yay mongodb connected :)")
)

mongoose.connection.on("error", () =>
  console.log("nay db connection error :(")
)

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(__dirname + "/public"))
app.set("views", __dirname + "/views")
app.set("view engine","hbs")
hbs.registerPartials(__dirname + "/views/partials")

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

const cosplayRouter = require("./routes/cosplay");
app.use("/cosplay", cosplayRouter);

app.listen(4000, () => {
    console.log("server is ready at @ http://localhost:4000");
});

module.exports = app;
