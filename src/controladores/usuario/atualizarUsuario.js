const knex = require("../../conexoes/database");
const bcrypt = require("bcrypt");

const AtualizarUsuario = async (req, res) => {
  const { nome, email } = req.body;
  let { senha } = req.body;
  const { id } = req.usuario;
  try {
    const usuarioExiste = await knex("usuarios").where({ id }).first();

    if (!usuarioExiste) {
      return res.status(404).json("Usuario não encontrado");
    }

    if (senha) {
      senha = await bcrypt.hash(senha, 10);
    }

    if (email !== req.usuario.email) {
      const emailUsuarioExiste = await knex("usuarios").where({ email }).first();

      if (emailUsuarioExiste) {
        res.status(404).json("O Email já existe.");
        return;
      }
    }

    const usuarioAtualizado = await knex("usuarios").where({ id }).update({
      nome,
      email,
      senha,
    });

    if (!usuarioAtualizado) {
      return res.status(400).json("O usuario não foi atualizado");
    }

    res.status(200).json("Usuario foi atualizado com sucesso.");
    return;
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

module.exports = { AtualizarUsuario };
