const pool = require("../config/db");

const getAllProdutos = async ()=>{
    const sql = 'SELECT * FROM produtos';
    const resultado = await pool.query(sql);
    return resultado.rows;
}

const getProdutosById = async (id)=>{
    const sql = 'SELECT * FROM produtos WHERE id = $1'
    const resultado = await pool.query(sql, [id]);
    return resultado.rows[0];
}

module.exports = { getAllProdutos, getProdutosById };