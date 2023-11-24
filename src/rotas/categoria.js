const express = require("express");
const { listarCategorias } = require("../controladores/categorias/listarCategorias");
const rotaCategoria = express();

rotaCategoria.get("/", listarCategorias);

module.exports = rotaCategoria;
