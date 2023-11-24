const joi = require("joi");

const clienteSchema = async (req, res, next) => {
	const { nome, email, cpf, cep, rua, numero, bairro, cidade, estado } = req.body;
	try {
		const schemaUser = joi.object({
			nome: joi.string().required().messages({
				"any.required": "O campo nome é obrigatório",
				"string.empty": "O campo nome está vazio",
			}),
			email: joi.string().email().required().messages({
				"any.required": "O campo email é obrigatório",
				"string.empty": "O campo email está vazio",
				"string.email": "O campo email precisa ter um formato válido",
			}),
			cpf: joi.string().length(11).pattern(/^\d+$/).required().messages({
				"any.required": "O campo CPF é obrigatório",
				"string.empty": "O campo CPF está vazio",
				"string.length": "O campo CPF precisa conter 11 caracteres",
				"string.pattern.base": "O campo CPF deve conter apenas números",
			}),
			cep: joi.string().length(8).pattern(/^\d+$/).messages({
				"string.length": "O campo CEP precisa conter 8 caracteres",
				"string.pattern.base": "O campo CEP deve conter apenas números",
			}),
			rua: joi.string().messages({
				"string.empty": "O campo rua está vazio",
			}),
			numero: joi.string().messages({
				"string.empty": "O campo numero está vazio",
			}),
			bairro: joi.string().messages({
				"string.empty": "O campo bairro está vazio",
			}),
			cidade: joi.string().messages({
				"string.empty": "O campo cidade está vazio",
			}),
			estado: joi.string().messages({
				"string.empty": "O campo estado está vazio",
			}),
		});

		await schemaUser.validateAsync({
			nome,
			email,
			cpf,
			cep,
			rua,
			numero,
			bairro,
			cidade,
			estado,
		});
		next();
	} catch (error) {
		return res.status(400).json({ message: error.details[0].message });
	}
};

const clienteEditSchema = async (req, res, next) => {
	const { nome, email, cpf, cep, rua, numero, bairro, cidade, estado } = req.body;
	try {
		const schemaUser = joi.object({
			nome: joi.string().messages({
				"string.empty": "O campo nome está vazio",
			}),
			email: joi.string().email().messages({
				"string.empty": "O campo email está vazio",
				"string.email": "O campo email precisa ter um formato válido",
			}),
			cpf: joi.string().length(11).pattern(/^\d+$/).messages({
				"string.empty": "O campo CPF está vazio",
				"string.length": "O campo CPF precisa conter 11 caracteres",
				"string.pattern.base": "O campo CPF deve conter apenas números",
			}),
			cep: joi.string().length(8).pattern(/^\d+$/).messages({
				"string.length": "O campo CEP precisa conter 8 caracteres",
				"string.pattern.base": "O campo CEP deve conter apenas números",
			}),
			rua: joi.string().messages({
				"string.empty": "O campo rua está vazio",
			}),
			numero: joi.string().messages({
				"string.empty": "O campo numero está vazio",
			}),
			bairro: joi.string().messages({
				"string.empty": "O campo bairro está vazio",
			}),
			cidade: joi.string().messages({
				"string.empty": "O campo cidade está vazio",
			}),
			estado: joi.string().messages({
				"string.empty": "O campo estado está vazio",
			}),
		});

		await schemaUser.validateAsync({
			nome,
			email,
			cpf,
			cep,
			rua,
			numero,
			bairro,
			cidade,
			estado,
		});
		next();
	} catch (error) {
		return res.status(400).json({ message: error.details[0].message });
	}
};

module.exports = { clienteSchema, clienteEditSchema };
