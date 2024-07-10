const inquirer = require('inquirer');
const Department = require('./lib/department');
const Role = require('./lib/role');
const Employee = require('./lib/employee');

async function main() {
    const choices = [
        'View all departments',
        'View all roles',
        'View all employees',
        'Add a department',
        'Add a role',
        'Add an employee',
        'Update an employee role',
        'Exit'
    ];

    let exit = false;
    while (!exit) {
        const { action } = await inquirer.prompt([
            {
                type: 'list',
                name: 'action',
                message: 'What would you like to do?',
                choices
            }
        ]);

        switch (action) {
            case 'View all departments':
                const departments = await Department.getAll();
                console.table(departments);
                break;
            case 'View all roles':
                const roles = await Role.getAll();
                console.table(roles);
                break;
            case 'View all employees':
                const employees = await Employee.getAll();
                console.table(employees);
                break;
            case 'Add a department':
                const { name } = await inquirer.prompt([
                    {
                        type: 'input',
                        name: 'name',
                        message: 'Enter the name of the department:'
                    }
                ]);
                await Department.add(name);
                console.log('Department added successfully!');
                break;
            case 'Add a role':
                const { title, salary, department_id } = await inquirer.prompt([
                    {
                        type: 'input',
                        name: 'title',
                        message: 'Enter the name of the role:'
                    },
                    {
                        type: 'input',
                        name: 'salary',
                        message: 'Enter the salary for the role:'
                    },
                    {
                        type: 'input',
                        name: 'department_id',
                        message: 'Enter the department ID for the role:'
                    }
                ]);
                await Role.add(title, salary, department_id);
                console.log('Role added successfully!');
                break;
            case 'Add an employee':
                const { first_name, last_name, role_id, manager_id } = await inquirer.prompt([
                    {
                        type: 'input',
                        name: 'first_name',
                        message: 'Enter the first name of the employee:'
                    },
                    {
                        type: 'input',
                        name: 'last_name',
                        message: 'Enter the last name of the employee:'
                    },
                    {
                        type: 'input',
                        name: 'role_id',
                        message: 'Enter the role ID for the employee:'
                    },
                    {
                        type: 'input',
                        name: 'manager_id',
                        message: 'Enter the manager ID for the employee (or leave blank):',
                        default: null
                    }
                ]);
                await Employee.add(first_name, last_name, role_id, manager_id);
                console.log('Employee added successfully!');
                break;
            case 'Update an employee role':
                const { employee_id, new_role_id } = await inquirer.prompt([
                    {
                        type: 'input',
                        name: 'employee_id',
                        message: 'Enter the ID of the employee to update:'
                    },
                    {
                        type: 'input',
                        name: 'new_role_id',
                        message: 'Enter the new role ID for the employee:'
                    }
                ]);
                await Employee.updateRole(employee_id, new_role_id);
                console.log('Employee role updated successfully!');
                break;
            case 'Exit':
                exit = true;
                break;
        }
    }
}

main();
