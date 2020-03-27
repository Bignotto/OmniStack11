const express = require("express");
const Produtor = require("./controllers/ProdutorController");

const routes = express.Router();

routes.get("/", (req, res) => {
  res.send("Semana OmniStack 11 - Thiago Bignotto");
});

routes.post("/produtor", Produtor.create);
routes.get("/produtor", Produtor.index);

module.exports = routes;
