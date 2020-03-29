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
    const { page = 1 } = req.query;

    const [qtd] = await connection("produtos").count();

    //FIXME: protudos e produtor com o campo nome
    const produtos = await connection("produtos")
      .join("produtor", "produtor.id", "=", "produtos.produtor_id")
      .limit(5)
      .offset((page - 1) * 5)
      .select([
        "produtos.*",
        "produtos.nome",
        "produtor.cidade",
        "produtor.uf",
        "produtor.telefone",
        "produtor.email"
      ]);

    res.header("X-Total-Count", qtd["count(*)"]);
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
