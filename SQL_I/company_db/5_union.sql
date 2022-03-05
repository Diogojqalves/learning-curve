-- Find a list of employee and branch names
SELECT first_name
FROM employee
UNION
SELECT branch_name
FROM branch;

-- Rule same data type and same number of columns required

-- Find a list of all clients & branch suppliers names
SELECT client_name, client.branch_id
FROM client
UNION
SELECT supplier_name, branch_supplier.branch_id
FROM branch_supplier;