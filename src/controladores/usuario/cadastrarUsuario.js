const knex = require("../../conexoes/database");
const bcrypt = require("bcrypt");

const cadastrarUsuario = async (req, res) => {
  const { nome, email, senha } = req.body;

  try {
    const usuarioEncontrado = await knex("usuarios").where({ email }).first();

    if (usuarioEncontrado) {
      return res.status(400).json({ mensagem: "O email já existe" });
    }

    const senhaCriptografada = await bcrypt.hash(senha, 10);

    const usuario = await knex("usuarios")
      .insert({
        nome,
        email,
        senha: senhaCriptografada,
      })
      .returning("*");

    return res.status(201).json(usuario[0]);
  } catch (error) {
    return res.status(400).json({
      mensagem: error.message,
    });
  }
};

module.exports = { cadastrarUsuario };
