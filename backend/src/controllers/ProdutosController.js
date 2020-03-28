const connection = require("../database/connection");

module.exports = {
  async create(req, res) {
    const { nome, descricao, valor } = req.body;
    const produtor_id = req.headers.authorization;

    const [id] = await connection("produtos").insert({
      nome,
      descricao,
      valor,
      produtor_id
    });

    return res.json({ id });
  },

  async index(req, res) {
    const produtos = await connection("produtos").select("*");
    return res.json(produtos);
  }
};
