let { POSTGRES_HOST, POSTGRES_PASSWORD, PGPORT, POSTGRES_USER, POSTGRES_DATABASE } =
	process.env;
const { Pool } = require("pg");
const pool = new Pool({
	user: POSTGRES_USER,
	host: POSTGRES_HOST,
	database: POSTGRES_DATABASE,
	password: POSTGRES_PASSWORD,
	port: PGPORT,
	ssl: {
		require: true,
	},
});

const knex = require("knex")({
	client: "pg",
	connection: {
		host: pool.options.host,
		database: pool.options.database,
		user: pool.options.user,
		password: pool.options.password,
		port: pool.options.port,
		ssl: pool.options.ssl,
	},
	pool: { min: 0, max: 7 }, // Configure o tamanho do pool do knex
});

module.exports = knex;
