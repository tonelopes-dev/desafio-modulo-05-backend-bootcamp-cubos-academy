const transporter = require('../../conexoes/nodemailer')
const compiladorHtml = require('../../utils/compiladorHTML')
const knex = require('../../conexoes/database')

const cadastrarPedido = async (req, res) => {
  const { cliente_id, observacao, pedido_produtos } = req.body

  try {
    let valor_total = 0
    const listaProdutosDoPedido = []
    const listaProdutosParaEmail = []

    const cliente = await knex('clientes').where('id', cliente_id)

    if (!cliente[0]) {
      return res.status(404).json({ mensagem: 'Cliente não encontrado' })
    }

    for (let produto of pedido_produtos) {
      const produtoEncontrado = await knex('produtos').where(
        'id',
        produto.produto_id
      )

      if (produtoEncontrado[0] === undefined) {
        return res
          .status(404)
          .json({
            mensagem: `O produto com id:${produto.produto_id} não foi encontrado.`
          })
      }

      if (produto.quantidade_produto <= 0) {
        return res
          .status(400)
          .json({
            mensagem: `A quantidade de produtos precisa ser maior que zero.`
          })
      }

      if (
        produto.quantidade_produto > produtoEncontrado[0].quantidade_estoque
      ) {
        return res.status(400).json({
          mensagem: `Só temos apenas ${produtoEncontrado[0].quantidade_estoque} unidades do produto id: ${produto.produto_id} em nosso estoque.`
        })
      }

      listaProdutosDoPedido.push(produto)

      valor_total += produto.quantidade_produto * produtoEncontrado[0].valor
    }

    const pedido = {
      cliente_id,
      observacao,
      valor_total
    }

    await knex('pedidos').insert(pedido)

    for (const produto of listaProdutosDoPedido) {
      const produtoEncontrado = await knex('produtos').where(
        'id',
        produto.produto_id
      )

      await knex('produtos')
        .update(
          'quantidade_estoque',
          produtoEncontrado[0].quantidade_estoque - produto.quantidade_produto
        )
        .where('id', produto.produto_id)

      var pedido_id = await knex('pedidos').where('cliente_id', cliente_id)

      const extratoDoPedido = {
        pedido_id: pedido_id[0].id,
        produto_id: produto.produto_id,
        quantidade_produto: produto.quantidade_produto,
        valor_produto: produtoEncontrado[0].valor
      }

      await knex('pedido_produtos').insert(extratoDoPedido)

      const nomeCategoriaproduto = await knex('categorias')
        .where('id', produtoEncontrado[0].categoria_id)
        .first()

      const valorProdutoFormatado = (produtoEncontrado[0].valor / 100).toFixed(
        2
      )

      const destalhesDoProdutoParaEmail = {
        nomeProduto: produtoEncontrado[0].descricao,
        quantidadeDoPedido: produto.quantidade_produto,
        valorProduto: valorProdutoFormatado,
        categoria: nomeCategoriaproduto.descricao,
        imagemDoProduto: produtoEncontrado[0].produto_imagem
      }

      listaProdutosParaEmail.push(destalhesDoProdutoParaEmail)
    }

    const valorTotalParaEmail = (valor_total / 100).toFixed(2)

    const emailCliente = cliente[0].email

    const html = await compiladorHtml(
      './src/tamplatesEmails/emailPedidoNoSistema.html',
      {
        pedido_id: pedido_id[0].id,
        produtos: listaProdutosParaEmail,
        valorTotal: `O valor total R$ ${valorTotalParaEmail}`,
        agradecimento: `Obrigado por comprar com a NodeNinjas`
      }
    )

    transporter.sendMail({
      from: '"Node Ninjas" <tonelopes.dev@gmail.com>',
      to: `${emailCliente}`,
      subject: 'O pedido foi efetuado com sucesso!',
      html: html
    })

    return res.status(200).json({ mensagem: 'Pedido cadastrado com sucesso' })
  } catch (error) {
    return res.status(500).json({ mensagem: 'Erro interno do servidor' })
  }
}
module.exports = { cadastrarPedido }
