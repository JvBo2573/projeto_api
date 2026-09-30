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

const atualizarProdutos = async (req, res)=> {
    try {

        const id = parseInt(req.params.id);
        if (isNaN(id)) {
            return res.status(400).json({
                mensagem: 'ID informado na URL é invalido'
            });
        }
        const {nome, preco, descricao} = req.body

        if (!nome || !preco || !descricao) {
            return res.status(400).json({
                mensagem: 'preencha todos os campos' 
            });
        }

        const produtos = await ProdutoRepository.updateProdutos(id, nome, preco, descricao);

        if (produtos.rowCount === 0) {
            return res.status(404).json({ mensagem: 'Produto não encontrado no banco de dados.' });
        }

        res.json (produtos);

    } catch (error) {
        console.log(error.message, error.name, error.code);
        res.status(500).json({
            mensagem: 'erro interno ao salvar os dados'
        });
    }
}

const deletarProdutos = async (req, res)=>{
    try {
        const id = parseInt(req.params.id);

        if (isNaN(id)) {
            return res.status(400).json({
                mensagem: 'ID informado na URL é invalido'
            });
        }

        const produtos = await ProdutoRepository.deleteProdutos(id);

        if (produtos.rowCount === 0) {
            return res.status(404).json({ mensagem: 'Produto não encontrado para exclusão' });
        }
        res.json({
            mensagem: 'produto excluido com sucesso'
        });

    } catch (error) {
        console.log(error.message, error.name, error.code);
        res.status(500).json({
            mensagem: 'erro interno ao deletar'
        });
    }
}

module.exports = { listarProdutos, listarPorId, salvarProdutos, atualizarProdutos, deletarProdutos};