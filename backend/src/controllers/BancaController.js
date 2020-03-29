const connection = require("../database/connection");

module.exports = {
  async index(req, res) {
    const produtor_id = req.headers.authorization;

    const produtos = await connection("produtos")
      .where("produtor_id", produtor_id)
      .select("*");

    return res.json(produtos);
  }
};
