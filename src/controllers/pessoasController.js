const pessoasRepositorys = require('../repositories/pessoasRepository');

const listarPessoas = async (req, res) => {
    try {
        const pessoas = await pessoasRepositorys.getAllPessoas();
        res.json(pessoas);
    } catch (error) {
        console.error(error.mensagem);
        res.status(500).json({
            mensagem: 'Erro interno ao buscar pessoas'
        });
    }
}

module.exports = { listarPessoas }
