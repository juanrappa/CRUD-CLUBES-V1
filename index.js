const express = require("express");

const exphbs = require("express-handlebars");

const PUERTO = 8080;
const app = express();
const hbs = exphbs.create();

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

const clubes = require("./data/equipos.json");

app.get("/", (req, res) => {
  res.render("home", {
    layout: "layout",
  });
});

app.listen(PUERTO);
console.log(`Escuchando en http://localhost:${PUERTO}`);
