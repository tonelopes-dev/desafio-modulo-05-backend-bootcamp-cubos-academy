const knex = require("../../conexoes/database");

const listarPedidos = async (req, res) => {
  const clienteId = req.query;
  console.log();

  try {
    let listarPedidos = knex("pedidos")
      .select()
      .join("pedido_produtos", "pedidos.id", "=", "pedido_produtos.pedido_id");

    if (clienteId.cliente_id) {
      listarPedidos = listarPedidos.where("pedidos.cliente_id", parseInt(clienteId.cliente_id));
    }

    const resultados = await listarPedidos;
    const listaPedidos = [];

    resultados.forEach((resultado) => {
      const pedidoExistente = listaPedidos.find((pedido) => pedido.pedido.id == resultado.pedido_id);

      if (pedidoExistente) {
        pedidoExistente.pedido_produtos.push({
          produto_id: resultado.produto_id,
          quantidade_produto: resultado.quantidade_produto,
        });
      } else {
        listaPedidos.push({
          pedido: {
            id: resultado.pedido_id,
            valor_total: resultado.valor_total,
            observacao: resultado.observacao,
            cliente_id: resultado.cliente_id,
          },
          pedido_produtos: [
            {
              produto_id: resultado.produto_id,
              quantidade_produto: resultado.quantidade_produto,
            },
          ],
        });
      }
    });
    return res.json(listaPedidos);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { listarPedidos };
