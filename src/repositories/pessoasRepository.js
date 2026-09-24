const pool = require("../config/db");

const getAllPessoas = async () => {
    const sql = 'SELECT * FROM pessoas';
    const resultado = await pool.query(sql);
    return resultado.rows;
}

module.exports = {getAllPessoas};