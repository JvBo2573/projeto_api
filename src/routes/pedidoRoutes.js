const express = require('express');
const router = express.Router(); 

const pedidoController = require('../controllers/pedidoController');

router.get('/', pedidoController.listarPedido);
router.get('/:pessoa_id', pedidoController.buscarPedidosPorPessoa);
router.post('/', pedidoController.criarPedido);

module.exports = router;