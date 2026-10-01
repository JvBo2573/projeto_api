const pedidoRepository = require('../repositories/pedidoRepository');

const listarPedido = async(req, res)=>{
    try {
        const pedidos = await pedidoRepository.getAllPedidos();
        res.json(pedidos);
        
        if (!pedidos) {
            res.status(400).json({
                mensagem: 'Não foi encontrado o pedido'
            });
        }
    } catch (error) {
        res.status(500).json({
            mensagem: 'Erro interno ao buscar pedidos'
        });
    }
}

const buscarPedidosPorPessoa = async(req, res)=>{
    try {

        const pessoa_id = req.params.pessoa_id;
        const pedidos = await pedidoRepository.getPedidosByPessoaId(pessoa_id);

        if (pedidos.length === 0) {
            return res.status(400).json({
                mensagem: 'Nenhum pedido encontrado para esta pessoa.'
            });
        }

        res.json(pedidos);
    } catch (erro) {
        res.status(500).json({
            mensagem: 'Erro interno ao buscar pedido'
        });
    }
}

const criarPedido = async(req, res)=>{
    try {
        const { pessoa_id, produto_id, quantidade } = req.body;
        
        if (!pessoa_id || !produto_id || !quantidade) {
            return res.status(400).json({
                mensagem: 'pessoa_id, produto_id e quantidade são obrigatórios'
            });
        }

        if (quantidade <= 0) {
            return res.status(400).json({ mensagem: 'A quantidade deve ser maior que zero'});
        }
        const novoPedido = await pedidoRepository.createPedido(pessoa_id, produto_id, quantidade);
        res.status(201).json(novoPedido);
        
    } catch (erro) {
        
        if (erro.code === '23503') {
            return res.status(404).json({ mensagem: 'A pessoa ou o produto informado não existe.' });
        }
        
        res.status(500).json({
            mensagem: 'Erro interno ao buscar pedido'
        });
    }
}


module.exports = { listarPedido, buscarPedidosPorPessoa, criarPedido }