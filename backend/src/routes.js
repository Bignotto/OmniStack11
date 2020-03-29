const express = require("express");
const Produtor = require("./controllers/ProdutorController");
const Produtos = require("./controllers/ProdutosController");
const Banca = require("./controllers/BancaController");

const routes = express.Router();

routes.get("/", (req, res) => {
  res.send("Semana OmniStack 11 - Thiago Bignotto");
});

routes.post("/produtor", Produtor.create);
routes.get("/produtor", Produtor.index);

routes.post("/produtos", Produtos.create);
routes.get("/produtos", Produtos.index);
routes.delete("/produtos/:id", Produtos.delete);

routes.get("/banca", Banca.index);

module.exports = routes;
