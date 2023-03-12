const express = require("express");
const exphbs = require("express-handlebars");

const app = express();
const port = 5000;

const hbs = exphbs.create({
  extname: "hbs",
  layoutsDir: "views/templates/",
});

const users = [
    {name: "Botir", number: 123123, id: 0},
    {name: "Sobir", number: 321321, id: 1},
    {name: "Toxir", number: 987987, id: 2},
    {name: "Nodir", number: 567567, id: 3},
]

app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");

app.get("/api/users/getAll", (req, res) => {
  res.render("index.hbs", {
    title:"home",
  });
});

app.get("/api/users/about", (req, res) => {
  res.render("about.hbs",{
    title:"about"
  });
});
app.get("/api/users/table", (req, res) => {
  res.render("table.hbs",{
    // name: users.name,
    // number: users.number,
    // id: users.id
    users:users
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
