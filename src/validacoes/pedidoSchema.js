const joi = require("joi");

const pedidoSchema = async (req, res, next) => {
	const { cliente_id, observacao, pedido_produtos } = req.body;
	try {
		const schemaUser = joi.object({
			cliente_id: joi.number().required().messages({
				"any.required": "O campo cliente_id é obrigatório",
				"string.empty": "O campo cliente_id está vazio",
				"number.base": "O campo cliente_id precisa ser um número"
			}),
			observacao: joi.string().required().messages({
				"any.required": "O campo observacao é obrigatório",
				"string.empty": "O campo observacao está vazio",

			}),
			pedido_produtos: joi.array().items(joi.object({
				produto_id: joi.number().required().messages({
					"any.required": "O campo produto_id é obrigatório",
					"string.empty": "O campo produto_id está vazio",
					"number.base": "O campo produto_id precisa ser um número",
				}),
				quantidade_produto: joi.number().required().min(1).messages({
					"any.required": "O campo quantidade_produto é obrigatório",
					"string.empty": "O campo quantidade_produto está vazio",
					"number.base": "O campo quantidade_produto precisa ser um número",
					"number.min": "O campo quantidade_produto precisa ser maior que zero"
				})
			})).required().messages({
				"any.required": "O campo pedido_produtos é obrigatório",
				"string.empty": "O campo pedido_produtos está vazio",
			})

		});

		await schemaUser.validateAsync({
			cliente_id,
			observacao,
			pedido_produtos

		});
		next();
	} catch (error) {
		return res.status(400).json({ message: error.details[0].message });
	}
};

module.exports = { pedidoSchema };
