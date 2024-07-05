INSERT INTO department (name)
VALUES
('Sales'),
('Engineering'),
('Finance'),
('Marketing');

INSERT INTO role (title, salary, department_id)
VALUES
('Sales Lead', 100000, 1),
('Salesperson', 80000, 1),
('Software Engineer', 120000, 2),
('Accountant', 90000, 3),
('Marketing Manager', 110000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('John', 'Doe', 1, NULL),
('Jane', 'Smith', 2, 1),
('Michael', 'Johnson', 3, NULL),
('Emily', 'Davis', 4, NULL),
('Sarah', 'Brown', 5, NULL);
