-- Combine rows based on related/shared columns

-- Add the extra branch
INSERT INTO branch VALUES(4, "Buffalo", NULL, NULL);

-- Get branch managers with Join
SELECT employee.emp_id, employee.first_name, branch.branch_name
FROM employee
JOIN branch    -- JOIN, LEFT JOIN, RIGHT JOIN
ON employee.emp_id = branch.mgr_id; -- condition