const pool = require('../db/db');

class Department {
    static async getAll() {
        const { rows } = await pool.query('SELECT * FROM department');
        return rows;
    }

    static async add(name) {
        const { rows } = await pool.query('INSERT INTO department (name) VALUES ($1) RETURNING *', [name]);
        return rows[0];
    }
}

module.exports = Department;
