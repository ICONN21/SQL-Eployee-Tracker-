const pool = require('../db/db');

class Employee {
    static async getAll() {
        const { rows } = await pool.query(`
            SELECT employee.*, role.title AS job_title, role.salary, department.name AS department_name,
                   CONCAT(manager.first_name, ' ', manager.last_name) AS manager_name
            FROM employee
            LEFT JOIN role ON employee.role_id = role.id
            LEFT JOIN department ON role.department_id = department.id
            LEFT JOIN employee manager ON employee.manager_id = manager.id
        `);
        return rows;
    }

    static async add(first_name, last_name, role_id, manager_id) {
        const { rows } = await pool.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4) RETURNING *', [first_name, last_name, role_id, manager_id]);
        return rows[0];
    }

    static async updateRole(employee_id, role_id) {
        const { rows } = await pool.query('UPDATE employee SET role_id = $1 WHERE id = $2 RETURNING *', [role_id, employee_id]);
        return rows[0];
    }
}

module.exports = Employee;
