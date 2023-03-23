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
app.get('/:id/look',(req,res)=>{
  res.render("club",{
    layout:"layout",
    club: createClub(Number(req.params.id),classClub,clubes,createClubs)
  })
})
const a = createClub(57,classClub,clubes,createClubs)
console.log(a)
app.listen(PUERTO);
console.log(`Escuchando en http://localhost:${PUERTO}`);
