const knex = require("../../conexoes/database");

const editarProduto = async (req, res) => {
  let { descricao, quantidade_estoque, valor, categoria_id } = req.body;
  const { id } = req.params;

  try {
    const produtoExiste = await knex("produtos").where({ id }).first();

    if (!produtoExiste) {
      return res.status(404).json("Produto não encontrado");
    }

    const produtoAtualizado = await knex("produtos").where({ id }).update({
      descricao,
      quantidade_estoque,
      valor,
      categoria_id,
    });

    if (!produtoAtualizado) {
      return res.status(400).json("O produto não foi atualizado");
    }

    return res.status(200).json("O produto foi atualizado com sucesso.");
  } catch (error) {
    return res.status(500).json({
      mensagem: "Erro interno do servidor",
      mensagem: error.message,
    });
  }
};

module.exports = { editarProduto };
