const express = require("express");

const { clienteSchema, clienteEditSchema } = require("../validacoes/clienteSchema");

const { cadastrarCliente } = require("../controladores/clientes/cadastrarCliente");
const { listarClientes } = require("../controladores/clientes/listarClientes");
const { detalharCliente } = require("../controladores/clientes/detalharCliente");
const { editarCliente } = require("../controladores/clientes/editarCliente");
const { autenticador } = require("../intermediarios/autenticador");

const rotaCliente = express();

rotaCliente.use(autenticador);

rotaCliente.post("/", clienteSchema, cadastrarCliente);
rotaCliente.get("/", listarClientes);
rotaCliente.get("/:id", detalharCliente);
rotaCliente.put("/:id", clienteEditSchema, editarCliente);

module.exports = rotaCliente;
