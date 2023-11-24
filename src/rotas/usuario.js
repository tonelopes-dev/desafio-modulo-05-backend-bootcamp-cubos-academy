const express = require("express");
const { usuarioSchema } = require("../validacoes/usuarioSchema");
const { detalharUsuario } = require("../controladores/usuario/detalharUsuario");
const { AtualizarUsuario } = require("../controladores/usuario/atualizarUsuario");
const { autenticador } = require("../intermediarios/autenticador");
const { cadastrarUsuario } = require("../controladores/usuario/cadastrarUsuario");

const rotaUsuario = express();

rotaUsuario.post("/", usuarioSchema, cadastrarUsuario);
rotaUsuario.use(autenticador);

rotaUsuario.get("/", detalharUsuario);
rotaUsuario.put("/", usuarioSchema, AtualizarUsuario);

module.exports = rotaUsuario;
