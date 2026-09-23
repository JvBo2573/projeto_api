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

        if (!produtos) {
            return res.status(404).json({
                mensagem: `Produto com ID ${id} não encontrado`
            });
        }
        
        res.json(produtos);
        
    } catch (error) {
        res.status(500).json({
            mensagem: 'Erro interno ao buscar por id'
        });
    }
}

const salvarProdutos = async (req,res)=>{
    try {
        const {nome, preco, descricao} = req.body
        
        if (!nome || !preco || !descricao) {
            return res.status(404).json({
                mensagem: `preencha todos os campos!`
            });
        }

        const produtos = await ProdutoRepository.postProdutos(nome, preco, descricao);

        res.json(produtos);
        
    } catch (error) {
        res.status(500).json({
            mensagem: 'erro interno ao salvar os dados'
        });
    }
}

module.exports = { listarProdutos, listarPorId, salvarProdutos};