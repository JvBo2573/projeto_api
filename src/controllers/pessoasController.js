const pessoasRepositorys = require('../repositories/pessoasRepository');

const listarPessoas = async (req, res) => {
    try {
        const pessoas = await pessoasRepositorys.getAllPessoas();
        res.json(pessoas);''
    } catch (error) {
        console.error(error.mensagem);
        res.status(500).json({
            mensagem: 'Erro interno ao buscar pessoas'
        });
    }
}

const listarPessoasPorId = async (req, res)=>{
    try {
        const cpf = req.params.cpf;
        const pessoas = await pessoasRepositorys.getPessoassById(cpf);

        if(!pessoas){
            return res.status(404).json({
                mensagem: `Não foi possivel encontrar uma pessoa com o cpf: ${cpf}`
            });
        }
        res.json(pessoas);
    } catch (error) {
        res.status(500).json({
            mensagem: `Erro interno ao buscar o cpf: ${cpf}`
        });
    }
}

const criarPessoas = async(req, res)=>{
    try {
        const {nome, email, telefone, cpf, senha} = req.body;
        const pessoas = await pessoasRepositorys.postPessoas(nome, email, telefone, cpf, senha);

        if (!nome || !email || !telefone || !cpf || !senha) {
            return res.json({
                mensagem: 'Preencha todos os campos para prosseguir!' 
            });
        }
        res.json(pessoas);
    } catch (error) {
        res.status(500).json({
            mensagem: error.message
        });
    }

}

module.exports = { listarPessoas, listarPessoasPorId,criarPessoas }
