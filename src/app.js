const express = require ('express');
const cors = require ('cors');

const produtoRoutes = require('./routes/produtoRoutes');
const app = express();

app.use(express.json());
app.use(cors());

app.use('/produtos', produtoRoutes);

module.exports = app;