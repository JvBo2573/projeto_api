const express = require('express');
const router = express.Router(); 

const produtoController = require('../controllers/produtoController');

router.get('/', produtoController.listarProdutos);
router.get('/:id', produtoController.listarPorId);
router.post('/',produtoController.salvarProdutos);

module.exports = router
