const express = require ('express');
const cors = require ('cors');

const produtoRoutes = require('./routes/produtoRoutes');
const pessoasRoutes = require('./routes/pessoasRoutes');
const pedidoRoutes = require('./routes/pedidoRoutes');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/produtos', produtoRoutes);
app.use('/pessoas', pessoasRoutes);
app.use('/pedidos', pedidoRoutes)

module.exports = app;
