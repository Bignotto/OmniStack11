const connection = require("../database/connection");
const crypto = require("crypto");

module.exports = {
  async create(req, res) {
    const { nome, endereco, telefone, email, cidade, uf } = req.body;
    const id = crypto.randomBytes(4).toString("HEX");

    await connection("produtor").insert({
      id,
      nome,
      endereco,
      telefone,
      email,
      cidade,
      uf
    });

    return res.json({ id });
  },

  async index(req, res) {
    const produtores = await connection("produtor").select("*");
    return res.json(produtores);
  }
};
