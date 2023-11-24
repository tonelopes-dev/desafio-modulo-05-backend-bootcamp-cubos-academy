const joi = require("joi");

const produtoSchema = async (req, res, next) => {
	const { descricao, quantidade_estoque, valor, categoria_id } = req.body;
	try {
		const schemaUser = joi.object({
			descricao: joi.string().required().messages({
				"any.required": "O campo descricao é obrigatório",
				"string.empty": "O campo descricao está vazio",
				"string.base": "por favor insira uma descricao válida",
			}),
			quantidade_estoque: joi.number().min(1).required().messages({
				"any.required": "O campo quantidade_estoque é obrigatório",
				"number.base": "por favor insira uma quantidade valida",
				"number.min": "por favor insira uma quantidade valida",
			}),
			valor: joi.number().min(1).required().messages({
				"any.required": "O campo valor é obrigatório",
				"number.base": "por favor insira um valor valido",
				"number.min": "por favor insira um valor valido",
			}),
			categoria_id: joi.number().max(9).min(0).required().messages({
				"any.required": "O campo categoria_id é obrigatório",
				"number.base": "por favor insira um valor valido",
				"number.max": "por favor insira um id categoria valido",
				"number.min": "por favor insira um id categoria valido",
			}),
		});

		await schemaUser.validateAsync({
			descricao,
			quantidade_estoque,
			valor,
			categoria_id,
		});
		next();
	} catch (error) {
		return res.status(400).json({ message: error.message });
	}
};

module.exports = { produtoSchema };
