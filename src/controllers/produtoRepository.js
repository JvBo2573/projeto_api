const ProdutoRepository = require('../repositories/produtoRepository');

const listarProdutos = async (req, res) => {
    try {
        const produtos = await ProdutoRepository.getAllProdutos(); 
        res.json(produtos); 
    } catch (erro) {
        console.error(erro.message);
        res.status(500).json({ 
            mensagem: 'Erro interno ao buscar produtos' 
        });
    }
};

const listarPorId = async (req, res)=>{
    try {
        const id = req.params.id;
        const produtos = await ProdutoRepository.getProdutosById(id);
        
        res.json(produtos);
    } catch (error) {
        res.status(500).json({
            mensagem: 'Erro interno ao buscar por id'
        });
    }
}

module.exports = { listarProdutos, listarPorId };