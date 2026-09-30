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

const postProdutos = async (nome, preco, descricao)=>{
    const sql = `INSERT INTO produtos (nome,preco, descricao) values
    ('${nome}', '${preco}', '${descricao}');`
    const resultado = await pool.query(sql);
    return resultado.rows[0];
}

const updateProdutos = async (id, nome, preco, descricao)=>{
    const sql = `UPDATE produtos SET nome = $1, preco = $2, descricao = $3 WHERE id = $4 RETURNING *`;
    const resultado = await pool.query(sql, [nome, preco, descricao, id]);
    return resultado.rows[0]; 
}

const deleteProdutos = async (id)=> {
    const sql = 'DELETE FROM produtos WHERE id = $1 RETURNING *';
    const resultado = await pool.query(sql, [id]);
    return resultado;
}

module.exports = { getAllProdutos, getProdutosById, postProdutos, updateProdutos, deleteProdutos };