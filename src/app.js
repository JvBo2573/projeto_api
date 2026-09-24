const express = require ('express');
const cors = require ('cors');

const produtoRoutes = require('./routes/produtoRoutes');
const pessoasRoutes = require('./routes/pessoasRoutes');
const app = express();

app.use(express.json());
app.use(cors());

app.use('/produtos', produtoRoutes);
app.use('/pessoas', pessoasRoutes);

module.exports = app;
