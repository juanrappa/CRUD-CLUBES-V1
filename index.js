const { createClub } = require("./services/createClubs");
const { createClubs } = require("./services/createClubs");
const  classClub  = require("./entities/class-club");

const express = require("express");

const exphbs = require("express-handlebars");
const fs = require("fs");
const PUERTO = 8080;
const app = express();
const hbs = exphbs.create();

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

const clubes = JSON.parse(fs.readFileSync("./data/equipos.json"));

app.get("/", (req, res) => {
  res.render("home", {
    layout: "layout",
    data : createClubs(classClub,clubes)
  });
});

app.listen(PUERTO);
console.log(`Escuchando en http://localhost:${PUERTO}`);
