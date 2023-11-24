const knex = require("../../conexoes/database");

const cadastrarCliente = async (req, res) => {
  const { nome, email, cpf } = req.body;

  try {
    const buscarEmail = await knex("clientes").where({ email }).first();

    if (buscarEmail) {
      return res.status(400).json({ mensagem: "O email já está cadastrado." });
    }

    const buscarCpf = await knex("clientes").where({ cpf }).first();

    if (buscarCpf) {
      return res.status(400).json({ mensagem: "O CPF já está cadastrado." });
    }

    const usuario = await knex("clientes")
      .insert({
        nome,
        email,
        cpf,
      })
      .returning("*");

    return res.status(201).json(usuario[0]);
  } catch (error) {
    return res.status(500).json({ mensagem: "Erro inesperado do servidor" });
  }
};

module.exports = { cadastrarCliente };
