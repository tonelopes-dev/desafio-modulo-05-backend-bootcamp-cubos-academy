const knex = require("../../conexoes/database");

const detalharProduto = async (req, res) => {
	const { id } = req.params;
	try {
		const produtoEncontrado = await knex("produtos").where({ id }).returning("*");

		if (!produtoEncontrado[0]) {
			return res.status(404).json({ mensagem: "Produto não encontrado" });
		}

		return res.status(200).json(produtoEncontrado[0]);
	} catch (error) {
		return res.status(500).json({ mensagem: "Erro inesperado do servidor" });
	}
};

module.exports = {
	detalharProduto,
};
