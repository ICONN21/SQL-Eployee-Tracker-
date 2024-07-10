const pool = require('../db/db');

class Role {
    static async getAll() {
        const { rows } = await pool.query('SELECT role.*, department.name AS department_name FROM role LEFT JOIN department ON role.department_id = department.id');
        return rows;
    }

    static async add(title, salary, department_id) {
        const { rows } = await pool.query('INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3) RETURNING *', [title, salary, department_id]);
        return rows[0];
    }
}

module.exports = Role;
