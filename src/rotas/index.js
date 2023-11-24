const express = require("express");

const rotaCategoria = require("./categoria");
const rotaUsuario = require("./usuario");
const rotaCliente = require("./cliente");
const rotaProduto = require("./produto");
const rotaPedido = require("./pedido");
const rotaLogin = require("./login");

const rotas = express();

rotas.use("/categoria", rotaCategoria);
rotas.use("/login", rotaLogin);
rotas.use("/usuario", rotaUsuario);
rotas.use("/cliente", rotaCliente);
rotas.use("/produto", rotaProduto);
rotas.use("/pedido", rotaPedido);

module.exports = rotas;
