const knex = require("../../conexoes/database");
const { excluirImagem } = require("../../conexoes/storageBuckets");

const excluirProduto = async (req, res) => {
  const { id } = req.params;
  try {
    const produto = await knex("produtos").where({ id }).first();

    if (!produto) {
      return res.status(404).json({ mensagem: "Produto não encontrado." });
    }

    const produtoVendido = await knex("pedido_produtos").where({ produto_id: id }).first();

    if (produtoVendido) {
      return res.status(400).json({
        mensagem: "O produto não pode ser excluído pois está vinculado a um pedido",
      });
    }

    const imagemURL = produto.produto_imagem;

    if (imagemURL !== null) {
      await excluirImagem(imagemURL);
    }

    await knex("produtos").where({ id }).del();

    return res.status(204).send();
  } catch (error) {
    return res.status(500).json({ mensagem: "Erro inesperado do servidor" });
  }
};

module.exports = {
  excluirProduto,
};
