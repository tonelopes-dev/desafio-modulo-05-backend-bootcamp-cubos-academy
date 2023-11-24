const knex = require("../../conexoes/database");

const detalharCliente = async (req, res) => {
  const { id } = req.params;

  try {
    const clienteExistente = await knex("clientes").where({ id }).first();

    if (!clienteExistente) {
      return res.status(400).json("O cliente não foi encontrado");
    }

    return res.status(200).json(clienteExistente);
  } catch (error) {
    return res.status(500).json({ mensagem: "Erro inesperado do servidor" });
  }
};
module.exports = { detalharCliente };
