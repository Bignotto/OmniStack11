const express = require("express");

const routes = express.Router();

routes.get("/", (req, res) => {
  res.send("Semana OmniStack 11 - Thiago Bignotto");
});

module.exports = routes;
