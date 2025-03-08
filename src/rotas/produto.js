const express = require("express");
const multer = require("../intermediarios/multer");

const { produtoSchema } = require("../validacoes/produtoSchema");

const { uploadImagemProduto } = require("../controladores/produtos/uploadImagemProduto");
const { cadastrarProduto } = require("../controladores/produtos/cadastrarProduto");
const { listarProdutos } = require("../controladores/produtos/listarProdutos");
const { detalharProduto } = require("../controladores/produtos/detalharProdutos");
const { editarProduto } = require("../controladores/produtos/editarProduto");
const { excluirProduto } = require("../controladores/produtos/excluirProduto");
const { autenticador } = require("../intermediarios/autenticador");

const rotaProduto = express();

rotaProduto.use(autenticador);

rotaProduto.post("/:idProduto/upload", multer.single("produto_imagem"), uploadImagemProduto);
rotaProduto.post("/", produtoSchema, cadastrarProduto);
rotaProduto.get("/", listarProdutos);
rotaProduto.get("/:id", detalharProduto);
rotaProduto.put("/:id", multer.single("produto_imagem"), produtoSchema, editarProduto);
rotaProduto.delete("/:id", excluirProduto);

module.exports = rotaProduto;
