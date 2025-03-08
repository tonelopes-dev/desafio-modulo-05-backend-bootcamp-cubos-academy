const knex = require("../../conexoes/database");
const { uploadImagem } = require("../../conexoes/storageBuckets");

const cadastrarProduto = async (req, res) => {
  const { descricao, quantidade_estoque, valor, categoria_id } = req.body;


  try {
    let produto = await knex("produtos")
      .insert({
        descricao,
        quantidade_estoque,
        valor,
        categoria_id,
      })
      .returning("*");

    const id = produto[0].id;


    return res.status(201).json(produto[0]);
  } catch (error) {
    return res.status(500).json({ mensagem: "Erro inesperado do servidor" });
  }
};

module.exports = { cadastrarProduto };
