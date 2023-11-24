const express = require("express");

const { loginSchema } = require("../validacoes/usuarioSchema");
const { loginUsuario } = require("../controladores/login/loginUsuario");

const rotaLogin = express();

rotaLogin.post("/", loginSchema, loginUsuario);

module.exports = rotaLogin;
