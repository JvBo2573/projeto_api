const express = require('express');
const router = express.Router(); 

const pessoasController = require('../controllers/pessoasController');

router.get('/', pessoasController.listarPessoas);
router.get('/:cpf', pessoasController.listarPessoasPorId);
router.post('/', pessoasController.criarPessoas);

module.exports = router;