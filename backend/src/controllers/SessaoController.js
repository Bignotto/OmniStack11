const connection = require("../database/connection");

module.exports = {
  async create(req, res) {
    const { id } = req.body;

    const produtor = await connection("produtor")
      .select("nome")
      .where("id", id)
      .first();

    if (!produtor) {
      return res.status(400).json({ error: "Produtor não encontrado!" });
    }

    return res.json(produtor);
  }
};
