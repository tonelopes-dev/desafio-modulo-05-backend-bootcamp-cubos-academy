const knex = require("../../conexoes/database");

const listarProdutos = async (req, res) => {
  const { categoria_id } = req.query;

  let produtosEncontrados;
  try {
    if (!categoria_id) {
      produtosEncontrados = await knex("produtos");
    } else {
      produtosEncontrados = await knex("produtos").where("categoria_id", categoria_id);
    }

    if (!produtosEncontrados.length) {
      return res.status(404).json({ mensagem: "Produto não encontrado" });
    }

    return res.status(200).json(produtosEncontrados);
  } catch (error) {
    return res.status(500).json({ mensagem: "Erro inesperado do servidor" });
  }
};

module.exports = {
  listarProdutos,
};
