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
  },

  async delete(req, res) {
    const { id } = req.params;
    const produtor_id = req.headers.authorization;

    const produto = await connection("produtos")
      .select("produtor_id")
      .where("id", id)
      .first();

    if (produto.produtor_id !== produtor_id) {
      return res.status(401).json({ error: "Este produto não é seu!" });
    }

    await connection("produtos")
      .where("id", id)
      .delete();
    return res.status(204).send();
  }
};
