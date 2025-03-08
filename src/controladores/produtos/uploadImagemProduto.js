const knex = require("../../conexoes/database");
const { uploadImagem } = require("../../conexoes/storageBuckets");

const uploadImagemProduto = async (req, res) => {
  const { originalname, mimetype, buffer } = req.file;
  const idProduto = req.params.idProduto;

  try {
    const produto = await knex("produtos").where({ id: idProduto }).first();

    if (!produto) {
      return res.status(404).json({ mensagem: "Produto nao encontrado" });
    }

    const imagem_do_produto = await uploadImagem(`produtos/${originalname}`, buffer, mimetype);
    console.log(imagem_do_produto);

    const produto_com_imagem = await knex("produtos")
      .update({
        produto_imagem: imagem_do_produto.url,
      })
      .where({ id: idProduto })
      .returning("*");

    return res.status(201).json(produto_com_imagem[0]);
  } catch (error) {
    return res.status(500).json({ mensagem: "Erro inesperado do servidor" });
  }
};

module.exports = { uploadImagemProduto };
