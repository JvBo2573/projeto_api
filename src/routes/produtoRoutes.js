const express = require('express');
const router = express.Router(); 

const produtoController = require('../controllers/produtoController');

router.get('/', produtoController.listarProdutos);
router.get('/:id', produtoController.listarPorId);
router.post('/',produtoController.salvarProdutos);
router.put('/:id', produtoController.atualizarProdutos);
router.delete('/:id', produtoController.deletarProdutos);

module.exports = router;
