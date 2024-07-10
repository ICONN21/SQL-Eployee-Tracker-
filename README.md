# SQL-Eployee-Tracker-

## Description

The Employee Management System is a command-line application built with Node.js, Inquirer, and PostgreSQL. It allows business owners to view and manage the departments, roles, and employees in their company. The application supports various functionalities including viewing all departments, roles, and employees, adding new departments, roles, and employees, and updating employee roles.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Database Schema](#database-schema)
- [Features](#features)
- [Bonus Features](#bonus-features)
- [Walkthrough Video](#walkthrough-video)
- [License](#license)

## Installation

1. **Clone the repository:**

    ```sh
    git clone https://github.com/yourusername/employee-management-system.git
    cd employee-management-system
    ```

2. **Install dependencies:**

    ```sh
    npm install
    ```

3. **Set up the PostgreSQL database:**

    - Ensure PostgreSQL is installed and running on your machine.
    - Create a `.env` file in the root of the project and add your database credentials:

      ```plaintext
      DB_USER=your_db_user
      DB_HOST=localhost
      DB_NAME=employee_db
      DB_PASSWORD=your_db_password
      DB_PORT=5432
      ```

    - Run the setup script to drop and recreate the `employee_db` database and set up the schema:

      ```sh
      node setupDatabase.js
      ```

## Usage

1. **Start the application:**

    ```sh
    node index.js
    ```

2. **Follow the prompts** to view and manage the company's departments, roles, and employees.

## Database Schema

The database schema consists of three tables: `department`, `role`, and `employee`.

- **Department Table:**

  ```sql
  CREATE TABLE department (
      id SERIAL PRIMARY KEY,
      name VARCHAR(30) UNIQUE NOT NULL
  );


## Features

View All Departments: Displays a table showing department names and IDs.
View All Roles: Displays a table showing job titles, role IDs, department names, and salaries.
View All Employees: Displays a table showing employee IDs, first names, last names, job titles, departments, salaries, and managers.
Add Department: Prompts for department name and adds it to the database.
Add Role: Prompts for role name, salary, and department, then adds the role to the database.
Add Employee: Prompts for first name, last name, role, and manager, then adds the employee to the database.
Update Employee Role: Prompts to select an employee and a new role, then updates the employee's role in the database.

## Bonus Features

Update Employee Managers: Allows updating the manager of an employee.
View Employees by Manager: Displays employees grouped by their manager.
View Employees by Department: Displays employees grouped by department.
Delete Departments, Roles, and Employees: Allows deletion of departments, roles, and employees.
View Total Utilized Budget of a Department: Displays the combined salaries of all employees in a department.

## Walkthrough Video
[Click here to view the file](https://drive.google.com/file/d/1QFu2pEQiQaH0-R3Je3O1JEUp5CpF06Gv/view)