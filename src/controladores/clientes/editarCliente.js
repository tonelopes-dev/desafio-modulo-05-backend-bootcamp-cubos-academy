const knex = require("../../conexoes/database");

const editarCliente = async (req, res) => {
  let { nome, email, cpf, cep, rua, numero, bairro, cidade, estado } = req.body;
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ mensagem: "O id é obrigatório" });
  }

  if (!nome && !email && !cpf) {
    return res.status(400).json({ mensagem: "O nome, email ou cpf é obrigatório no body da requisição" });
  }

  try {
    if (email) {
      const buscarEmail = await knex("clientes").where({ email }).first();

      if (buscarEmail) {
        return res.status(400).json({ mensagem: "O email já está cadastrado." });
      }
    }

    if (cpf) {
      const buscarCpf = await knex("clientes").where({ cpf }).first();

      if (buscarCpf) {
        return res.status(400).json({ mensagem: "O CPF já está cadastrado." });
      }
    }

    const editarProduto = await knex("clientes").where({ id }).first();

    if (!editarProduto) {
      return res.status(404).json("Cliente não encontrado");
    }

    const clienteAtualizado = await knex("clientes").where({ id }).update({
      nome,
      email,
      cpf,
      cep,
      rua,
      numero,
      bairro,
      cidade,
      estado,
    });

    if (!clienteAtualizado) {
      return res.status(400).json("O cliente não foi atualizado");
    }

    return res.status(200).json("O cliente foi atualizado com sucesso.");
  } catch (error) {
    return res.status(500).json({ mensagem: "Erro inesperado do servidor" });
  }
};

module.exports = { editarCliente };
