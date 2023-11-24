const express = require("express");

const { pedidoSchema } = require("../validacoes/pedidoSchema");

const { listarPedidos } = require("../controladores/pedidos/listarPedidos");
const { cadastrarPedido } = require("../controladores/pedidos/cadastrarPedido");
const { autenticador } = require("../intermediarios/autenticador");

const rotaPedido = express();

rotaPedido.use(autenticador);

rotaPedido.post("/", pedidoSchema, cadastrarPedido);
rotaPedido.get("/", listarPedidos);

module.exports = rotaPedido;
