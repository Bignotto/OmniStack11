const express = require("express");
const Produtor = require("./controllers/ProdutorController");
const Produtos = require("./controllers/ProdutosController");

const routes = express.Router();

routes.get("/", (req, res) => {
  res.send("Semana OmniStack 11 - Thiago Bignotto");
});

routes.post("/produtor", Produtor.create);
routes.get("/produtor", Produtor.index);

routes.post("/Produtos", Produtos.create);
routes.get("/Produtos", Produtos.index);

module.exports = routes;
